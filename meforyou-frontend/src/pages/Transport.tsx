import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Transport = () => {
    return (
        <div className="container-fluid bg-white p-0">
            <Navbar />

            {/* Page Header */}
            <div className="container-fluid page-header position-relative mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                    <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Me For You Transport</h1>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Programs</p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Transport</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">Transport Services</h1>
                        <p className="fs-5">Reliable, comfortable, and safe transport solutions for all your needs.</p>
                    </div>

                    <div className="row g-4">
                        {/* Service Item 1 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-1.jpg" alt="Event Transport" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">Event Transport Packages</h3>
                                    <p className="mb-3">Safe, reliable, and comfortable group transport for events, weddings, and corporate gatherings.</p>
                                    <ul className="list-unstyled mb-4 text-start">
                                        <li><i className="fa fa-check text-primary me-2"></i>Shuttle services for large groups</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Customized event transport</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Professional drivers</li>
                                    </ul>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBmvcM0WP4EZGmbFwPoYYVNr5HOMEHoCsOwZEyyE_kEmkIYQ/viewform?usp=header" target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill py-2 px-3 w-100">Book Now</a>
                                </div>
                            </div>
                        </div>

                        {/* Service Item 2 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-2.jpg" alt="Private Car" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">Private Car Hire</h3>
                                    <p className="mb-3">Book a private car with experienced drivers for personal or business travel, fully flexible schedules.</p>
                                    <ul className="list-unstyled mb-4 text-start">
                                        <li><i className="fa fa-check text-primary me-2"></i>Hourly or daily rentals</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Professional chauffeurs</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Luxury/Standard/SUV options</li>
                                    </ul>
                                    <a href="/contact" className="btn btn-primary rounded-pill py-2 px-3 w-100">Book Now</a>
                                </div>
                            </div>
                        </div>

                        {/* Service Item 3 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-3.jpg" alt="VIP Transport" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">VIP & Luxury Transport</h3>
                                    <p className="mb-3">Experience premium travel with VIP and luxury vehicles, perfect for special occasions.</p>
                                    <ul className="list-unstyled mb-4 text-start">
                                        <li><i className="fa fa-check text-primary me-2"></i>Premium vehicles</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Airport pick-up & drop-off</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Goods & equipment transport</li>
                                    </ul>
                                    <a href="/contact" className="btn btn-primary rounded-pill py-2 px-3 w-100">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <div className="bg-light rounded p-5">
                                <h3 className="mb-4">Book Your Transport Now</h3>
                                <p className="mb-4">Reliable, comfortable, and safe transport solutions for all your needs.</p>
                                <a href="/contact" className="btn btn-primary rounded-pill py-3 px-5">Get In Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Transport;
