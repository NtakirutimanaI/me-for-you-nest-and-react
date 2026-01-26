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
                    <div className="row g-5 justify-content-center">
                        {partners.map((partner, idx) => (
                            <div key={idx} className="col-lg-6 col-xl-5 wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
                                <div className="partner-showcase position-relative mx-auto" style={{ width: 'fit-content' }}>
                                    {/* Oval Portrait Frame */}
                                    <div className="partner-oval-frame overflow-hidden shadow-lg mb-4">
                                        <img
                                            src={partner.logo_url}
                                            alt={partner.name}
                                            className="w-100 h-100 object-fit-cover transition-all duration-700 hover-scale"
                                        />
                                    </div>

                                    {/* Circular Name Badge Overlay */}
                                    <div className="partner-badge-overlay position-absolute shadow-lg d-flex flex-column align-items-center justify-content-center text-center p-3">
                                        <h6 className="fw-bold mb-1 text-dark" style={{ fontSize: '14px', lineHeight: '1.2' }}>{partner.name}</h6>
                                        <p className="text-primary fw-bold m-0" style={{ fontSize: '10px', opacity: 0.8 }}>{partner.role}</p>

                                        <div className="d-flex gap-2 mt-2">
                                            <a href="#" className="text-muted hover-primary"><i className="fab fa-facebook-f" style={{ fontSize: '10px' }}></i></a>
                                            <a href="#" className="text-muted hover-primary"><i className="fab fa-twitter" style={{ fontSize: '10px' }}></i></a>
                                            <a href="#" className="text-muted hover-primary"><i className="fab fa-instagram" style={{ fontSize: '10px' }}></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
                .partner-showcase { padding: 40px; }
                .partner-oval-frame {
                    width: 280px;
                    height: 380px;
                    border-radius: 140px / 190px;
                    background: #f8fafb;
                }
                .partner-oval-frame img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .partner-badge-overlay {
                    bottom: 20px;
                    right: -20px;
                    width: 160px;
                    height: 160px;
                    background: #fffafa; /* Light pinkish/peach white */
                    border-radius: 50%;
                    border: 1px solid #ffe4e1;
                    z-index: 10;
                    padding: 20px;
                }
                .hover-scale { transition: transform 0.5s ease; }
                .partner-showcase:hover .hover-scale { transform: scale(1.05); }
                .hover-primary:hover { color: #FE5D37 !important; }
                .text-dark { color: #111 !important; }
            `}</style>
        </div>
    );
}
