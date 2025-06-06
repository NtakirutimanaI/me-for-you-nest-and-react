<!DOCTYPE html>
<html lang="en">

<head>
     <!-- Styles Start -->
    @include('home.css')
<style>
    body {
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    .hero {
        background: url('/images/events/hero.jpg') no-repeat center center;
        background-size: cover;
        height: 70vh;
        position: relative;
        color: white;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .hero h1 {
        font-size: 4rem;
        font-weight: bold;
        text-shadow: 2px 2px 8px rgba(0, 0, 0, 0.6);
    }

    .section {
        padding: 60px 20px;
    }

    .section-title {
        text-align: center;
        font-size: 2.5rem;
        font-weight: 600;
        margin-bottom: 30px;
        color: #333;
    }

    .about p {
        max-width: 800px;
        margin: 0 auto;
        font-size: 1.2rem;
        line-height: 1.8;
        color: #555;
    }

    .categories, .process, .testimonials {
        background-color: #f7f7f7;
    }

    .card-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 30px;
        max-width: 1100px;
        margin: auto;
    }

    .card {
        background: white;
        padding: 20px;
        border-radius: 12px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }

    .card:hover {
        transform: translateY(-5px);
    }

    .card img {
        max-width: 100%;
        border-radius: 8px;
    }

    .card h4 {
        margin-top: 15px;
        font-size: 1.3rem;
        color: #222;
    }

    .card p {
        color: #666;
        font-size: 1rem;
    }

    .gallery {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 15px;
        max-width: 1000px;
        margin: auto;
    }

    .gallery img {
        width: 300px;
        height: 200px;
        object-fit: cover;
        border-radius: 8px;
    }

    .cta {
        background: #4CAF50;
        color: white;
        text-align: center;
        padding: 50px 20px;
    }

    .cta h2 {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    .cta a {
        display: inline-block;
        padding: 12px 24px;
        background: white;
        color: #4CAF50;
        border-radius: 30px;
        font-weight: bold;
        text-decoration: none;
        transition: 0.3s;
    }

    .cta a:hover {
        background: #f0f0f0;
    }

    .testimonial-card {
        background: white;
        padding: 25px;
        border-left: 5px solid #4CAF50;
        margin: 10px;
        border-radius: 10px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
    }

    .testimonial-card p {
        font-style: italic;
        color: #444;
    }

    .testimonial-card strong {
        display: block;
        margin-top: 10px;
        color: #000;
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
                <h1 class="display-2 text-white animated slideInDown mb-4">Events</h1>
                <nav aria-label="breadcrumb animated slideInDown">
                    <ol class="breadcrumb">
                        <li class="breadcrumb-item"><a href="#">Home</a></li>
                        <li class="breadcrumb-item"><a href="#">Pages</a></li>
                        <li class="breadcrumb-item text-white active" aria-current="page">Events</li>
                    </ol>
                </nav>
            </div>
        </div>
        <!-- Page Header End -->

<!-- About Section -->
<section class="section about">
    <h2 class="section-title">Making Every Occasion Memorable</h2>
    <p>
        At Me For You Advisory, we bring your events to life with creativity, passion, and professionalism. Whether you're planning a personal celebration or a large-scale corporate function, our event management team ensures every detail is executed to perfection. Our focus is not only on delivering beautiful events but creating experiences that leave lasting impressions.
    </p>
</section>

<!-- Event Categories -->
<section class="section categories">
    <h2 class="section-title">Types of Events We Handle</h2>
    <div class="card-grid">
        <div class="card">
            <img src="{{ asset('img/event1.jpg') }}" alt="Wedding Event">

            <h4>Weddings & Engagements</h4>
            <p>Elegant and unforgettable celebrations tailored to reflect your love story.</p>
        </div>
        <div class="card">
            <img src="{{ asset('img/event2.jpg') }}" alt="Wedding Event">
            <h4>Graduations & Ceremonies</h4>
            <p>Celebrate milestones with seamless coordination and joyful ambiance.</p>
        </div>
        <div class="card">
           <img src="{{ asset('img/event3.jpg') }}" alt="Wedding Event">
            <h4>Corporate Events</h4>
            <p>Professional events including seminars, product launches, and team-building retreats.</p>
        </div>
        <div class="card">
           <img src="{{ asset('img/event4.jpg') }}" alt="Wedding Event">
            <h4>Birthdays & Private Parties</h4>
            <p>Fun-filled parties designed to suit every age and personality.</p>
        </div>
    </div>
</section>

<!-- Our Process -->
<section class="section process">
    <h2 class="section-title">Our Process</h2>
    <div class="card-grid">
        <div class="card">
            <h4>1. Consultation</h4>
            <p>We start by understanding your goals, vision, and budget to ensure a personalized experience.</p>
        </div>
        <div class="card">
            <h4>2. Planning & Design</h4>
            <p>From themes to logistics, we craft detailed plans and stunning visuals tailored to your event.</p>
        </div>
        <div class="card">
            <h4>3. Coordination</h4>
            <p>We liaise with trusted vendors and manage timelines to ensure everything runs smoothly.</p>
        </div>
        <div class="card">
            <h4>4. Execution</h4>
            <p>On the big day, we take care of every detail so you can enjoy the moment stress-free.</p>
        </div>
    </div>
</section>

<!-- Gallery Section -->
<section class="section">
    <h2 class="section-title">Event Highlights</h2>
    <div class="gallery">
        <img src="/images/events/event1.jpg" alt="Event 1">
        <img src="/images/events/event2.jpg" alt="Event 2">
        <img src="/images/events/event3.jpg" alt="Event 3">
        <img src="/images/events/event4.jpg" alt="Event 4">
    </div>
</section>

<!-- Testimonials Section -->
<section class="section testimonials">
    <h2 class="section-title">What Our Clients Say</h2>
    <div class="card-grid">
        <div class="testimonial-card">
            <p>"Me For You Advisory handled our wedding with elegance and professionalism. Everything was beyond our expectations!"</p>
            <strong>- Claudine & Jean</strong>
        </div>
        <div class="testimonial-card">
            <p>"Our annual company conference went flawlessly. Highly recommend their corporate event services!"</p>
            <strong>- M. Bizimana, CEO</strong>
        </div>
    </div>
</section>

<!-- Call to Action -->
<section class="cta">
    <h2>Ready to Plan Your Next Event?</h2>
    <a href="/contact">Book a Free Consultation</a>
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