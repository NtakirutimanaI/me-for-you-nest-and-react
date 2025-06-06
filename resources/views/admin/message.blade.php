<!DOCTYPE html>
<html>
<head>
  @include('admin.css')
  <style>
    /* Reduce row height and padding */
    .table-sm td, .table-sm th {
      padding: 0.4rem 0.5rem; /* Smaller padding */
      vertical-align: middle;
      font-size: 0.85rem;
    }

    /* Adjust the buttons inside the table */
    .table td .btn {
      padding: 0.2rem 0.4rem;
      font-size: 0.75rem;
      line-height: 1;
      margin: 0 1px;
    }

    /* Ensure forms inside table cells stay inline and compact */
    .table td form {
      display: inline-block;
    }

    /* Badge size */
    .badge {
      font-size: 0.75rem;
      padding: 0.3em 0.5em;
    }

    /* Fix overflow for small screens */
    .table-responsive {
      overflow-x: auto;
      -webkit-overflow-scrolling: touch;
    }

    /* Optional: force nowrap to keep buttons in one row */
    .table td {
      white-space: nowrap;
    }

    /* Adjust modal spacing */
    .modal-body p {
      margin-bottom: 0.5rem;
      font-size: 0.9rem;
    }

    /* Improve modal header styling */
    .modal-header {
      background-color: #343a40;
      color: #fff;
    }

    /* Optional: improve pagination spacing */
    .pagination {
      margin-bottom: 0;
    }
  </style>
</head>
<body>
  @include('admin.header')
  @include('admin.sidebar')

  <div class="page-content">
    <div class="container mt-4">
      <div class="card shadow-lg">
        <div class="card-header bg-primary text-white">
          <h4 class="mb-0">Message List</h4>
        </div>
        <div class="card-body">
          @if(session('success'))
            <div class="alert alert-success">{{ session('success') }}</div>
          @endif

          <div class="table-responsive">
            <table class="table table-sm table-bordered table-hover">
              <thead class="table-dark">
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Subject</th>
                  <th>Message</th>
                  <th>Date</th>
                  <th>Status</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                @foreach ($message as $msg)
                <tr>
                  <td>{{ $loop->iteration }}</td>
                  <td>{{ $msg->name }}</td>
                  <td>{{ $msg->email }}</td>
                  <td>{{ $msg->subject }}</td>
                  <td>{{ Str::limit($msg->message, 30) }}</td>
                  <td>{{ $msg->created_at->format('d M Y') }}</td>
                  <td>
                    @if($msg->status === 'read')
                      <span class="badge bg-success">Read</span>
                    @else
                      <span class="badge bg-warning text-dark">Unread</span>
                    @endif
                  </td>
                  <td>
                    <button class="btn btn-sm btn-info" onclick='openViewModal(@json($msg))'>View</button>

                    @if($msg->status !== 'read')
                    <form action="{{ route('admin.messages.markAsRead', $msg->id) }}" method="POST" style="display:inline;">
                      @csrf
                      @method('PATCH')
                      <button class="btn btn-sm btn-warning" onclick="return confirm('Mark as read?')">Mark as Read</button>
                    </form>
                    @endif

                    <form action="{{ route('admin.replyMessage') }}" method="POST" style="display:inline;">
                      @csrf
                      <input type="hidden" name="to_email" value="{{ $msg->email }}">
                      <input type="hidden" name="subject" value="RE: {{ $msg->subject }}">
                      <input type="hidden" name="body" value="Thank You Dear{{ $msg->name }} We are happy for having you, And your Impactful message received! Thank You!,&#10;&#10;">
                      <button type="submit" class="btn btn-sm btn-success">Reply</button>
                    </form>

                    <form action="{{ route('admin.destroyMessage', $msg->id) }}" method="POST" style="display:inline;">
                      @csrf
                      @method('DELETE')
                      <button class="btn btn-sm btn-danger" onclick="return confirm('Delete this message?')">Delete</button>
                    </form>
                  </td>
                </tr>
                @endforeach
              </tbody>
            </table>
          </div>

          <div class="d-flex justify-content-center mt-3">
            {{ $message->links('pagination::bootstrap-4') }}
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- View Modal -->
  <div class="modal fade" id="viewModal" tabindex="-1">
    <div class="modal-dialog modal-dialog-scrollable">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">View Message</h5>
          <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
          <p><strong>Name:</strong> <span id="view_name"></span></p>
          <p><strong>Email:</strong> <span id="view_email"></span></p>
          <p><strong>Subject:</strong> <span id="view_subject"></span></p>
          <p><strong>Message:</strong> <span id="view_message"></span></p>
          <p><strong>Status:</strong> <span id="view_status"></span></p>
        </div>
      </div>
    </div>
  </div>
 @include('admin.footer')
  @include('admin.script')
  <script>
    function openViewModal(message) {
      document.getElementById('view_name').textContent = message.name || 'N/A';
      document.getElementById('view_email').textContent = message.email || 'N/A';
      document.getElementById('view_subject').textContent = message.subject || 'N/A';
      document.getElementById('view_message').textContent = message.message || 'N/A';
      document.getElementById('view_status').textContent = message.status || 'N/A';
      new bootstrap.Modal(document.getElementById('viewModal')).show();
    }
  </script>
</body>
</html>
