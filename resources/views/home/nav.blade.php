<style>
    .logo-img {
    height: 30px;     /* Adjust size to match the icon */
    width: auto;      /* Maintain aspect ratio */
    object-fit: contain;
}

</style>
<!-- Navbar Start -->
        <nav class="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
             <a href="index.html" class="navbar-brand">
              <h1 class="m-0 text-primary d-flex align-items-center">
             <img src="{{ asset('img/logo.jpg') }}" alt="Logo" class="logo-img me-2">

             Me For You
        </h1>

            </a>
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav mx-auto">
                    <a href="{{url('/')}}" class="nav-item nav-link active">Home</a>
                    <a href="{{url('aboutus')}}" class="nav-item nav-link">About Us</a>
                    <div class="nav-item dropdown">
                        <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Services</a>
                        <div class="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
                            <a href="{{url('event_management')}}" class="dropdown-item">Events</a>
                            <a href="{{url('training')}}" class="dropdown-item">Training Consultancy</a>
                            <a href="{{url('learning_coaching')}}" class="dropdown-item">Learning & Coaching</a>
                            <a href="{{url('classes_page')}}" class="dropdown-item">Languages</a>
                        </div>
                    </div>
                    <a href="{{url('contact')}}" class="nav-item nav-link">Contact Us</a>
                    <a href="{{url('testimonials')}}" class="nav-item nav-link">Testimonials</a>
                </div>
                <a href="{{url('/login')}}" class="btn btn-primary rounded-pill px-3 d-none d-lg-block">Join Us<i class="fa fa-arrow-right ms-3"></i></a>
            </div>
        </nav>
        <!-- Navbar End -->