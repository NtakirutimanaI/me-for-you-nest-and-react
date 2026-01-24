import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const AboutUs = () => {
    return (
        <div className="container-fluid bg-white p-0">
            <Navbar />

            {/* Page Header */}
            <div className="container-fluid page-header position-relative mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                    <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">About Us</h1>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><a className="text-white" href="/">Home</a></p>
                        <i className="fa fa-angle-double-right pt-1 px-3"></i>
                        <p className="m-0 text-uppercase">About Us</p>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">Who We Are?</h1>
                        <p>Content coming soon...</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default AboutUs;
