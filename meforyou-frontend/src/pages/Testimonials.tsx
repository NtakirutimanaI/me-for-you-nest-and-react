import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Testimonials = () => {
    return (
        <div className="container-fluid bg-white p-0">
            <Navbar />

            {/* Page Header */}
            <div className="container-fluid page-header position-relative mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                    <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Testimonials</h1>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Testimonials</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">What Our Clients Say!</h1>
                        <p className="fs-5">See what our happy clients have to say about their experience with Me For You.</p>
                    </div>

                    <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s" style={{ display: 'block' }}>
                        {/* Note: Owl Carousel in React might need a wrapper or manual grid fallback if the jQuery plugin isn't fully initializing on route change without refresh. 
                            Using a grid layout here for safety and better React compatibility, but keeping the class for potential JS hook. 
                        */}
                        <div className="row g-4">
                            <div className="col-lg-6">
                                <div className="testimonial-item bg-light rounded p-5 h-100">
                                    <p className="fs-5">"Celebrating our love across two unforgettable days was a dream come true. Me For You Advisory carried us through every moment with such care and excellence that we could simply enjoy the joy of becoming one."</p>
                                    <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="/img/testimonial-1.jpg" style={{ width: '90px', height: '90px' }} alt="Client" />
                                        <div className="ps-3">
                                            <h3 className="mb-1">Alice & Janvier</h3>
                                            <span>Couple</span>
                                        </div>
                                        <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-item bg-light rounded p-5 h-100">
                                    <p className="fs-5">"From the first meeting to the last dance, we felt supported by a team that cared as if it were their own wedding. They gave us laughter, peace of mind, and the freedom to focus on our love."</p>
                                    <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="/img/testimonial-2.jpg" style={{ width: '90px', height: '90px' }} alt="Client" />
                                        <div className="ps-3">
                                            <h3 className="mb-1">Ziggy & Selya</h3>
                                            <span>Couple</span>
                                        </div>
                                        <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-item bg-light rounded p-5 h-100">
                                    <p className="fs-5">"This was our wedding of a lifetime. Every part of the celebration reflected love and professionalism. Me For You transformed our dreams into perfect memories we will cherish forever."</p>
                                    <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="/img/testimonial-3.jpg" style={{ width: '90px', height: '90px' }} alt="Client" />
                                        <div className="ps-3">
                                            <h3 className="mb-1">Muhire & Jeanne D’Arc</h3>
                                            <span>Couple</span>
                                        </div>
                                        <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-item bg-light rounded p-5 h-100">
                                    <p className="fs-5">"Me For You Advisory proved truly reliable and trustworthy. They delivered a perfect day we will remember and cherish forever."</p>
                                    <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="/img/testimonial-1.jpg" style={{ width: '90px', height: '90px' }} alt="Client" />
                                        <div className="ps-3">
                                            <h3 className="mb-1">Nadra & Uwera Marie</h3>
                                            <span>Couple</span>
                                        </div>
                                        <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="testimonial-item bg-light rounded p-5 h-100">
                                    <p className="fs-5">"When we look back, we don’t just remember the beauty of the day—we remember how stress-free and joyful it felt. Me For You gave us more than a wedding; they gave us the perfect beginning."</p>
                                    <div className="d-flex align-items-center bg-white me-n5" style={{ borderRadius: '50px 0 0 50px' }}>
                                        <img className="img-fluid flex-shrink-0 rounded-circle" src="/img/testimonial-2.jpg" style={{ width: '90px', height: '90px' }} alt="Client" />
                                        <div className="ps-3">
                                            <h3 className="mb-1">Mariza & Adolphe</h3>
                                            <span>Couple</span>
                                        </div>
                                        <i className="fa fa-quote-right fa-3x text-primary ms-auto d-none d-sm-flex"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Testimonials;
