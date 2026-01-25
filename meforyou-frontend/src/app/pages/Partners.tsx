import { Handshake, Target, Award, Globe } from 'lucide-react';
import { Link } from 'react-router';

export function PartnersPage() {
    const partners = [
        {
            name: 'Kigali Event Planners',
            role: 'Event Logistics Partner',
            description: 'Collaborating on large-scale corporate events and national festivals.',
            logo: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=200'
        },
        {
            name: 'Rwanda Tourism Board',
            role: 'Official Travel Partner',
            description: 'Promoting local tourism through our cultural activity packages.',
            logo: 'https://images.unsplash.com/photo-1599305090598-fe179d501227?w=200'
        },
        {
            name: 'MOMO Rwanda',
            role: 'Payment Solutions Partner',
            description: 'Ensuring seamless and secure local payments for all our services.',
            logo: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200'
        },
        {
            name: 'Kigali Housing Group',
            role: 'Strategic Property Partner',
            description: 'Providing a wide network of exclusive properties for our clients.',
            logo: 'https://images.unsplash.com/photo-1554469384-e58fac16e23a?w=200'
        }
    ];

    return (
        <div className="container-fluid bg-white p-0">
            {/* Page Header */}
            <div className="container-fluid page-header position-relative mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                    <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Our Partners</h1>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><Link className="text-white" to="/">Home</Link></p>
                        <i className="fa fa-angle-double-right pt-1 px-3 text-white"></i>
                        <p className="m-0 text-uppercase">Partners</p>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">Building the Future Together</h1>
                        <p>We work with the best organizations in Rwanda to deliver exceptional value and experiences to our clients.</p>
                    </div>

                    <div className="row g-4">
                        {partners.map((partner, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                                <div className="bg-light rounded p-4 text-center h-100 shadow-sm transition-all hover-shadow">
                                    <div className="bg-white rounded p-3 mb-4 mx-auto" style={{ width: '120px', height: '120px' }}>
                                        <img src={partner.logo} alt={partner.name} className="img-fluid h-100 w-100 object-fit-contain grayscale hover-grayscale-0 transition-all" />
                                    </div>
                                    <h5 className="mb-2">{partner.name}</h5>
                                    <p className="text-primary small fw-bold mb-3">{partner.role}</p>
                                    <p className="small text-muted mb-0">{partner.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-5 p-5 bg-primary rounded wow zoomIn" data-wow-delay="0.1s">
                        <div className="row align-items-center">
                            <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
                                <h2 className="text-white mb-3">Interested in Partnering?</h2>
                                <p className="text-white mb-0 fs-5">Join our network and help us create memorable experiences in Rwanda.</p>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <Link to="/contact" className="btn btn-outline-light rounded-pill py-3 px-5">Get in Touch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
