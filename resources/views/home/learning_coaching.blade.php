<!DOCTYPE html>
<html lang="en">

<head>
     <!-- Styles Start -->
    @include('home.css')
        <style>
        body {
            font-family: "Segoe UI", sans-serif;
            margin: 0;
            padding: 0;
            color: #333;
            background-color: #f7f9fc;
        }
        header {
            background: #4b6cb7;
            background: linear-gradient(to right, #4b6cb7, #182848);
            color: white;
            padding: 60px 20px;
            text-align: center;
        }
        header h1 {
            font-size: 3em;
            margin-bottom: 10px;
        }
        header p {
            font-size: 1.2em;
        }
        section {
            padding: 60px 20px;
            max-width: 1200px;
            margin: auto;
        }
        .services, .testimonials, .gallery, .faq, .team {
            margin-top: 40px;
        }
        .service-card {
            background: white;
            border-radius: 10px;
            box-shadow: 0 4px 12px rgba(0,0,0,0.1);
            margin: 20px 0;
            padding: 20px;
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
        }
        .service-card img {
            width: 300px;
            border-radius: 8px;
        }
        .service-card div {
            flex: 1;
        }
        h2 {
            color: #2c3e50;
            border-bottom: 2px solid #4b6cb7;
            display: inline-block;
            padding-bottom: 10px;
        }
        .gallery img {
            width: 100%;
            max-width: 300px;
            margin: 10px;
            border-radius: 8px;
            object-fit: cover;
        }
        .gallery-grid {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .faq-item {
            margin: 15px 0;
        }
        .faq-item strong {
            display: block;
            color: #34495e;
        }
        .testimonial {
            background: #fff;
            padding: 20px;
            margin: 10px 0;
            border-left: 5px solid #4b6cb7;
            border-radius: 6px;
        }
        .team-card {
            text-align: center;
            padding: 20px;
        }
        .team-card img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            object-fit: cover;
        }
        .cta {
            background-color: #182848;
            color: white;
            padding: 40px 20px;
            text-align: center;
            margin-top: 60px;
        }
        .cta a {
            background: #4b6cb7;
            color: white;
            padding: 12px 30px;
            text-decoration: none;
            font-size: 1.1em;
            border-radius: 6px;
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
                <h1 class="display-2 text-white animated slideInDown mb-4">Learning & Choaching</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Learning & Choaching</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!-- Page Header End -->

<section>
    <h2>What We Offer</h2>

    <div class="service-card">
        <img src="/images/science-coaching.jpg" alt="Science Coaching">
        <div>
            <h3>Science Coaching</h3>
            <p>We offer one-on-one and group coaching in Biology, Chemistry, and Physics. Our sessions are interactive, inquiry-based, and tailored to learners' levels.</p>
        </div>
    </div>

    <div class="service-card">
        <img src="/images/public-speaking.jpg" alt="Public Speaking">
        <div>
            <h3>Public Speaking & Communication</h3>
            <p>Learn to speak confidently in front of any audience. We coach students and professionals to structure ideas, master body language, and communicate effectively.</p>
        </div>
    </div>

    <div class="service-card">
        <img src="/images/language-coaching.jpg" alt="Language Coaching">
        <div>
            <h3>Language Mentoring</h3>
            <p>We mentor learners in English, French, and Kinyarwanda, enhancing fluency, grammar, writing, and pronunciation through structured lessons and conversation practice.</p>
        </div>
    </div>

    <div class="service-card">
        <img src="/images/research-guidance.jpg" alt="Research Guidance">
        <div>
            <h3>Research Guidance</h3>
            <p>Struggling with your academic or professional research? We guide you through topic selection, proposal writing, methodology design, and final presentation.</p>
        </div>
    </div>

    <div class="service-card">
        <img src="/images/study-strategies.jpg" alt="Study Skills">
        <div>
            <h3>Study Skills & Exam Preparation</h3>
            <p>Improve your academic performance with strategies for note-taking, time management, test anxiety reduction, and smart revision techniques.</p>
        </div>
    </div>
</section>

<section class="testimonials">
    <h2>What Our Students Say</h2>
    <div class="testimonial">
        “Me For You Advisory helped me prepare for my science national exams. The coach was patient and broke down complex topics into simple language.”
        <br><strong>- Aline M., Secondary School Student</strong>
    </div>
    <div class="testimonial">
        “Thanks to their public speaking sessions, I was able to deliver a speech at my graduation with confidence and clarity!”
        <br><strong>- Jean Paul K., University Graduate</strong>
    </div>
</section>

<section class="gallery">
    <h2>Learning in Action</h2>
    <div class="gallery-grid">
        <img src="/images/classroom-1.jpg" alt="Coaching Session">
        <img src="/images/classroom-2.jpg" alt="Workshop">
        <img src="/images/mentoring-1.jpg" alt="Mentoring">
        <img src="/images/study-group.jpg" alt="Study Group">
    </div>
</section>

<section class="faq">
    <h2>Frequently Asked Questions</h2>
    <div class="faq-item">
        <strong>Who can enroll in your coaching programs?</strong>
        Anyone — from primary school learners to professionals looking to improve their skills.
    </div>
    <div class="faq-item">
        <strong>Do you offer online sessions?</strong>
        Yes! We offer both in-person and virtual learning via Zoom or Google Meet.
    </div>
    <div class="faq-item">
        <strong>Are sessions affordable?</strong>
        Absolutely. Our mission is to make quality learning accessible to all.
    </div>
</section>

<section class="team">
    <h2>Meet Our Mentors</h2>
    <div class="gallery-grid">
        <div class="team-card">
            <img src="/images/mentor1.jpg" alt="Coach">
            <h4>Claudine N.</h4>
            <p>Science Educator & Research Mentor</p>
        </div>
        <div class="team-card">
            <img src="/images/mentor2.jpg" alt="Coach">
            <h4>Eric T.</h4>
            <p>Public Speaking Coach</p>
        </div>
        <div class="team-card">
            <img src="/images/mentor3.jpg" alt="Coach">
            <h4>Marie C.</h4>
            <p>Language Mentor</p>
        </div>
    </div>
</section>

<section class="cta">
    <h2>Ready to Start Your Learning Journey?</h2>
    <p>Let us mentor you toward confidence, clarity, and academic success.</p>
    <a href="/contact">Get In Touch</a>
</section>


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