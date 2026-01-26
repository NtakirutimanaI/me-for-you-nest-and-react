import { useEffect, useState, useMemo } from 'react';
import { api } from '../services/api';
import { Quote, Star, MessageSquare, Heart, Users, Award, CheckCircle2, Play, X, ArrowRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { Link } from 'react-router';

export function TestimonialsPage() {
    const { t } = useLanguage();
    const [testimonials, setTestimonials] = useState<any[]>([]);
    const [activeFilter, setActiveFilter] = useState('All');
    const [videoModal, setVideoModal] = useState<string | null>(null);

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

    const categories = ['All', 'Weddings', 'Corporate', 'Services'];

    const filteredTestimonials = useMemo(() => {
        const textOnly = testimonials.filter(t => t.type !== 'video');
        if (activeFilter === 'All') return textOnly;
        return textOnly.filter(t => {
            if (activeFilter === 'Weddings') return t.profession.toLowerCase().includes('wedding') || t.profession.toLowerCase().includes('couple');
            if (activeFilter === 'Corporate') return t.profession.toLowerCase().includes('corporate') || t.profession.toLowerCase().includes('business') || t.profession.toLowerCase().includes('hub') || t.profession.toLowerCase().includes('air');
            if (activeFilter === 'Services') return !t.profession.toLowerCase().includes('wedding') && !t.profession.toLowerCase().includes('corporate');
            return true;
        });
    }, [testimonials, activeFilter]);

    const videoTestimonials = useMemo(() => {
        return testimonials.filter(t => t.type === 'video');
    }, [testimonials]);

    const stats = [
        { icon: Users, count: "500+", label: "Happy Couples" },
        { icon: Award, count: "15+", label: "Years Experience" },
        { icon: Heart, count: "100%", label: "Client Satisfaction" },
        { icon: MessageSquare, count: "250+", label: "Positive Reviews" }
    ];

    const partners = [
        { name: "RwandAir" },
        { name: "Kigali Tech Hub" },
        { name: "Bank of Kigali" },
        { name: "MTN Rwanda" },
        { name: "I&M Bank" }
    ];

    return (
        <div className="container-fluid bg-white p-0">
            {/* Professional Hero Section */}
            <div className="container-fluid py-5 position-relative overflow-hidden" style={{
                background: 'linear-gradient(rgba(16, 55, 65, 0.85), rgba(16, 55, 65, 0.85)), url("/img/3L7A6430.jpg") center center no-repeat',
                backgroundSize: 'cover',
                minHeight: '500px',
                display: 'flex',
                alignItems: 'center'
            }}>
                <div className="scallop-down"></div>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-lg-8 text-center">
                            <h6 className="text-primary text-uppercase fw-bold mb-3 animated slideInDown" style={{ letterSpacing: '4px' }}>Me For You Advisory</h6>
                            <h1 className="display-2 text-white fw-bold mb-4 animated fadeInDown">What Our Community Says</h1>
                            <p className="fs-4 text-white-50 mb-4 animated fadeInUp leading-relaxed">
                                Join hundreds of satisfied families and businesses who have trusted us to turn their visions into reality through excellence and dedication.
                            </p>
                            <div className="d-flex justify-content-center gap-3 animated fadeInUp">
                                <a href="#video-stories" className="btn btn-outline-light rounded-pill px-4 py-2 fw-bold">Watch Video Stories</a>
                                <Link to="/contact" className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow">Share Your Experience</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Stats Bar */}
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

            {/* Video Testimonials Section */}
            <div id="video-stories" className="container-xxl py-5 bg-light-soft">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: '700px' }}>
                        <h6 className="text-primary text-uppercase fw-bold mb-2">Video Stories</h6>
                        <h1 className="display-5 fw-bold mb-3">See The Joy In Motion</h1>
                        <p className="text-muted fs-5">Watch real moments from the events we've managed and the homes we've built.</p>
                    </div>
                    <div className="row g-4">
                        {videoTestimonials.length > 0 && (
                            <>
                                <div className="col-lg-8 wow fadeInLeft">
                                    <div className="position-relative video-container rounded-5 overflow-hidden shadow-lg h-100" style={{ minHeight: '400px' }}>
                                        <img
                                            src={videoTestimonials[0].image_url ? (videoTestimonials[0].image_url.startsWith('http') ? videoTestimonials[0].image_url : `/${videoTestimonials[0].image_url}`) : "/img/DSC_7878.jpg"}
                                            className="w-100 h-100 object-fit-cover"
                                            alt="Featured Video"
                                        />
                                        <div className="video-overlay position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(16, 55, 65, 0.4)' }}>
                                            <button
                                                onClick={() => setVideoModal(videoTestimonials[0].video_url)}
                                                className="video-play-btn bg-white text-primary rounded-circle shadow-lg border-0 d-flex align-items-center justify-content-center"
                                                style={{ width: '90px', height: '90px' }}
                                            >
                                                <Play size={40} fill="currentColor" />
                                            </button>
                                        </div>
                                        <div className="position-absolute bottom-0 start-0 p-4 text-white">
                                            <h3 className="fw-bold mb-0">{videoTestimonials[0].name}</h3>
                                            <p className="mb-0 opacity-75">{videoTestimonials[0].profession}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 wow fadeInRight">
                                    <div className="d-flex flex-column gap-4 h-100">
                                        {videoTestimonials.slice(1).map((v, i) => (
                                            <div key={i} className="bg-white p-4 rounded-4 shadow-sm border-start border-4 border-primary hover-lift transition-all">
                                                <h5 className="fw-bold text-dark mb-2">{v.name}</h5>
                                                <p className="text-muted small mb-3">{v.content}</p>
                                                <button
                                                    onClick={() => setVideoModal(v.video_url)}
                                                    className="btn btn-link p-0 fw-bold text-primary text-decoration-none d-flex align-items-center gap-2"
                                                >
                                                    Watch Clip <Play size={14} fill="currentColor" />
                                                </button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>

            {/* Client Logo Cloud */}
            <div className="container-fluid py-5 bg-white border-top border-bottom border-light">
                <div className="container">
                    <div className="text-center mb-5">
                        <span className="text-muted fw-bold text-uppercase small" style={{ letterSpacing: '2px' }}>Trusted By leading brands</span>
                    </div>
                    <div className="row g-4 justify-content-center align-items-center opacity-75">
                        {partners.map((p, idx) => (
                            <div key={idx} className="col-6 col-md-4 col-lg-2 text-center grayscale hover-color transition-all">
                                <div className="p-3 bg-light rounded-4 fw-bold text-dark-teal" style={{ border: '1px dashed #ddd' }}>
                                    {p.name}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Written Testimonials with Filtering */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-4 align-items-end mb-5">
                        <div className="col-lg-6 wow fadeInUp">
                            <h6 className="text-primary text-uppercase fw-bold mb-2">Written Tales</h6>
                            <h1 className="display-5 fw-bold mb-0">Every Voice Matters</h1>
                        </div>
                        <div className="col-lg-6 text-lg-end wow fadeInUp" data-wow-delay="0.2s">
                            <div className="d-inline-flex flex-wrap gap-2 p-2 bg-light rounded-pill">
                                {categories.map(cat => (
                                    <button
                                        key={cat}
                                        onClick={() => setActiveFilter(cat)}
                                        className={`btn rounded-pill px-4 py-2 fw-bold transition-all ${activeFilter === cat ? 'btn-primary shadow-sm' : 'btn-link text-dark text-decoration-none'}`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="row g-4">
                        {filteredTestimonials.length > 0 ? filteredTestimonials.map((item, idx) => (
                            <div key={idx} className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay={`${0.1 * (idx % 3)}s`}>
                                <div className="testimonial-card-premium bg-white rounded-4 p-4 p-md-5 h-100 shadow-sm border border-light transition-all position-relative">
                                    <div className="quote-icon-box position-absolute">
                                        <Quote size={40} className="text-primary opacity-25" />
                                    </div>
                                    <div className="d-flex gap-1 mb-4">
                                        {[...Array(5)].map((_, i) => <Star key={i} size={18} className="text-warning" fill="currentColor" />)}
                                    </div>
                                    <p className="testimonial-text fs-5 mb-5 italic text-dark leading-relaxed">"{item.content}"</p>
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
                                            <span className="badge py-1 px-2 rounded-pill" style={{ backgroundColor: 'rgba(16, 55, 65, 0.05)', color: '#103741', fontSize: '11px', fontWeight: '700' }}>
                                                {item.profession}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )) : (
                            <div className="col-12 text-center py-5">
                                <p className="text-muted fs-5">No stories found in this category yet. Check back soon!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Video Modal */}
            {videoModal && (
                <div className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ zIndex: 2000, background: 'rgba(0,0,0,0.9)' }}>
                    <button
                        onClick={() => setVideoModal(null)}
                        className="position-absolute top-0 end-0 m-4 btn text-white"
                    >
                        <X size={40} />
                    </button>
                    <div className="container">
                        <div className="ratio ratio-16x9 shadow-lg rounded-4 overflow-hidden">
                            <iframe
                                src={`${videoModal}?autoplay=1`}
                                title="Video Testimonial"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}

            {/* Bottom CTA */}
            <div className="container-xxl py-5 mb-5">
                <div className="container">
                    <div className="bg-dark-teal rounded-5 p-4 p-md-5 shadow-lg position-relative overflow-hidden wow zoomIn">
                        <div className="position-absolute top-0 end-0 p-5 opacity-10">
                            <MessageSquare size={200} className="text-white" />
                        </div>
                        <div className="row align-items-center position-relative" style={{ zIndex: 1 }}>
                            <div className="col-lg-8 text-center text-lg-start mb-4 mb-lg-0">
                                <h2 className="display-4 text-white fw-bold mb-3">Join the Me For You Family</h2>
                                <p className="text-white-50 fs-5 mb-0">Your story matters. Share your experience and help us grow excellence in Rwanda.</p>
                            </div>
                            <div className="col-lg-4 text-center text-lg-end">
                                <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow-lg d-inline-flex align-items-center gap-2">
                                    Submit Review <ArrowRight size={20} />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .mt-n5 { margin-top: -3rem !important; }
                .bg-light-soft { background-color: #f8fafb; }
                .leading-relaxed { line-height: 1.8; }
                .hover-lift:hover { transform: translateY(-10px); }
                .grayscale { filter: grayscale(100%); opacity: 0.6; }
                .hover-color:hover { filter: grayscale(0%); opacity: 1; transform: scale(1.05); }
                .bg-primary-soft { background-color: rgba(254, 93, 55, 0.1); }
                .bg-dark-teal { background-color: #103741 !important; }
                
                .testimonial-card-premium {
                    background: #ffffff;
                    border: 1px solid #f0f0f0;
                    transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1);
                }
                .testimonial-card-premium:hover {
                    box-shadow: 0 20px 40px rgba(0,0,0,0.08) !important;
                    border-color: rgba(254, 93, 55, 0.2) !important;
                }
                
                .video-play-btn { transition: all 0.3s ease; }
                .video-play-btn:hover { transform: scale(1.1); background-color: #FE5D37 !important; color: white !important; }
                
                .quote-icon-box { top: 30px; right: 30px; }
                .testimonial-text { font-style: italic; color: #444; position: relative; }
                .rounded-5 { border-radius: 2rem !important; }
            `}</style>
        </div>
    );
}

