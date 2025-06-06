 <div class="d-flex align-items-stretch">
      <!-- Sidebar Navigation-->
      <nav id="sidebar">
        <!-- Sidebar Header-->
        <div class="sidebar-header d-flex align-items-center">
          <div class="avatar"><img src="{{asset('admin_dashboard/img/avatar-6.jpg')}}" alt="..." class="img-fluid rounded-circle"></div>
          <div class="title">
            <h1 class="h5">Me For You</h1>
            <p>Admin</p>
          </div>
        </div>
        <!-- Sidebar Navidation Menus--><span class="heading">Main</span>
        <ul class="list-unstyled">
<li class="active"><a href="{{ url('admin/index') }}"> <i class="icon-home"></i>Home </a></li>
                <li><a href="{{url('users')}}"> <i class="icon-grid"></i>Users </a></li>
                <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i class="icon-windows"></i>Services Management </a>
                  <ul id="exampledropdownDropdown" class="collapse list-unstyled ">
                    <li><a href="#">Events</a></li>
                    <li><a href="#">Training</a></li>
                    <li><a href="#">Coaching & Mentoring</a></li>
                  </ul>
                </li>
                <li><a href="{{url('team')}}"> <i class="icon-logout"></i>Team Management </a></li>
        </ul><span class="heading">Extras</span>
        <ul class="list-unstyled">
          <li> <a href="{{url('message')}}"> <i class="icon-settings"></i>Messages / Inquiries </a></li>
          <li> <a href="#"> <i class="icon-writing-whiteboard"></i>Settings </a></li>
        </ul>
      </nav>