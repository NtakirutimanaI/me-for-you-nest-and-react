import { useEffect } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {


    useEffect(() => {
        const initPlugins = () => {
            const $ = (window as any).jQuery;

            if ($) {
                // Header carousel
                if ($(".header-carousel").length > 0 && typeof $.fn.owlCarousel === 'function') {
                    $(".header-carousel").owlCarousel({
                        autoplay: true,
                        smartSpeed: 1500,
                        items: 1,
                        dots: true,
                        loop: true,
                        nav: true,
                        navText: [
                            '<i class="bi bi-chevron-left"></i>',
                            '<i class="bi bi-chevron-right"></i>'
                        ]
                    });
                }

                // Testimonials carousel
                if ($(".testimonial-carousel").length > 0 && typeof $.fn.owlCarousel === 'function') {
                    $(".testimonial-carousel").owlCarousel({
                        autoplay: true,
                        smartSpeed: 1000,
                        margin: 24,
                        dots: false,
                        loop: true,
                        nav: true,
                        navText: [
                            '<i class="bi bi-arrow-left"></i>',
                            '<i class="bi bi-arrow-right"></i>'
                        ],
                        responsive: {
                            0: { items: 1 },
                            992: { items: 2 }
                        }
                    });
                }

                // Sticky Navbar and Back to top logic
                $(window).scroll(() => {
                    if ($(window).scrollTop()! > 300) {
                        $('.sticky-top').addClass('shadow-sm').css('top', '0px');
                        $('.back-to-top').fadeIn('slow');
                    } else {
                        $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
                        $('.back-to-top').fadeOut('slow');
                    }
                });

                $('.back-to-top').click(function () {
                    $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
                    return false;
                });
            }

            // WOW Init
            if ((window as any).WOW) {
                new (window as any).WOW().init();
            }
        };

        // Attempt to initialize immediately, then retry if needed to handle race conditions with script loading
        initPlugins();
        const timer = setTimeout(initPlugins, 500);
        return () => clearTimeout(timer);
    }, []);



    return (
        <div className="container-fluid bg-white p-0">
            <Navbar />

            {/* Carousel Start */}
            <div className="container-fluid p-0 mb-5">
                <div className="owl-carousel header-carousel position-relative">
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid d-block w-100" src="/img/carousel-1.jpg" alt="" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-2 text-white mb-4">Welcome to Me For You Advisory</h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Me For You Advisory is dedicated to providing top-notch services that cater to the diverse needs of our clients.</p>
                                        <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3">Learn More</a>
                                        <a href="" className="btn btn-dark rounded-pill py-sm-3 px-sm-5">Our Strength</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid d-block w-100" src="/img/carousel-2.jpg" alt="" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-2 text-white mb-4">Make A Brighter Day With Us Today</h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">Our offerings span Event Management, Learning Coaching and Mentoring, and comprehensive Language Services. We are committed to delivering excellence and helping you achieve your personal and professional goals.</p>
                                        <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3">Learn More</a>
                                        <a href="" className="btn btn-dark rounded-pill py-sm-3 px-sm-5">Our Facts</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="owl-carousel-item position-relative">
                        <img className="img-fluid d-block w-100" src="/img/carousel-24.jpg" alt="" />
                        <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, .2)' }}>
                            <div className="container">
                                <div className="row justify-content-start">
                                    <div className="col-10 col-lg-8">
                                        <h1 className="display-2 text-white mb-4">Transforming Dreams into Reality</h1>
                                        <p className="fs-5 fw-medium text-white mb-4 pb-2">With our expert guidance and personalized approach, we turn your aspirations into achievements. Join us and experience the difference.</p>
                                        <a href="" className="btn btn-primary rounded-pill py-sm-3 px-sm-5 me-3">Learn More</a>
                                        <a href="" className="btn btn-dark rounded-pill py-sm-3 px-sm-5">Our Services</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Carousel End */}

            {/* Facilities Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">MOVE WITH US NOW</h1>
                        <p>Keep moving with us, as we journey together toward growth and success. We are here for you—dedicated to supporting your goals, empowering your dreams, and building a brighter future. Let’s grow, learn, and innovate side by side, transforming every challenge into opportunity. Together, we rise and thrive.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="facility-item">
                                <div className="facility-icon bg-primary">
                                    <span className="bg-primary"></span>
                                    <i className="fa fa-bus-alt fa-3x text-primary"></i>
                                    <span className="bg-primary"></span>
                                </div>
                                <div className="facility-text bg-primary">
                                    <h3 className="text-primary mb-3">OUR DREAM</h3>
                                    <p className="mb-0">We aim to lead globally, delivering innovation, empowering clients, and impacting communities positively.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="facility-item">
                                <div className="facility-icon bg-success">
                                    <span className="bg-success"></span>
                                    <i className="fa fa-futbol fa-3x text-success"></i>
                                    <span className="bg-success"></span>
                                </div>
                                <div className="facility-text bg-success">
                                    <h3 className="text-success mb-3">Why Choose "Me For You"?</h3>
                                    <p className="mb-0">Our Expertise & Experience,We offer personalized solutions,Our customer-centric approach
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="facility-item">
                                <div className="facility-icon bg-warning">
                                    <span className="bg-warning"></span>
                                    <i className="fa fa-home fa-3x text-warning"></i>
                                    <span className="bg-warning"></span>
                                </div>
                                <div className="facility-text bg-warning">
                                    <h3 className="text-warning mb-3">Our Values</h3>
                                    <p className="mb-0">Trustworthness, <br />Affordability,<br />Proffessionalism.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                            <div className="facility-item">
                                <div className="facility-icon bg-info">
                                    <span className="bg-info"></span>
                                    <i className="fa fa-chalkboard-teacher fa-3x text-info"></i>
                                    <span className="bg-info"></span>
                                </div>
                                <div className="facility-text bg-info">
                                    <h3 className="text-info mb-3">OUR MISSION</h3>
                                    <p className="mb-0">Empowering individuals and businesses through personalized, expert advisory services tailored to each client's needs.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Facilities End */}

            {/* Services/Classes Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">OUR SERVICES</h1>
                        <p>Creating Memorable Experiences
                            From corporate events to personal celebrations, our Event Management services ensure that every event is flawlessly executed.
                            We handle all aspects of event planning and execution, allowing you to focus on enjoying the occasion.
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="img/classes-1.jpg" alt="" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <a className="d-block text-center h3 mt-3 mb-4" href="">Event Planning & Coordination</a>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ width: '45px', height: '45px' }} />
                                            <div className="ms-3">
                                                <h6 className="text-primary mb-1">Available</h6>
                                                <small>Now</small>
                                            </div>
                                        </div>
                                        <span className="bg-primary text-white rounded-pill py-2 px-3">Negociable</span>
                                    </div>
                                    <div className="row g-1">
                                        <div className="col-4">
                                            <div className="border-top border-3 border-primary pt-2">
                                                <h6 className="text-primary mb-1">Monday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-success pt-2">
                                                <h6 className="text-success mb-1">To</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-warning pt-2">
                                                <h6 className="text-warning mb-1">Sunday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="img/classes-2.jpg" alt="" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <a className="d-block text-center h3 mt-3 mb-4" href="">Protocol & Service</a>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ width: '45px', height: '45px' }} />
                                            <div className="ms-3">
                                                <h6 className="text-primary mb-1">Available</h6>
                                                <small>Now</small>
                                            </div>
                                        </div>
                                        <span className="bg-primary text-white rounded-pill py-2 px-3">Negociable</span>
                                    </div>
                                    <div className="row g-1">
                                        <div className="col-4">
                                            <div className="border-top border-3 border-primary pt-2">
                                                <h6 className="text-primary mb-1">Monday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-success pt-2">
                                                <h6 className="text-success mb-1">To</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-warning pt-2">
                                                <h6 className="text-warning mb-1">Sunday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="img/classes-3.jpg" alt="" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <a className="d-block text-center h3 mt-3 mb-4" href="">Food & Drink Supply (Catering)</a>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ width: '45px', height: '45px' }} />
                                            <div className="ms-3">
                                                <h6 className="text-primary mb-1">Available</h6>
                                                <small>Now</small>
                                            </div>
                                        </div>
                                        <span className="bg-primary text-white rounded-pill py-2 px-3">Negociable</span>
                                    </div>
                                    <div className="row g-1">
                                        <div className="col-4">
                                            <div className="border-top border-3 border-primary pt-2">
                                                <h6 className="text-primary mb-1">Monday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-success pt-2">
                                                <h6 className="text-success mb-1">To</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-warning pt-2">
                                                <h6 className="text-warning mb-1">Sunday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="img/classes-4.jpg" alt="" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <a className="d-block text-center h3 mt-3 mb-4" href="">Professional Sound System & Music Band</a>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ width: '45px', height: '45px' }} />
                                            <div className="ms-3">
                                                <h6 className="text-primary mb-1">Available</h6>
                                                <small>Now</small>
                                            </div>
                                        </div>
                                        <span className="bg-primary text-white rounded-pill py-2 px-3">Negociable</span>
                                    </div>
                                    <div className="row g-1">
                                        <div className="col-4">
                                            <div className="border-top border-3 border-primary pt-2">
                                                <h6 className="text-primary mb-1">Monday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-success pt-2">
                                                <h6 className="text-success mb-1">To</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-warning pt-2">
                                                <h6 className="text-warning mb-1">Sunday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="img/classes-5.jpg" alt="" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <a className="d-block text-center h3 mt-3 mb-4" href="">Language Service</a>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ width: '45px', height: '45px' }} />
                                            <div className="ms-3">
                                                <h6 className="text-primary mb-1">Available</h6>
                                                <small>Now</small>
                                            </div>
                                        </div>
                                        <span className="bg-primary text-white rounded-pill py-2 px-3">Negociable</span>
                                    </div>
                                    <div className="row g-1">
                                        <div className="col-4">
                                            <div className="border-top border-3 border-primary pt-2">
                                                <h6 className="text-primary mb-1">Monday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-success pt-2">
                                                <h6 className="text-success mb-1">To</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-warning pt-2">
                                                <h6 className="text-warning mb-1">Sunday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="img/classes-6.jpg" alt="" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <a className="d-block text-center h3 mt-3 mb-4" href="">General Knowledge</a>
                                    <div className="d-flex align-items-center justify-content-between mb-4">
                                        <div className="d-flex align-items-center">
                                            <img className="rounded-circle flex-shrink-0" src="img/user.jpg" alt="" style={{ width: '45px', height: '45px' }} />
                                            <div className="ms-3">
                                                <h6 className="text-primary mb-1">Available</h6>
                                                <small>Now</small>
                                            </div>
                                        </div>
                                        <span className="bg-primary text-white rounded-pill py-2 px-3">Negociable</span>
                                    </div>
                                    <div className="row g-1">
                                        <div className="col-4">
                                            <div className="border-top border-3 border-primary pt-2">
                                                <h6 className="text-primary mb-1">Monday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-success pt-2">
                                                <h6 className="text-success mb-1">To</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                        <div className="col-4">
                                            <div className="border-top border-3 border-warning pt-2">
                                                <h6 className="text-warning mb-1">Sunday</h6>
                                                <small></small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Services End */}

            {/* Team Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">"Expert Professionals Driving Excellence"</h1>
                        <p>Our team combines knowledge, experience, and innovation to achieve outstanding results.
                            Would you like it tailored to a specific industry or tone (corporate, friendly, innovative)</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded-circle w-75" src="img/team-1.jpg" alt="" />
                                <div className="team-text">
                                    <h3>Papy Patrick Ndazigaruye</h3>
                                    <p>Founder & CEO</p>
                                    <div className="d-flex align-items-center">
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded-circle w-75" src="img/team-2.jpg" alt="" />
                                <div className="team-text">
                                    <h3>Faustin Ndazigaruye</h3>
                                    <p>Business Partner</p>
                                    <div className="d-flex align-items-center">
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="team-item position-relative">
                                <img className="img-fluid rounded-circle w-75" src="img/team-3.jpg" alt="" />
                                <div className="team-text">
                                    <h3>Jamie Proxy Ndazigaruye</h3>
                                    <p>Business Partner</p>
                                    <div className="d-flex align-items-center">
                                        <a className="btn btn-square btn-primary mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-primary  mx-1" href=""><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}



            <Footer />
            <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
        </div>
    );
}

export default Home;
