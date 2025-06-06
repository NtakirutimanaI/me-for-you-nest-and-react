<!DOCTYPE html>
<html lang="en">

<head>
     <!-- Styles Start -->
    @include('home.css')
    <!-- Styles End -->
</head>

<body>
    <div class="container-xxl bg-white p-0">
     <!-- Spinner Start -->
    @include('home.spinner')
     <!-- Spinner End -->

     <!-- Navbar Start -->
    @include('home.nav')
     <!-- Navbar End -->


       <!-- Page Header End -->
        <div class="container-xxl py-5 page-header position-relative mb-5">
            <div class="container py-5">
                <h1 class="display-2 text-white animated slideInDown mb-4">About Us</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">About Us</li>
                    </ol>
                </nav>
            </div>
        </div>


         <!-- Page Header End -->


        <!-- About Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-4">Learn More About Our Work And Our Cultural Activities</h1>
                        <p>Me For You Advisory is a passionate advisory firm dedicated to empowering individuals, organizations, and communities. Our foundation is built on the belief that everyone deserves access to quality support services that drive real impact.
We combine professionalism with compassion to serve personal, educational, and institutional goals.</p>
                        <p class="mb-4">We bring together professionalism and compassion to offer tailored solutions that serve personal, educational, and institutional needs. Whether you're navigating individual growth, organizational development, or community transformation, we stand with you—every step of the way.</p>
                        <div class="row g-4 align-items-center">
                            <div class="col-sm-6">
                                <a class="btn btn-primary rounded-pill py-3 px-5" href="">Read More</a>
                            </div>
                            <div class="col-sm-6">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style="width: 45px; height: 45px;">
                                    <div class="ms-3">
                                        <h6 class="text-primary mb-1">Papy Patrick Ndazigaruye</h6>
                                        <small>CEO & Founder</small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 about-img wow fadeInUp" data-wow-delay="0.5s">
                        <div class="row">
                            <div class="col-12 text-center">
                                <img class="img-fluid w-75 rounded-circle bg-light p-3" src="img/about-1.jpg" alt="">
                            </div>
                            <div class="col-6 text-start" style="margin-top: -150px;">
                                <img class="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-2.jpg" alt="">
                            </div>
                            <div class="col-6 text-end" style="margin-top: -150px;">
                                <img class="img-fluid w-100 rounded-circle bg-light p-3" src="img/about-3.jpg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- About End -->


        <!-- Call To Action Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="bg-light rounded">
                    <div class="row g-0">
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s" style="min-height: 400px;">
                            <div class="position-relative h-100">
                                <img class="position-absolute w-100 h-100 rounded" src="img/call-to-action.jpg" style="object-fit: cover;">
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <div class="h-100 d-flex flex-column justify-content-center p-5">
                                <h1 class="mb-4">We focus on practical outcomes that make a real difference.</h1>
                                <p class="mb-4">"We are driven by practical outcomes that create meaningful impact. Our focus is on delivering real, measurable results that make a difference in people’s lives and organizations’ success."
                                </p>
                                <a class="btn btn-primary py-3 px-5" href="">Get Started Now<i class="fa fa-arrow-right ms-2"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Call To Action End -->


        <!-- Team Start -->
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style="max-width: 600px;">
                    <h1 class="mb-3">"Expert Professionals Driving Excellence"</h1>
                    <p>Our team combines knowledge, experience, and innovation to achieve outstanding results.
Would you like it tailored to a specific industry or tone (corporate, friendly, innovative).</p>
                </div>
                <div class="row g-4">
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item position-relative">
                            <img class="img-fluid rounded-circle w-75" src="img/team-1.jpg" alt="">
                            <div class="team-text">
                                <h3>Papy Patrick Ndazigaruye</h3>
                                <p>CEO & Faunder</p>
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                        <div class="team-item position-relative">
                            <img class="img-fluid rounded-circle w-75" src="img/team-2.jpg" alt="">
                            <div class="team-text">
                                <h3>Faustin Ndazigaruye</h3>
                                <p>Business Partner</p>
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                        <div class="team-item position-relative">
                            <img class="img-fluid rounded-circle w-75" src="img/team-3.jpg" alt="">
                            <div class="team-text">
                                <h3>Jamie Proxy Ndazigaruye</h3>
                                <p>Business Partner</p>
                                <div class="d-flex align-items-center">
                                    <a class="btn btn-square btn-primary mx-1" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square btn-primary  mx-1" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Team End -->




    <!-- Footer Start -->
     @include('home.footer')
    <!-- Footer End -->


        <!-- Back to Top -->
        <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
    </div>

    <!-- JavaScript Libraries -->
    <script src="{{asset('https://code.jquery.com/jquery-3.4.1.min.js')}}"></script>
    <script src="{{asset('https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js')}}"></script>
    <script src="{{asset('lib/wow/wow.min.js')}}"></script>
    <script src="{{asset('lib/easing/easing.min.js')}}"></script>
    <script src="{{asset('lib/waypoints/waypoints.min.js')}}"></script>
    <script src="{{asset('lib/owlcarousel/owl.carousel.min.js')}}"></script>

    <!-- Template Javascript -->
    <script src="js/main.js"></script>
</body>

</html>