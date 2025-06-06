<!DOCTYPE html>
<html lang="en">

<head>
     <!-- Styles Start -->
    @include('home.css')
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f4f6f8;
            color: #333;
        }

        header {
            background-color: #00695c;
            color: white;
            padding: 20px 40px;
            text-align: center;
        }

        .container {
            max-width: 1000px;
            margin: 40px auto;
            padding: 0 20px;
        }

        .intro {
            margin-bottom: 30px;
        }

        .intro h2 {
            color: #00695c;
        }

        .service-box {
            background-color: white;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
            padding: 25px;
            margin-bottom: 20px;
        }

        .service-box h3 {
            color: #333;
            margin-bottom: 10px;
        }

        .service-box p {
            line-height: 1.6;
        }

        footer {
            background-color: #00695c;
            color: white;
            text-align: center;
            padding: 15px 0;
            margin-top: 40px;
        }
    </style>
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
                <h1 class="display-2 text-white animated slideInDown mb-4">Languages</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Languages</li>
                    </ol>
                </nav>
            </div>
        </div>
 <div class="container">
        <div class="intro">
            <h2>Empowering Communication Across Cultures</h2>
            <p>
                At Me For You Advisory, our language services are designed to break barriers and build bridges.
                We provide expert instruction in English, French, and Kinyarwanda to help learners excel academically,
                professionally, and personally.
            </p>
        </div>

        <div class="service-box">
            <h3>Language Instruction</h3>
            <p>
                Our courses are designed for all levels, from beginners to advanced speakers.
                We use interactive methods to enhance speaking, listening, reading, and writing skills.
            </p>
        </div>

        <div class="service-box">
            <h3>Translation & Interpretation</h3>
            <p>
                We offer precise and culturally relevant translation and interpretation services in English, French, and Kinyarwanda.
                Perfect for academic, corporate, and community contexts.
            </p>
        </div>

        <div class="service-box">
            <h3>Editing & Proofreading</h3>
            <p>
                Need professional polish? We edit and proofread academic papers, reports, and creative writing to ensure clarity, accuracy, and quality.
            </p>
        </div>
    </div>

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