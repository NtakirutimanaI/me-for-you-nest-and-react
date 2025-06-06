<?php

namespace App\Http\Controllers;

use App\Models\TeamMember;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TeamController extends Controller
{
    /**
     * Display a listing of the team members.
     */
    public function index()
    {
        $teamMembers = TeamMember::paginate(10); // You can change to `all()` if no pagination is needed
        return view('admin.team', compact('teamMembers'));
    }

    /**
     * Show the form for creating a new team member.
     */
    public function create()
    {
        return view('admin.team.create');
    }

    /**
     * Store a newly created team member in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|unique:team_members,email',
            'phone' => 'nullable|string|max:20',
            'position' => 'nullable|string|max:100',
            'department' => 'nullable|string|max:100',
            'status' => 'required|in:active,inactive',
            'hire_date' => 'nullable|date',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('photo')) {
            $fileName = time() . '.' . $request->photo->extension();
            $request->photo->storeAs('public/photos', $fileName);
            $validated['photo'] = $fileName;
        }

        TeamMember::create($validated);

        return redirect()->route('team.index')->with('success', 'Team member added successfully!');
    }

    /**
     * Show the form for editing the specified team member.
     */
    public function edit($id)
    {
        $member = TeamMember::findOrFail($id);
        return view('admin.team.edit', compact('member'));
    }

    /**
     * Update the specified team member in storage.
     */
    public function update(Request $request, $id)
    {
        $member = TeamMember::findOrFail($id);

        $validated = $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|unique:team_members,email,' . $id,
            'phone' => 'nullable|string|max:20',
            'position' => 'nullable|string|max:100',
            'department' => 'nullable|string|max:100',
            'status' => 'required|in:active,inactive',
            'hire_date' => 'nullable|date',
            'photo' => 'nullable|image|mimes:jpg,jpeg,png|max:2048',
        ]);

        if ($request->hasFile('photo')) {
            if ($member->photo) {
                Storage::disk('public')->delete('photos/' . $member->photo);
            }

            $fileName = time() . '.' . $request->photo->extension();
            $request->photo->storeAs('public/photos', $fileName);
            $validated['photo'] = $fileName;
        }

        $member->update($validated);

        return redirect()->route('team.index')->with('success', 'Team member updated successfully!');
    }

    /**
     * Remove the specified team member from storage.
     */
    public function destroy($id)
    {
        $member = TeamMember::findOrFail($id);

        if ($member->photo) {
            Storage::disk('public')->delete('photos/' . $member->photo);
        }

        $member->delete();

        return redirect()->route('team.index')->with('success', 'Team member deleted successfully.');
    }

    /**
     * Display the specified team member (optional).
     */
    public function show($id)
    {
        $member = TeamMember::findOrFail($id);
        return view('admin.team.show', compact('member'));
    }
}
