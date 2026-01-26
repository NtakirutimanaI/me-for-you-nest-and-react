import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Quote, Star, MessageSquare, Heart, Users, Award, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router';

export function TestimonialsPage() {
    const { t } = useLanguage();
    const [testimonials, setTestimonials] = useState<any[]>([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        const fetchTestimonials = async () => {
            try {
                const data = await api.testimonials.findAll();
                setTestimonials(data);
            } catch (error) {
                console.error("Error fetching testimonials:", error);
            }
        };
        fetchTestimonials();

        if ((window as any).WOW) {
            new (window as any).WOW().init();
        }
    }, []);

    const stats = [
        { icon: Users, count: "500+", label: "Happy Couples" },
        { icon: Award, count: "15+", label: "Years Experience" },
        { icon: Heart, count: "100%", label: "Client Satisfaction" },
        { icon: MessageSquare, count: "250+", label: "Positive Reviews" }
    ];

    return (
        <div className="container-fluid bg-white p-0">
            {/* Redesigned Hero Section with Background Parallax Effect */}
            <div className="container-fluid py-5 position-relative overflow-hidden" style={{
                background: 'linear-gradient(rgba(16, 55, 65, 0.8), rgba(16, 55, 65, 0.8)), url("/img/3L7A6430.jpg") center center no-repeat',
                backgroundSize: 'cover',
                minHeight: '450px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="scallop-down"></div>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h6 className="text-primary text-uppercase fw-bold mb-3 animated slideInDown" style={{ letterSpacing: '4px' }}>Voices of Excellence</h6>
                            <h1 className="display-2 text-white fw-bold mb-4 animated fadeInDown">Client Stories</h1>
                            <p className="fs-4 text-white-50 mb-0 animated fadeInUp">
                                Discover why Me For You Advisory is Rwanda's most trusted partner for unforgettable experiences and professional solutions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Trust Stats Bar */}
            <div className="container-xxl py-5 mt-n5 position-relative" style={{ zIndex: 10 }}>
                <div className="container">
                    <div className="row g-4 justify-content-center">
                        {stats.map((stat, idx) => (
                            <div key={idx} className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay={`${idx * 0.1}s`}>
                                <div className="bg-white rounded-4 p-4 shadow-lg text-center border-bottom border-4 border-primary hover-lift transition-all">
                                    <div className="bg-primary-soft rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                                        <stat.icon className="text-primary" size={28} />
                                    </div>
                                    <h2 className="fw-bold mb-1" style={{ color: '#103741' }}>{stat.count}</h2>
                                    <p className="text-muted fw-bold mb-0 text-uppercase small" style={{ letterSpacing: '1px' }}>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Main Testimonials Grid */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center mb-5">
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="text-primary text-uppercase fw-bold mb-3">Authentic Feedback</h6>
                            <h1 className="display-5 fw-bold mb-4">What Our Community Says About Us</h1>
                        </div>
                        <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
                            <p className="text-muted fs-5 leading-relaxed mb-0">
                                We believe that our success is measured by the happiness and growth of our clients.
                                From intimate weddings to massive corporate logistics, we bring the same level of care to every project.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4">
                        {testimonials.map((item, idx) => (
                            <div key={idx} className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay={`${0.1 * (idx % 3)}s`}>
                                <div className="testimonial-card-premium bg-white rounded-4 p-4 p-md-5 h-100 shadow-sm border border-light transition-all position-relative">
                                    <div className="quote-icon-box position-absolute">
                                        <Quote size={40} className="text-primary opacity-25" />
                                    </div>

                                    <div className="d-flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={18} className="text-warning" fill="currentColor" />
                                        ))}
                                    </div>

                                    <p className="testimonial-text fs-5 mb-5 italic text-dark leading-relaxed">
                                        "{item.content}"
                                    </p>

                                    <div className="d-flex align-items-center mt-auto border-top pt-4">
                                        <div className="position-relative">
                                            <img
                                                className="img-fluid flex-shrink-0 rounded-circle border border-3 border-primary-soft shadow-sm"
                                                src={item.image_url ? (item.image_url.startsWith('http') ? item.image_url : `/${item.image_url}`) : "/img/testimonial-1.jpg"}
                                                style={{ width: '70px', height: '70px', objectFit: 'cover' }}
                                                alt={item.name}
                                            />
                                            <div className="verified-badge position-absolute bottom-0 end-0 bg-primary rounded-circle d-flex align-items-center justify-content-center border border-2 border-white" style={{ width: '24px', height: '24px' }}>
                                                <CheckCircle2 size={12} className="text-white" />
                                            </div>
                                        </div>
                                        <div className="ps-3">
                                            <h5 className="mb-1 fw-bold text-dark">{item.name}</h5>
                                            <div className="d-flex align-items-center gap-2">
                                                <span className="badge py-1 px-2 rounded-pill" style={{ backgroundColor: 'rgba(16, 55, 65, 0.05)', color: '#103741', fontSize: '11px', fontWeight: '700' }}>
                                                    {item.profession}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Experience Sharing Section */}
            <div className="container-xxl py-5 mb-5">
                <div className="container">
                    <div className="bg-dark-teal rounded-5 p-4 p-md-5 shadow-lg position-relative overflow-hidden wow zoomIn">
                        {/* Decorative Background Patterns */}
                        <div className="position-absolute top-0 end-0 p-5 opacity-10">
                            <MessageSquare size={200} className="text-white" />
                        </div>

                        <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
                            <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
                                <h2 className="display-4 text-white fw-bold mb-3">Join the Me For You Family</h2>
                                <p className="text-white-50 fs-5 mb-0">
                                    Your story matters to us. Share your experience and help us continue building a legacy of excellence in Rwanda.
                                </p>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow-lg d-inline-flex align-items-center gap-2">
                                    Submit Your Review <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .mt-n5 { margin-top: -3rem !important; }
                .leading-relaxed { line-height: 1.8; }
                .hover-lift:hover { transform: translateY(-10px); }
                .bg-primary-soft { background-color: rgba(254, 93, 55, 0.1); }
                .bg-dark-teal { background-color: #103741 !important; }
                .text-dark-teal { color: #103741 !important; }
                
                .testimonial-card-premium {
                    background: #ffffff;
                    border: 1px solid #f0f0f0;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                
                .testimonial-card-premium:hover {
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
                    border-color: rgba(254, 93, 55, 0.2) !important;
                }
                
                .quote-icon-box {
                    top: 30px;
                    right: 30px;
                }
                
                .testimonial-text {
                    font-style: italic;
                    color: #444;
                    position: relative;
                }
                
                .bg-white-gradient {
                    background: linear-gradient(135deg, #ffffff 0%, #f9f9f9 100%);
                }
                
                .rounded-5 { border-radius: 2rem !important; }
            `}</style>
        </div>
    );
}

function ArrowRight({ size, className }: { size: number, className?: string }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={size}
            height={size}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
        </svg>
    );
}
