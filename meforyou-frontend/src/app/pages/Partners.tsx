import { Handshake, Target, Award, Globe, CheckCircle, Quote, Play, ImageIcon, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { useLanguage } from '../context/LanguageContext';

export function PartnersPage() {
    const { t } = useLanguage();
    const [partners, setPartners] = useState<any[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchPartners = async () => {
            try {
                const data = await api.partners.findAll();
                setPartners(data);
            } catch (error) {
                console.error("Error fetching partners:", error);
            }
        };
        fetchPartners();

        if ((window as any).WOW) {
            new (window as any).WOW().init();
        }
    }, []);

    const galleryImages = [
        "/img/3L7A6333.jpg",
        "/img/DSC09554.JPG",
        "/img/3L7A6430.jpg",
        "/img/GOD_0700.jpg",
        "/img/DSC_7878.jpg",
        "/img/UEP(424).jpg"
    ];

    return (
        <div className="container-fluid bg-white p-0">
            {/* Shorter Premium Hero Header Section */}
            <div className="container-fluid page-header position-relative p-0 mb-5" style={{
                background: 'linear-gradient(rgba(16, 55, 65, 0.7), rgba(16, 55, 65, 0.7)), url("/img/3L7A6333.jpg") center center no-repeat',
                backgroundSize: 'cover',
                minHeight: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="container py-5 text-center mt-3">
                    <h1 className="display-3 text-white fw-bold mb-2 animated slideInDown" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>Our Partners</h1>
                    <nav aria-label="breadcrumb">
                        <div className="d-inline-flex align-items-center text-white fs-6 fw-medium animated slideInUp">
                            <Link className="text-white hover-opacity-100 transition-all text-decoration-none" to="/">{t('home')}</Link>
                            <span className="mx-2 opacity-50">/</span>
                            <span className="opacity-75">{t('about') || 'About'}</span>
                            <span className="mx-2 opacity-50">/</span>
                            <span className="text-white">Partners</span>
                        </div>
                    </nav>
                </div>

                {/* Large White Scalloped Wave Border */}
                <div className="position-absolute start-0 bottom-0 w-100 overflow-hidden" style={{ lineHeight: 0, height: '30px' }}>
                    <svg viewBox="0 0 120 28" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                        <path d="M0 28 Q 5 0, 10 28 T 20 28 T 30 28 T 40 28 T 50 28 T 60 28 T 70 28 T 80 28 T 90 28 T 100 28 T 110 28 T 120 28 V 28 H 0 Z" fill="white" />
                    </svg>
                </div>
            </div>

            {/* Partners List Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
                        <h6 className="text-primary text-uppercase fw-bold mb-2">Strategic Network</h6>
                        <h1 className="display-4 fw-bold mb-3">Building the Future Together</h1>
                        <p className="fs-5 text-muted">We collaborate with dedicated professionals and organizations to deliver exceptional value and impactful experiences across Rwanda.</p>
                    </div>

                    <div className="row g-4 justify-content-center">
                        {partners.map((partner, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                                <div className="partner-card bg-white rounded-5 p-4 text-center h-100 shadow-sm transition-all hover-lift border border-light">
                                    <div className="position-relative mb-4 mx-auto" style={{ width: '140px', height: '140px' }}>
                                        <img
                                            src={partner.logo_url}
                                            alt={partner.name}
                                            className="img-fluid rounded-circle h-100 w-100 object-fit-cover shadow-sm border border-4 border-primary-soft p-1"
                                        />
                                        <div className="position-absolute bottom-0 end-0 bg-primary text-white rounded-circle p-2 shadow">
                                            <Award size={18} />
                                        </div>
                                    </div>
                                    <h5 className="mb-2 fw-bold text-dark">{partner.name}</h5>
                                    <div className="badge bg-primary-soft text-primary rounded-pill px-3 py-1 mb-3 small fw-bold">
                                        {partner.role}
                                    </div>
                                    <p className="small text-muted mb-0 leading-relaxed px-2">{partner.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Photo Gallery Title */}
                    <div className="text-center mx-auto mt-5 pt-5 mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h6 className="text-primary text-uppercase fw-bold mb-2">Visual Moments</h6>
                        <h1 className="display-5 fw-bold mb-0">Photo Gallery</h1>
                    </div>

                    {/* Grid Gallery */}
                    <div className="row g-3 mb-5 pb-5">
                        {galleryImages.map((img, i) => (
                            <div key={i} className="col-lg-4 col-md-6 wow zoomIn" data-wow-delay={`${0.1 * i}s`}>
                                <div className="gallery-item rounded-4 overflow-hidden position-relative shadow-sm h-100" style={{ minHeight: '300px' }}>
                                    <img src={img} alt="Partnership event" className="w-100 h-100 object-fit-cover transition-all duration-500 hover-scale" />
                                    <div className="gallery-overlay d-flex align-items-center justify-content-center">
                                        <span className="btn btn-primary rounded-circle p-3"><ImageIcon size={24} /></span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* CTA Section */}
                    <div className="bg-dark-teal rounded-5 p-4 p-md-5 shadow-lg position-relative overflow-hidden wow fadeInUp">
                        <div className="position-absolute top-0 end-0 p-5 opacity-10">
                            <Handshake size={200} className="text-white" />
                        </div>
                        <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
                            <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
                                <h2 className="display-4 text-white fw-bold mb-3">Interested in Partnering?</h2>
                                <p className="text-white-50 fs-5 mb-0">Join our growing ecosystem and help us deliver excellence in hospitality and management.</p>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow d-inline-flex align-items-center gap-2">
                                    Become a Partner <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .partner-card { border-top: 5px solid var(--primary); }
                .hover-lift:hover { transform: translateY(-10px); box-shadow: 0 20px 40px rgba(0,0,0,0.1) !important; }
                .object-fit-cover { object-fit: cover !important; }
                .bg-primary-soft { background-color: rgba(254, 93, 55, 0.1); }
                .leading-relaxed { line-height: 1.6; }
                .gallery-item { cursor: pointer; }
                .gallery-overlay {
                    position: absolute; top: 0; left: 0; width: 100%; height: 100%;
                    background: rgba(16, 55, 65, 0.4); opacity: 0; transition: 0.3s;
                }
                .gallery-item:hover .gallery-overlay { opacity: 1; }
                .hover-scale:hover { transform: scale(1.1); }
                .duration-500 { transition-duration: 0.5s !important; }
                .bg-dark-teal { background-color: #103741 !important; }
            `}</style>
        </div>
    );
}
