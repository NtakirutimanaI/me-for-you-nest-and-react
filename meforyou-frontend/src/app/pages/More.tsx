import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, CheckCircle, Shield, Zap, Target, Users, Award } from 'lucide-react';
import { api } from '../services/api';

export function MorePage() {
    const { t } = useLanguage();
    const [teamPhoto, setTeamPhoto] = useState("/img/DSC_7878.jpg");
    const [blueprints, setBlueprints] = useState<any[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        if ((window as any).WOW) {
            new (window as any).WOW().init();
        }

        const fetchData = async () => {
            try {
                // Fetch team members to find a good team photo
                const teamData = await api.team.findAll();
                if (teamData && teamData.length > 1) {
                    const secondMember = teamData[1];
                    if (secondMember.image_url) {
                        // setTeamPhoto(secondMember.image_url.startsWith('http') ? secondMember.image_url : `/${secondMember.image_url}`);
                    }
                }

                // Fetch facilities to use as blueprints if they match certain titles
                const facilitiesData = await api.facilities.findAll();
                if (facilitiesData && facilitiesData.length > 0) {
                    setBlueprints(facilitiesData.slice(0, 3));
                }
            } catch (error) {
                console.error("Error fetching more data:", error);
            }
        };
        fetchData();
    }, []);

    const defaultBlueprints = [
        { title: 'Inquiry Analysis', description: 'Understanding your unique constraints and goals is our first priority.', icon: Target },
        { title: 'Market Alignment', description: 'Ensuring solutions are validated against local market conditions in Rwanda.', icon: Award },
        { title: 'Resource Analytics', description: 'Data-driven decisions for procurement and logistics to stay within budget.', icon: Zap }
    ];

    const displayBlueprints = blueprints.length > 0 ? blueprints.map((b, i) => ({
        title: b.title,
        description: b.description,
        icon: [Target, Award, Zap][i % 3]
    })) : defaultBlueprints;

    return (
        <div className="container-fluid bg-white p-0">
            {/* Premium Hero Header Section */}
            <div className="container-fluid page-header position-relative p-0 mb-5" style={{
                background: 'linear-gradient(rgba(16, 55, 65, 0.8), rgba(16, 55, 65, 0.8)), url("/img/hero-team.jpg") center center no-repeat',
                backgroundSize: 'cover',
                minHeight: '400px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="container py-5 text-center mt-3">
                    <h1 className="display-2 text-white fw-bold mb-3 animated slideInDown" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>Our Depth & Strategy</h1>
                    <nav aria-label="breadcrumb">
                        <div className="d-inline-flex align-items-center text-white fs-5 fw-medium animated slideInUp">
                            <Link className="text-white hover-opacity-100 transition-all text-decoration-none" to="/">{t('home')}</Link>
                            <span className="mx-2 opacity-50">/</span>
                            <span className="text-white">Our Depth</span>
                        </div>
                    </nav>
                    <p className="text-white-50 fs-5 mt-4 max-w-700 mx-auto animated fadeInUp">
                        Going beyond services to deliver meaningful impact through smart solutions and strategic advisory.
                    </p>
                </div>

                {/* Scalloped Border effect */}
                <div className="position-absolute start-0 bottom-0 w-100 overflow-hidden" style={{ lineHeight: 0, height: '40px' }}>
                    <svg viewBox="0 0 120 28" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                        <path d="M0 28 Q 5 0, 10 28 T 20 28 T 30 28 T 40 28 T 50 28 T 60 28 T 70 28 T 80 28 T 90 28 T 100 28 T 110 28 T 120 28 V 28 H 0 Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft">
                            <img src={teamPhoto} className="img-fluid rounded-4 shadow-lg" alt="Our Team" style={{ maxHeight: '500px', width: '100%', objectFit: 'cover' }} />
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <h6 className="text-primary text-uppercase mb-3">Our Depth</h6>
                            <h1 className="mb-4 display-5 fw-bold">Transforming Ideas into Sustainable Realities</h1>
                            <p className="mb-4 text-muted fs-5 leading-relaxed">
                                Me For You Advisory isn't just a service provider; we are your strategic partner in Rwanda.
                                Our methodology rooted in "Smartness" ensures that every resource is utilized efficiently while maintaining the highest professional standards.
                            </p>
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="bg-primary-soft p-3 rounded-circle text-primary">
                                            <Zap size={24} />
                                        </div>
                                        <span className="fw-bold">Agile Execution</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="bg-primary-soft p-3 rounded-circle text-primary">
                                            <Shield size={24} />
                                        </div>
                                        <span className="fw-bold">Risk Management</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blueprint Details */}
            <div className="container-xxl py-5 bg-light">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
                        <h1 className="display-6 fw-bold">The Me For You Blueprint</h1>
                        <p className="text-muted">A structured approach to every challenge.</p>
                    </div>
                    <div className="row g-4">
                        {displayBlueprints.map((b, i) => (
                            <div key={i} className="col-lg-4 wow fadeInUp" data-wow-delay={`${0.1 + i * 0.2}s`}>
                                <div className="bg-white p-5 rounded-4 h-100 shadow-sm border-top border-5 border-primary transition-all hover-lift">
                                    <b.icon size={40} className="text-primary mb-4" />
                                    <h4 className="fw-bold">{b.title}</h4>
                                    <p className="text-muted mb-0">{b.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Contact Trigger */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="bg-primary rounded-4 p-5 shadow text-center wow zoomIn">
                        <h2 className="text-white mb-4">Wanna see how we can help you specifically?</h2>
                        <Link to="/contact" className="btn btn-white rounded-pill py-3 px-5 fw-bold shadow">
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

