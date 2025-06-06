<!DOCTYPE html>
<html lang="en">

<head>
     <!-- Styles Start -->
    @include('home.css')
     <style>
        body {
            font-family: 'Segoe UI', sans-serif;
            margin: 0;
            padding: 0;
            background: #f4f6f8;
            color: #333;
        }

        header {
            background: linear-gradient(to right, #026aa7, #004080);
            color: #fff;
            padding: 50px 20px;
            text-align: center;
        }

        header h1 {
            font-size: 3em;
            margin: 0;
        }

        header p {
            font-size: 1.2em;
            margin-top: 10px;
        }

        .container {
            max-width: 1100px;
            margin: auto;
            padding: 40px 20px;
        }

        .section-title {
            font-size: 2em;
            color: #026aa7;
            margin-bottom: 20px;
            border-left: 6px solid #026aa7;
            padding-left: 10px;
        }

        .card {
            background: #fff;
            border-radius: 12px;
            padding: 25px;
            margin-bottom: 30px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.05);
        }

        .card h3 {
            margin-top: 0;
            color: #004080;
        }

        .card ul {
            padding-left: 20px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 20px;
        }

        .gallery img {
            width: 100%;
            border-radius: 10px;
        }

        .testimonials {
            background: #e8f1fc;
            padding: 40px 20px;
            border-radius: 10px;
        }

        .testimonial {
            font-style: italic;
            margin-bottom: 20px;
        }

        .cta {
            background: #004080;
            color: #fff;
            text-align: center;
            padding: 50px 20px;
            border-radius: 10px;
        }

        .cta a {
            display: inline-block;
            background: #ffcc00;
            color: #000;
            text-decoration: none;
            padding: 15px 30px;
            border-radius: 25px;
            font-weight: bold;
            margin-top: 20px;
        }

        footer {
            text-align: center;
            padding: 30px 10px;
            font-size: 0.9em;
            color: #555;
        }

        @media (max-width: 600px) {
            header h1 {
                font-size: 2em;
            }

            .section-title {
                font-size: 1.5em;
            }
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
                <h1 class="display-2 text-white animated slideInDown mb-4">Trainning Consultancy</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Trainning Consultancy</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!-- Page Header End -->

<div class="container">
    <h2 class="section-title">What We Offer</h2>

    <div class="grid">
        <div class="card">
            <h3>Organizational Capacity Building</h3>
            <p>Custom-designed training to improve team collaboration, leadership, productivity, and strategic planning.</p>
        </div>

        <div class="card">
            <h3>Teacher Training & School Development</h3>
            <p>Professional development for educators in modern pedagogy, classroom management, and curriculum planning.</p>
        </div>

        <div class="card">
            <h3>Career and Soft Skills Development</h3>
            <p>Workshops on resume writing, interview skills, communication, public speaking, time management, and more.</p>
        </div>

        <div class="card">
            <h3>Research & Academic Writing</h3>
            <p>Guidance on academic writing, project structuring, referencing styles (APA, MLA), and research methodologies.</p>
        </div>

        <div class="card">
            <h3>Digital Skills Training</h3>
            <p>Training in essential IT tools like MS Office, Google Workspace, data analysis (Excel/Python), and safe digital practices.</p>
        </div>

        <div class="card">
            <h3>Other Skills Training</h3>
            <p>Training in soft skills like leadership, communication, teamwork, time management, problem-solving, and workplace etiquette.</p>
        </div>
    </div>

    <h2 class="section-title">Why Choose Us?</h2>
    <div class="card">
        <ul>
            <li>Experienced trainers with real-world expertise</li>
            <li>Customized content to meet your exact needs</li>
            <li>Interactive and engaging sessions</li>
            <li>Affordable rates without compromising quality</li>
            <li>Inclusive of underrepresented and marginalized communities</li>
        </ul>
    </div>

    <h2 class="section-title">Gallery</h2>
    <div class="grid gallery">
        <img src="https://via.placeholder.com/400x250?text=Training+1" alt="Training Session 1">
        <img src="https://via.placeholder.com/400x250?text=Workshop+2" alt="Workshop 2">
        <img src="https://via.placeholder.com/400x250?text=Trainer+Guidance" alt="Trainer Guidance">
        <img src="https://via.placeholder.com/400x250?text=Group+Work" alt="Group Work">
    </div>

    <h2 class="section-title">What Our Participants Say</h2>
    <div class="testimonials">
        <p class="testimonial">"The digital skills workshop helped me land my first job! The trainers are knowledgeable and patient." — <strong>Alice, Kigali</strong></p>
        <p class="testimonial">"Our school benefited greatly from their teacher training. It was engaging and transformative." — <strong>Principal, Gicumbi</strong></p>
        <p class="testimonial">"Very professional and well organized. I recommend them for any serious organizational training." — <strong>HR Manager, Local NGO</strong></p>
    </div>

    <div class="cta">
        <h2>Ready to Empower Your Team or Yourself?</h2>
        <p>Let us help you unlock your full potential through targeted and expert-led training.</p>
        <a href="{{ route('contact') }}">Contact Us Now</a>
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