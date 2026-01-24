import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Housing = () => {
    return (
        <div className="container-fluid bg-white p-0">
            <Navbar />

            {/* Page Header */}
            <div className="container-fluid page-header position-relative mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                    <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Me For You Housing</h1>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Programs</p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Housing</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">Housing Solutions</h1>
                        <p className="fs-5">Find your perfect home with us. We offer modern, comfortable, and affordable living spaces tailored to your needs.</p>
                    </div>

                    <div className="row g-4">
                        {/* Service Item 1 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-1.jpg" alt="Apartments" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">Modern Apartments</h3>
                                    <p className="mb-3">Find fully furnished and serviced apartments designed for comfort.</p>
                                    <ul className="list-unstyled mb-4 text-start">
                                        <li><i className="fa fa-check text-primary me-2"></i>Property Search & Rental</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Short & Long-Term Stays</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Relocation Support</li>
                                    </ul>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBmvcM0WP4EZGmbFwPoYYVNr5HOMEHoCsOwZEyyE_kEmkIYQ/viewform?usp=header" target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill py-2 px-3 w-100">Rent Now</a>
                                </div>
                            </div>
                        </div>

                        {/* Service Item 2 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-2.jpg" alt="Family Homes" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">Family Homes</h3>
                                    <p className="mb-3">Spacious family-friendly houses in safe neighborhoods for long-term living.</p>
                                    <ul className="list-unstyled mb-4 text-start">
                                        <li><i className="fa fa-check text-primary me-2"></i>Event Accommodation</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Housing Management</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Flexible Leasing</li>
                                    </ul>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBmvcM0WP4EZGmbFwPoYYVNr5HOMEHoCsOwZEyyE_kEmkIYQ/viewform?usp=header" target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill py-2 px-3 w-100">Rent Now</a>
                                </div>
                            </div>
                        </div>

                        {/* Service Item 3 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-3.jpg" alt="Luxury Villas" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">Luxury Villas</h3>
                                    <p className="mb-3">Exclusive villas offering privacy, elegance, and comfort for your lifestyle.</p>
                                    <ul className="list-unstyled mb-4 text-start">
                                        <li><i className="fa fa-check text-primary me-2"></i>Premium Amenities</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Concierge Services</li>
                                        <li><i className="fa fa-check text-primary me-2"></i>Custom Leasing</li>
                                    </ul>
                                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBmvcM0WP4EZGmbFwPoYYVNr5HOMEHoCsOwZEyyE_kEmkIYQ/viewform?usp=header" target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill py-2 px-3 w-100">Rent Now</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <div className="bg-light rounded p-5">
                                <h3 className="mb-4">Ready to Find Your Perfect Home?</h3>
                                <p className="mb-4">Contact us today and let us help you find a modern, comfortable, and affordable living space.</p>
                                <a href="/contact" className="btn btn-primary rounded-pill py-3 px-5">Get in Touch</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Housing;
