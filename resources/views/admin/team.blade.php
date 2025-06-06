<!DOCTYPE html>
<html>
<head>
    @include('admin.css')
    <!-- Bootstrap 5 JS (Make sure it's included after jQuery if used) -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>

    <style>
        body {
            background-color: #121212;
            color: #e0e0e0;
            font-family: 'Segoe UI', sans-serif;
        }

        .card {
            background-color: #1e1e1e;
            border: none;
        }

        .card-header {
            background: linear-gradient(90deg, #0d6efd, #6610f2);
            border-bottom: none;
        }

        .btn-add {
            float: right;
        }

        .table {
            background-color: #1e1e1e;
            color: #f1f1f1;
            border: none !important;
            box-shadow: none;
            width: 102%;
        }

        .table th {
            border-bottom: 2px solid #444;
            background-color: #292929;
        }

        .table td {
            border: none;
            border-bottom: 1px solid #333;
            vertical-align: middle;
            padding: 0.2rem 0.3rem;
            line-height: 1;
            font-size: 0.75rem;
        }

        .badge {
            font-size: 0.75rem;
        }

        .pagination {
            display: flex;
            justify-content: center;
            gap: 0.2rem;
            padding-top: 1rem;
        }

        .pagination .page-link {
            font-size: 0.65rem;
            background-color: #87CEEB;
            color: #fff;
            border: 1px solid #87CEEB;
            border-radius: 0.25rem;
        }

        .pagination .page-link:hover {
            background-color: #00BFFF;
        }

        .pagination .page-item.active .page-link {
            background-color: #007BFF;
        }

        @media (max-width: 768px) {
            .table {
                font-size: 0.75rem;
                width: 100%;
                display: block;
                overflow-x: auto;
                white-space: nowrap;
            }
        }
    </style>
</head>
<body>
    @include('admin.header')
    @include('admin.sidebar')

  

<div class="container mt-4">
    <h2 class="mb-4">Team Members</h2>

    <!-- Button to open Create Modal -->
    <button type="button" class="btn btn-primary mb-3" data-bs-toggle="modal" data-bs-target="#teamModal" onclick="openCreateModal()">
        Add New Team Member
    </button>

    <!-- Success message -->
    @if(session('success'))
        <div class="alert alert-success">{{ session('success') }}</div>
    @endif

    <!-- Team members table -->
    <table class="table table-bordered table-striped">
        <thead>
            <tr>
                <th>ID</th>
                <th>Photo</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Position</th>
                <th>Department</th>
                <th>Status</th>
                <th>Hire Date</th>
                <th>Actions</th>
            </tr>
        </thead>
        <tbody>
            @foreach($teamMembers as $member)
            <tr>
                <td>{{ $member->id }}</td>
                <td>
                    @if($member->photo)
                        <img src="{{ asset('storage/photos/' . $member->photo) }}" alt="Photo" width="50" height="50" style="object-fit:cover;">
                    @else
                        <span>No Photo</span>
                    @endif
                </td>
                <td>{{ $member->first_name }}</td>
                <td>{{ $member->last_name }}</td>
                <td>{{ $member->email ?? '-' }}</td>
                <td>{{ $member->phone ?? '-' }}</td>
                <td>{{ $member->position }}</td>
                <td>{{ $member->department ?? '-' }}</td>
                <td>{{ $member->status ?? '-' }}</td>
                <td>{{ $member->hire_date ?? '-' }}</td>
                <td>
                    <button class="btn btn-sm btn-info" 
                        onclick="openEditModal({{ $member }})" 
                        data-bs-toggle="modal" data-bs-target="#teamModal">
                        Edit
                    </button>

                    <form action="{{ route('team.destroy', $member->id) }}" method="POST" class="d-inline-block" onsubmit="return confirm('Delete this member?');">
                        @csrf
                        @method('DELETE')
                        <button type="submit" class="btn btn-sm btn-danger">
                            Delete
                        </button>
                    </form>
                </td>
            </tr>
            @endforeach

            @if($teamMembers->isEmpty())
                <tr><td colspan="11" class="text-center">No team members found.</td></tr>
            @endif
        </tbody>
    </table>

    <!-- Modal for Create/Edit -->
    <div class="modal fade" id="teamModal" tabindex="-1" aria-labelledby="teamModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-lg">
            <form id="teamForm" method="POST" enctype="multipart/form-data">
                @csrf
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="teamModalLabel">Add New Team Member</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onclick="resetForm()"></button>
                    </div>
                    <div class="modal-body">
                        <input type="hidden" id="memberId" name="memberId" value="">

                        <div class="row g-3">
                            <div class="col-md-6">
                                <label for="first_name" class="form-label">First Name *</label>
                                <input type="text" name="first_name" id="first_name" class="form-control" required>
                            </div>
                            <div class="col-md-6">
                                <label for="last_name" class="form-label">Last Name *</label>
                                <input type="text" name="last_name" id="last_name" class="form-control" required>
                            </div>
                            <div class="col-md-6">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" name="email" id="email" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label for="phone" class="form-label">Phone</label>
                                <input type="text" name="phone" id="phone" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label for="position" class="form-label">Position *</label>
                                <input type="text" name="position" id="position" class="form-control" required>
                            </div>
                            <div class="col-md-6">
                                <label for="department" class="form-label">Department</label>
                                <input type="text" name="department" id="department" class="form-control">
                            </div>
                            <div class="col-md-6">
                                <label for="status" class="form-label">Status *</label>
                                <select name="status" id="status" class="form-select" required>
                                    <option value="active">Active</option>
                                    <option value="inactive">Inactive</option>
                                </select>
                            </div>
                            <div class="col-md-6">
                                <label for="hire_date" class="form-label">Hire Date</label>
                                <input type="date" name="hire_date" id="hire_date" class="form-control">
                            </div>
                            <div class="col-md-12">
                                <label for="photo" class="form-label">Photo</label>
                                <input type="file" name="photo" id="photo" class="form-control" accept="image/*" onchange="previewPhoto(event)">
                                <img id="photoPreview" src="#" alt="Photo Preview" class="img-thumbnail mt-2" style="display:none; max-width:150px; max-height:150px;">
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onclick="resetForm()">Close</button>
                        <button type="submit" class="btn btn-primary" id="submitButton">Save</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

</div>

<script>
    const modalTitle = document.getElementById('teamModalLabel');
    const form = document.getElementById('teamForm');
    const submitButton = document.getElementById('submitButton');
    const photoPreview = document.getElementById('photoPreview');

    function openCreateModal() {
        modalTitle.textContent = 'Add New Team Member';
        submitButton.textContent = 'Create';
        form.action = "{{ route('team.store') }}";
        form.method = 'POST';
        resetForm();
    }

    function openEditModal(member) {
        modalTitle.textContent = 'Edit Team Member';
        submitButton.textContent = 'Update';
        form.action = `/team/${member.id}`;
        
        // Laravel requires method spoofing for PUT
        form.method = 'POST';

        // Add hidden _method input for PUT or PATCH if not exist
        if (!form.querySelector('input[name="_method"]')) {
            const methodInput = document.createElement('input');
            methodInput.type = 'hidden';
            methodInput.name = '_method';
            methodInput.value = 'PUT';
            form.appendChild(methodInput);
        } else {
            form.querySelector('input[name="_method"]').value = 'PUT';
        }

        // Fill form fields
        document.getElementById('memberId').value = member.id;
        document.getElementById('first_name').value = member.first_name;
        document.getElementById('last_name').value = member.last_name;
        document.getElementById('email').value = member.email ?? '';
        document.getElementById('phone').value = member.phone ?? '';
        document.getElementById('position').value = member.position;
        document.getElementById('department').value = member.department ?? '';
        document.getElementById('status').value = member.status ?? 'active';
        document.getElementById('hire_date').value = member.hire_date ?? '';

        // Show photo preview if exists
        if(member.photo) {
            photoPreview.src = `/storage/photos/${member.photo}`;
            photoPreview.style.display = 'block';
        } else {
            photoPreview.style.display = 'none';
        }
    }

    function resetForm() {
        form.reset();
        // Remove _method input if exists
        const methodInput = form.querySelector('input[name="_method"]');
        if (methodInput) methodInput.remove();

        photoPreview.style.display = 'none';
        document.getElementById('memberId').value = '';
    }

    function previewPhoto(event) {
        const input = event.target;
        if (input.files && input.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                photoPreview.src = e.target.result;
                photoPreview.style.display = 'block';
            };
            reader.readAsDataURL(input.files[0]);
        }
    }
</script>
 @include('admin.footer')
<!-- Bootstrap JS (make sure you include Popper.js if Bootstrap 5) -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>


<script>
    function openViewModal(user) {
        document.getElementById('view_full_name').textContent = user.full_name || 'N/A';
        document.getElementById('view_email').textContent = user.email || 'N/A';
        document.getElementById('view_phone').textContent = user.phone || 'N/A';
        document.getElementById('view_address').textContent = user.address || 'N/A';
        document.getElementById('view_role').textContent = user.role || 'N/A';
        var viewModal = new bootstrap.Modal(document.getElementById('viewModal'));
        viewModal.show();
    }

    function openEditModal(user) {
        document.getElementById('edit_user_id').value = user.id;
        document.getElementById('edit_full_name').value = user.full_name || '';
        document.getElementById('edit_email').value = user.email || '';
        document.getElementById('edit_phone').value = user.phone || '';
        document.getElementById('edit_address').value = user.address || '';
        document.getElementById('edit_role').value = user.role || 'user';

        var editUserForm = document.getElementById('editUserForm');
        editUserForm.action = '/team/' + user.id;
        var editModal = new bootstrap.Modal(document.getElementById('editModal'));
        editModal.show();
    }
</script>

<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
