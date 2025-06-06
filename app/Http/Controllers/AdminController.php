<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Models\Message;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage;

class AdminController extends Controller
{
    public function index()
    {
        return view('admin.index'); 
    }

   public function users()
{
    $users = User::paginate(10);
    $totalUsers = User::count(); // Count total users
    return view('admin.users', compact('users', 'totalUsers'));
}

    public function destroy($id)
    {
        $user = User::findOrFail($id);
        $user->delete();

        return redirect()->route('admin.users')->with('success', 'User deleted successfully.');
    }   

    public function editUser($id)
    {
        $user = User::find($id);
        if (!$user) {
            abort(404);
        }
        return view('admin.users.edit', compact('user'));
    }

    public function storeUser(Request $request)
    {
        $request->validate([
            'full_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'phone' => 'required|string',
            'password' => 'required|string|min:6|confirmed',
        ]);

        User::create([
            'full_name' => $request->full_name,
            'email' => $request->email,
            'phone' => $request->phone,
            'password' => Hash::make($request->password),
        ]);

        return redirect()->route('admin.users')->with('success', 'User created successfully!');
    }

    public function message()
    {
        $message = Message::with(['sender', 'receiver'])->paginate(10);
        return view('admin.message', compact('message'));
    }

    public function showMessages()
    {
        $messages = Message::latest()->get();
        return view('admin.messages', compact('messages'));
    }

    public function markAsRead($id)
    {
        $message = Message::findOrFail($id);
        $message->status = 'read';
        $message->save();
        return redirect()->back()->with('success', 'Message marked as read.');
    }

    public function delete($id)
    {
        $message = Message::findOrFail($id);
        $message->delete();
        return redirect()->back()->with('success', 'Message deleted successfully.');
    }

    public function replyMessage(Request $request, $id)
    {
        $request->validate([
            'reply' => 'required|string|max:2000',
        ]);

        $message = Message::findOrFail($id);

        Mail::raw($request->reply, function ($mail) use ($message) {
            $mail->to($message->email)
                ->subject('Reply to your message');
        });

        $message->status = 'replied';
        $message->save();

        return redirect()->back()->with('success', 'Reply sent successfully.');
    }

    public function reply(Request $request)
    {
        $request->validate([
            'to_email' => 'required|email',
            'subject' => 'required|string',
            'body' => 'required|string',
        ]);

        Mail::raw($request->body, function ($message) use ($request) {
            $message->to($request->to_email)
                ->subject($request->subject);
        });

        return redirect()->back()->with('success', 'Reply sent successfully!');
    }

    public function storeMessage(Request $request)
    {
        $validated = $request->validate([
            'name'    => 'required|string|max:255',
            'email'   => 'required|email',
            'subject' => 'required|string|max:255',
            'message' => 'required|string',
        ]);

        $validated['status'] = 'unread';

        Message::create($validated);

        return back()->with('success', 'Message sent successfully!');
    }

    public function saveTeam(Request $request)
    {
        // Validate the request data
        $validated = $request->validate([
            'first_name' => 'required|string|max:255',
            'last_name' => 'required|string|max:255',
            'email' => 'required|email|unique:users',
            'phone' => 'nullable|string|max:20',
            'gender' => 'required|string',
            'position' => 'required|string',
            'department' => 'required|string',
            'date_of_birth' => 'nullable|date',
            'hire_date' => 'nullable|date',
            'address' => 'nullable|string',
            'national_id' => 'nullable|string|max:30',
            'photo' => 'nullable|image|mimes:jpeg,png,jpg,gif|max:2048',
            'password' => 'required|string|min:6|confirmed',
        ]);

        // Handle photo upload
        if ($request->hasFile('photo')) {
            $fileName = time() . '.' . $request->photo->extension();
            $request->photo->storeAs('photos', $fileName, 'public');
            $validated['photo'] = $fileName;
        }

        $validated['password'] = bcrypt($validated['password']);

        User::create($validated);

        return redirect()->back()->with('success', 'Staff member created successfully.');
    }
}
