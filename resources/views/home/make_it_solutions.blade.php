<!DOCTYPE html>
<html lang="en">

<head>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f4f6f8;
      margin: 0;
      padding: 0;
    }

    .container-xxl {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .card {
      background: white;
      max-width: 400px;
      padding: 20px;
      border-radius: 12px;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
      transition: 0.3s;
      margin-bottom: 20px;
    }

    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
    }

    .card-title {
      font-size: 18px;
      font-weight: bold;
      color: #2c3e50;
      margin-bottom: 12px;
    }

    .card-text {
      font-size: 14px;
      color: #555;
      line-height: 1.5;
    }

    .footer {
      width: 100%;
      text-align: center;
    }

    .footer .row {
      justify-content: center;
    }

    .sod,
    .soft {
      text-align: left;
    }

    .soft {
      padding-left: 20px;
    }

    .footer-menu {
      display: flex;
      justify-content: center;
      gap: 10px;
      flex-wrap: wrap;
    }

    .footer-menu a {
      color: #ffffff99;
      text-decoration: none;
    }

    .footer-menu a:hover {
      text-decoration: underline;
    }

    .btn-social {
      margin: 0 5px;
    }
  </style>
  <!-- Styles Start -->
  @include('home.css')
  <!-- Styles End -->
</head>

<body>
  <div class="container-xxl bg-white p-0">
    <!-- Spinner Start -->
    @include('home.spinner')
    <!-- Spinner End -->

    <div class="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div class="container py-5">
        <div class="row g-5">
          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">🏢 MAKE IT SOLUTIONS</h3>
            <div class="card">
              <div class="card-text">
                MAKE IT SOLUTIONS is a dynamic technology company committed to delivering cutting-edge digital solutions that empower businesses and individuals in today’s fast-paced digital world. With a focus on innovation, quality, and customer satisfaction, we offer a wide range of IT services tailored to meet diverse client needs.
              </div>
            </div>
            <div class="d-flex pt-2 justify-content-center">
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
              <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">💼 We Serve You</h3>

            <div class="sod">
              <a class="btn btn-link text-white-50" href="">Software Development</a>
              <ul class="soft">
                <li>Custom Web & Mobile Applications</li>
                <li>Enterprise Solutions</li>
              </ul>
            </div>

            <div class="sod">
              <a class="btn btn-link text-white-50" href="">IT Training & Career Coaching</a>
              <ul class="soft">
                <li>Web Development</li>
                <li>Internship and Apprenticeship Programs</li>
              </ul>
            </div>

            <div class="sod">
              <a class="btn btn-link text-white-50" href="">Digital Marketing & Multimedia</a>
              <ul class="soft">
                <li>Social Media Management</li>
                <li>Content Creation & Video Editing</li>
                <li>Graphic & UI/UX Design</li>
              </ul>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <h3 class="text-white mb-4">📍 Our Address</h3>
            <div class="row g-2 pt-2">
              <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>KK 4 Ave, Kigali, Nyarugenge, Nyamirambo</p>
              <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+250 787 832 490</p>
              <p class="mb-2"><i class="fa fa-envelope me-3"></i>makeitsolutionsrw@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="copyright">
          <div class="row">
            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
              &copy; <a class="border-bottom" href="{{url('/')}}">Me For You</a>, All Right Reserved.
              Designed By <a class="border-bottom" href="{{url('make_it_solutions')}}">MAKE IT SOLUTIONS</a>
            </div>
            <div class="col-md-6 text-center text-md-end">
              <div class="footer-menu">
                <a href="">Home</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

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
