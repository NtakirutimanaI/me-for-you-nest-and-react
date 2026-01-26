import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Mail, Phone, Facebook, Twitter, Linkedin } from 'lucide-react';
import { api } from '../services/api';

export function TeamPage() {
    const [team, setTeam] = useState<any[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchTeam = async () => {
            try {
                const data = await api.team.findAll();
                setTeam(data);
            } catch (error) {
                console.error("Error fetching team:", error);
            }
        };
        fetchTeam();

        if ((window as any).WOW) {
            new (window as any).WOW().init();
        }
    }, []);

    const defaultTeam = [
        { name: 'Ntakirutimana Innocent', role: 'Founder & CEO', image_url: 'img/team-1y.jpg' },
        { name: 'Tuyishime Jean Bosco', role: 'Operations Manager', image_url: 'img/team-222.jpg' },
        { name: 'Mukamurenzi Chantal', role: 'Head of Events', image_url: 'img/team-3.jpg' },
        { name: 'Ishimwe Solange', role: 'Logistics Coordinator', image_url: 'img/team-1.jpg' },
    ];

    const teamToDisplay = team.length > 0 ? team : defaultTeam;

    return (
        <div className="container-fluid bg-white p-0">
            {/* Shorter Premium Hero Section */}
            <div className="container-fluid page-header position-relative p-0 mb-5" style={{
                background: 'linear-gradient(rgba(16, 55, 65, 0.7), rgba(16, 55, 65, 0.7)), url("/img/hero-team.jpg") center center no-repeat',
                backgroundSize: 'cover',
                minHeight: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="container py-5 text-center mt-3">
                    <h1 className="display-3 text-white fw-bold mb-2 animated slideInDown" style={{ textShadow: '0 4px 10px rgba(0,0,0,0.5)' }}>Our Team</h1>
                    <nav aria-label="breadcrumb">
                        <div className="d-inline-flex align-items-center text-white fs-6 fw-medium animated slideInUp">
                            <Link className="text-white hover-opacity-100 transition-all text-decoration-none" to="/">Home</Link>
                            <span className="mx-2 opacity-50">/</span>
                            <span className="text-white">Team</span>
                        </div>
                    </nav>
                </div>

                {/* Scalloped Border effect */}
                <div className="position-absolute start-0 bottom-0 w-100 overflow-hidden" style={{ lineHeight: 0, height: '30px' }}>
                    <svg viewBox="0 0 120 28" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                        <path d="M0 28 Q 5 0, 10 28 T 20 28 T 30 28 T 40 28 T 50 28 T 60 28 T 70 28 T 80 28 T 90 28 T 100 28 T 110 28 T 120 28 V 28 H 0 Z" fill="white" />
                    </svg>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h1 className="mb-3">Meet Our Expert Team</h1>
                        <p>Our dedicated professionals work tirelessly to provide you with the best experience across all our services.</p>
                    </div>
                    <div className="row g-4">
                        {teamToDisplay.map((member, index) => (
                            <div key={index} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                                <div className="classes-item border rounded h-100 p-4 text-center">
                                    <div className="bg-light rounded-circle w-75 mx-auto p-2 mb-4">
                                        <img
                                            className="img-fluid rounded-circle"
                                            src={member.image_url ? (member.image_url.startsWith('http') ? member.image_url : `/${member.image_url}`) : member.image}
                                            alt={member.name}
                                        />
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
