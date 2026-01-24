import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Contact = () => {
    return (
        <div className="container-fluid bg-white p-0">
            <Navbar />

            {/* Page Header */}
            <div className="container-fluid page-header position-relative mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                    <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Contact Us</h1>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Contact</p>
                    </div>
                </div>
            </div>

            {/* Contact Start */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">Get In Touch</h1>
                        <p>Reach out to us today for personalized guidance, expert support, or to begin your learning journey. Whether by email, phone, or a visit, our team is ready to assist you.</p>
                    </div>
                    <div className="row g-4 mb-5">
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-light rounded-3 p-3">
                                <div className="d-flex align-items-center bg-white rounded-3 p-3" style={{ height: '150px' }}>
                                    <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary)', borderRadius: '50px' }}>
                                        <i className="fa fa-map-marker-alt text-white"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="text-primary">Office</h5>
                                        <p className="mb-0">KN 667 ST, Gisozi, Kigali-Rwanda</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-light rounded-3 p-3">
                                <div className="d-flex align-items-center bg-white rounded-3 p-3" style={{ height: '150px' }}>
                                    <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary)', borderRadius: '50px' }}>
                                        <i className="fa fa-envelope-open text-white"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="text-primary">Email Us</h5>
                                        <p className="mb-0">meforyourwanda@gmail.com</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-light rounded-3 p-3">
                                <div className="d-flex align-items-center bg-white rounded-3 p-3" style={{ height: '150px' }}>
                                    <div className="d-flex align-items-center justify-content-center flex-shrink-0" style={{ width: '50px', height: '50px', backgroundColor: 'var(--primary)', borderRadius: '50px' }}>
                                        <i className="fa fa-phone-alt text-white"></i>
                                    </div>
                                    <div className="ms-3">
                                        <h5 className="text-primary">Mobile</h5>
                                        <p className="mb-0">+250 788 202 209</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row g-4">
                        <div className="col-12 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-light rounded p-4">
                                <h3 className="mb-4 text-center">Reference Map</h3>
                                <iframe
                                    className="w-100 rounded"
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15950.045868694065!2d30.0617!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwNTYnMzguOCJTIDMwwrAwMyw0Mi4xIkU!5e0!3m2!1sen!2srw!4v1616161616161!5m2!1sen!2srw"
                                    frameBorder="0"
                                    style={{ minHeight: '450px', border: 0 }}
                                    allowFullScreen
                                    aria-hidden="false"
                                    tabIndex={0}>
                                </iframe>
                                <p className="text-center mt-2 text-muted"><small>Map location is approximate based on address.</small></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Contact End */}

            <Footer />
        </div>
    );
};

export default Contact;
