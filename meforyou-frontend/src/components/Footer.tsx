import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container-fluid py-5">
                <div className="row g-5">
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Get In Touch</h3>
                        <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                        <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                        <p className="mb-2"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        <div className="d-flex pt-2">
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
                            <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Quick Links</h3>
                        <Link className="btn btn-link text-white-50" to="/aboutus">About Us</Link>
                        <Link className="btn btn-link text-white-50" to="/contact">Contact Us</Link>
                        <Link className="btn btn-link text-white-50" to="/services">Our Services</Link>
                        <Link className="btn btn-link text-white-50" to="/privacy">Privacy Policy</Link>
                        <Link className="btn btn-link text-white-50" to="/terms">Terms & Condition</Link>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Photo Gallery</h3>
                        <div className="row g-2 pt-2">
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="/img/classes-1.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="/img/classes-2.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="/img/classes-3.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="/img/classes-4.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="/img/classes-5.jpg" alt="" />
                            </div>
                            <div className="col-4">
                                <img className="img-fluid rounded bg-light p-1" src="/img/classes-6.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <h3 className="text-white mb-4">Hints & Links</h3>
                        <p>Provide space for clients to place orders for each service they want.</p>
                        <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                            <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
                            <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="copyright">
                    <div className="row">
                        <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                            &copy; <Link className="border-bottom" to="#">Me For You</Link>, All Right Reserved.
                            This Website Designed By <Link className="border-bottom" to="/make_it_solutions">MAKE IT SOLUTIONS</Link>
                        </div>
                        <div className="col-md-6 text-center text-md-end">
                            <div className="footer-menu">
                                <Link to="/">Home</Link>
                                <Link to="/cookies">Cookies</Link>
                                <Link to="/help">Help</Link>
                                <Link to="/faq">FQAs</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
