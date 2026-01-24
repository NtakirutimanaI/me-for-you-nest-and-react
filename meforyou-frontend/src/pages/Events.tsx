import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Events = () => {
    return (
        <div className="container-fluid bg-white p-0">
            <Navbar />

            {/* Page Header */}
            <div className="container-fluid page-header position-relative mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                    <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Me For You Events</h1>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Programs</p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">Events</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">Events Management</h1>
                        <p className="fs-5">We believe every event deserves perfect planning and a personal touch. Whether you’re hosting a wedding, corporate function, birthday, or cultural celebration, Me For You Events ensures everything runs smoothly from start to finish.</p>
                    </div>

                    <div className="row g-4">
                        {/* Service Item 1 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-1.jpg" alt="Planning" />
                                    {/* Using placeholder image paths from Home.tsx */}
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">Planning & Coordination</h3>
                                    <p>Full event planning, scheduling, budgeting, and on-site management. We handle the logistics so you can enjoy the moment.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service Item 2 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-2.jpg" alt="Band" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">Me For You Band – VESPERA</h3>
                                    <p>Our talented live band delivers unforgettable performances with the perfect mix of soulful melodies and energetic rhythms.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service Item 3 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-3.jpg" alt="Coffee" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">Me For You Coffee</h3>
                                    <p>Freshly brewed coffee served in style for guests to enjoy. Taking a break has never tasted this good.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service Item 4 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-4.jpg" alt="Cocktail" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">Me For You Cocktail</h3>
                                    <p>Expertly crafted cocktails and mocktails to keep spirits high and the conversation flowing.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service Item 5 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-5.jpg" alt="Protocol" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">Protocol & Service</h3>
                                    <p>We deliver seamless protocol and service with professionalism, trustworthiness, and smartness.</p>
                                </div>
                            </div>
                        </div>

                        {/* Service Item 6 */}
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="classes-item">
                                <div className="bg-light rounded-circle w-75 mx-auto p-3">
                                    <img className="img-fluid rounded-circle" src="/img/classes-6.jpg" alt="Staffing" />
                                </div>
                                <div className="bg-light rounded p-4 pt-5 mt-n5">
                                    <h3 className="d-block text-center h3 mt-3 mb-4">Me For You Staffing</h3>
                                    <p>MC (Master of Ceremony): Dynamic hosts to keep the program flowing. Event Squads: Professional teams assisting seamlessly.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <div className="bg-light rounded p-5">
                                <h3 className="mb-4">Ready to Plan Your Next Event?</h3>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSeBmvcM0WP4EZGmbFwPoYYVNr5HOMEHoCsOwZEyyE_kEmkIYQ/viewform?usp=header" target="_blank" rel="noreferrer" className="btn btn-primary rounded-pill py-3 px-5">Book a Free Consultation</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Events;
