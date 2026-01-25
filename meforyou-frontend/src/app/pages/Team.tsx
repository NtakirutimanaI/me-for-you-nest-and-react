import { Link } from 'react-router';
import { Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';

export function TeamPage() {
    const team = [
        {
            name: 'Ntakirutimana Innocent',
            role: 'Founder & CEO',
            image: '/img/team-1y.jpg',
            delay: '0.1s',
        },
        {
            name: 'Tuyishime Jean Bosco',
            role: 'Operations Manager',
            image: '/img/team-222.jpg',
            delay: '0.3s',
        },
        {
            name: 'Mukamurenzi Chantal',
            role: 'Head of Events',
            image: '/img/team-3.jpg',
            delay: '0.5s',
        },
        {
            name: 'Ishimwe Solange',
            role: 'Logistics Coordinator',
            image: '/img/team-1.jpg',
            delay: '0.7s',
        },
    ];

    return (
        <div className="container-fluid bg-white p-0">
            {/* Page Header */}
            <div className="container-fluid page-header position-relative mb-5">
                <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
                    <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Our Team</h1>
                    <div className="d-inline-flex text-white">
                        <p className="m-0 text-uppercase"><Link className="text-white" to="/">Home</Link></p>
                        <i className="fa fa-angle-double-right pt-1 px-3 text-white"></i>
                        <p className="m-0 text-uppercase">Team</p>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">Meet Our Expert Team</h1>
                        <p>Our dedicated professionals work tirelessly to provide you with the best experience across all our services.</p>
                    </div>
                    <div className="row g-4">
                        {team.map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={member.delay}>
                                <div className="classes-item border rounded h-100 p-4 text-center">
                                    <div className="bg-light rounded-circle w-75 mx-auto p-2 mb-4">
                                        <img className="img-fluid rounded-circle" src={member.image} alt={member.name} />
                                    </div>
                                    <h4 className="mb-1">{member.name}</h4>
                                    <p className="text-primary small fw-bold mb-4">{member.role}</p>
                                    <div className="d-flex justify-content-center gap-2">
                                        <a className="btn btn-sm-square btn-primary rounded-circle" href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-sm-square btn-primary rounded-circle" href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-sm-square btn-primary rounded-circle" href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
