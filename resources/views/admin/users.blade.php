<!DOCTYPE html>
<html>
  <head> 
    @include('admin.css')
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

    .table {
        background-color: #1e1e1e;
        color: #f1f1f1;
    }

    .table th {
        border-bottom: 2px solid #444;
        background-color: #292929;
    }

    .table td {
        border: none;
        border-bottom: 1px solid #333;
        vertical-align: middle;
    }

    .table-striped tbody tr:nth-of-type(odd) {
        background-color: #1a1a1a;
    }

    .table-striped tbody tr:nth-of-type(even) {
        background-color: #131313;
    }

    .badge {
        font-size: 0.75rem;
    }

    .text-success {
        color: #28a745 !important;
    }

    .text-danger {
        color: #dc3545 !important;
    }

    .alert-success {
        background-color: #198754;
        color: #fff;
        border: none;
    }

    .pagination {
        --bs-pagination-bg: #343a40;
        --bs-pagination-color: #f8f9fa;
        --bs-pagination-hover-bg: #495057;
    }

    .pagination .page-item.active .page-link {
        background-color: #0d6efd;
        border-color: #0d6efd;
    }

    .pagination .page-link {
        color: #f8f9fa;
        background-color: #343a40;
        border: 1px solid #444;
    }

    .pagination .page-link:hover {
        background-color: #495057;
    }
    /* Make the table height smaller and tighter */
.table td, .table th {
    padding: 0.3rem 0.5rem;
    line-height: 1.2;
}

/* Keep action buttons in one row and make them compact */
.table .btn {
    padding: 0.25rem 0.5rem;
    font-size: 0.75rem;
    margin-right: 0.2rem;
    white-space: nowrap;
}

/* Clear and visible modal close button */
.btn-close {
    filter: invert(1);
    background-color: #fff;
    border-radius: 50%;
    opacity: 1;
}

/* Remove table borders */
.table {
    border: none !important;
    box-shadow: none;
}

/* Responsive table behavior */
@media (max-width: 768px) {
    .table {
        font-size: 0.75rem;
        width: 100%;
        display: block;
        overflow-x: auto;
        white-space: nowrap;
    }

    .table .btn {
        display: inline-block;
        margin-bottom: 0.2rem;
    }
}
/* Further reduce row height */
.table td, .table th {
    padding: 0.2rem 0.3rem;
    line-height: 1;
    font-size: 0.75rem;
}

/* Ensure buttons stay inline and compact */
.table .btn {
    padding: 0.2rem 0.4rem;
    font-size: 0.7rem;
    margin-right: 0.15rem;
    display: inline-block;
}

/* Slightly increase table width */
.table {
    width: 102%;
}
.btn-close.btn-close-white {
  position: relative;
  width: 1.5rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  opacity: 1;
  cursor: pointer;
}

/* Hide default icon */
.btn-close.btn-close-white::before,
.btn-close.btn-close-white::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1.2rem;
  height: 2px;
  background-color: white;
  border-radius: 1px;
  transform-origin: center;
  transition: background-color 0.3s ease;
}

.btn-close.btn-close-white::before {
  transform: translate(-50%, -50%) rotate(45deg);
}

.btn-close.btn-close-white::after {
  transform: translate(-50%, -50%) rotate(-45deg);
}

/* Hover/focus effect */
.btn-close.btn-close-white:hover,
.btn-close.btn-close-white:focus {
  background-color: rgba(255, 255, 255, 0.2);
}

.pagination {
    display: flex;
    justify-content: center;
    gap: 0.2rem;
    padding-top: 1rem;
}

.pagination .page-item {
    display: inline-block;
}

.pagination .page-link {
    padding: 0.2rem 0.4rem;
    font-size: 0.65rem;
    color: #ffffff;
    background-color: #87CEEB; /* Sky blue */
    border: 1px solid #87CEEB;
    border-radius: 0.25rem;
    transition: background-color 0.3s ease;
}

.pagination .page-link:hover {
    background-color: #00BFFF; /* Deep sky blue */
    color: #fff;
}

.pagination .page-item.active .page-link {
    background-color: #007BFF;
    border-color: #007BFF;
    color: #fff;
}

</style>
  </head>
  <body>
    @include('admin.header')
 
    @include('admin.sidebar')
      <!-- Sidebar Navigation end-->


      <div class="page-content">
        <div class="page-header">
          <div class="container-fluid">
        <div class="container mt-4">
    <div class="card shadow-lg">
        <div class="card-header bg-primary text-white">
            <h4 class="mb-0">User List</h4>
        </div>
        <div class="card-body">
            @if(session('success'))
                <div class="alert alert-success">{{ session('success') }}</div>
            @endif

            <table class="table table-bordered table-striped table-hover">
                <thead class="table-dark">
                    <tr>
                        <th>#</th>
                        <th>Full Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Role</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($users as $index => $user)
                        <tr>
                            <td>{{ $index + 1 }}</td>
                            <td>{{ $user->full_name }}</td>
                            <td>{{ $user->email }}</td>
                            <td>{{ $user->phone ?? 'N/A' }}</td>
                            <td>{{ $user->address ?? 'N/A' }}</td>
                            <td>
                                <span class="badge bg-info text-dark text-capitalize">
                                    {{ $user->role }}
                                </span>
                            </td>
                            <td>
                                <button class="btn btn-sm btn-outline-info" onclick="openViewModal({{ json_encode($user) }})">View</button>
                                <button class="btn btn-sm btn-outline-warning" onclick="openEditModal({{ json_encode($user) }})">Edit</button>
                                <form action="{{ route('users.destroy', $user->id) }}" method="POST" class="d-inline">
                                    @csrf @method('DELETE')
                                    <button type="submit" class="btn btn-sm btn-outline-danger" onclick="return confirm('Are you sure?')">Remove</button>
                                </form>
                                
                            
                    @empty
                        <tr>
                            <td colspan="7" class="text-center">No users found.</td>
                        </tr>
                    @endforelse
                </tbody>
            </table>

             <div class="d-flex justify-content-center">
           {{ $users->links('pagination::bootstrap-4') }}
             </div>
        </div>
    </div>
</div>

<!-- View Modal -->
<div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-scrollable">
        <div class="modal-content bg-dark text-light">
            <div class="modal-header">
                <h5 class="modal-title" id="viewModalLabel">View User</h5>
            <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <p><strong>Full Name:</strong> <span id="view_full_name"></span></p>
                <p><strong>Email:</strong> <span id="view_email"></span></p>
                <p><strong>Phone:</strong> <span id="view_phone"></span></p>
                <p><strong>Address:</strong> <span id="view_address"></span></p>
                <p><strong>Role:</strong> <span id="view_role"></span></p>
            </div>
        </div>
    </div>
</div>

<!-- Edit Modal -->
<div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content bg-dark text-light">
            <div class="modal-header">
                <h5 class="modal-title" id="editModalLabel">Edit User</h5>
<button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <form id="editUserForm" method="POST">
                @csrf
                @method('PUT')
                <div class="modal-body">
                    <input type="hidden" id="edit_user_id">
                    <div class="mb-3">
                        <label for="edit_full_name" class="form-label">Full Name</label>
                        <input type="text" class="form-control" id="edit_full_name" name="full_name">
                    </div>
                    <div class="mb-3">
                        <label for="edit_email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="edit_email" name="email">
                    </div>
                    <div class="mb-3">
                        <label for="edit_phone" class="form-label">Phone</label>
                        <input type="text" class="form-control" id="edit_phone" name="phone">
                    </div>
                    <div class="mb-3">
                        <label for="edit_address" class="form-label">Address</label>
                        <input type="text" class="form-control" id="edit_address" name="address">
                    </div>
                    <div class="mb-3">
                        <label for="edit_role" class="form-label">Role</label>
                        <select class="form-select" id="edit_role" name="role">
                            <option value="admin">Admin</option>
                            <option value="manager">Manager</option>
                            <option value="trainer">Trainer</option>
                            <option value="student">Student</option>
                            <option value="user">User</option>
                        </select>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="submit" class="btn btn-primary">Update User</button>
                </div>
            </form>
        </div>
    </div>
</div>
 @include('admin.footer')
@include('admin.script')
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
        editUserForm.action = '/users/' + user.id; // Adjust route if needed
        var editModal = new bootstrap.Modal(document.getElementById('editModal'));
        editModal.show();
    }
</script>
  </body>
</html>
