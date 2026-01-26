import { useEffect, useState } from 'react';
import { api } from '../services/api';
import { Quote, Star } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

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

    return (
        <div className="container-fluid bg-white p-0">
            {/* Hero Section */}
            <div className="container-fluid py-5 bg-dark-teal text-white text-center">
                <div className="container py-5">
                    <h1 className="display-3 fw-bold mb-4 wow fadeInDown">Testimonials</h1>
                    <p className="fs-4 mb-5 wow fadeInUp" data-wow-delay="0.2s">
                        Real stories from our valued clients in Rwanda.
                    </p>
                </div>
            </div>

            {/* Testimonials Grid */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
                        <h6 className="text-primary text-uppercase mb-2">Our Reviews</h6>
                        <h1 className="mb-3 display-5 fw-bold">{t('what_clients_say')}</h1>
                        <p className="text-muted">We take pride in delivering excellence. Here is what our community says about Me For You Advisory.</p>
                    </div>

                    <div className="row g-4">
                        {testimonials.map((item, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (idx % 3)}s`}>
                                <div className="testimonial-item bg-light rounded-4 p-5 h-100 shadow-sm transition-all hover-lift position-relative overflow-hidden">
                                    <Quote size={60} className="text-primary opacity-10 position-absolute top-0 end-0 m-4" />
                                    <div className="d-flex mb-3">
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={16} className="text-warning" fill="currentColor" />
                                        ))}
                                    </div>
                                    <p className="fs-5 mb-4 italic text-dark leading-relaxed">"{item.content}"</p>
                                    <div className="d-flex align-items-center mt-auto pt-4 border-top">
                                        <img
                                            className="img-fluid flex-shrink-0 rounded-circle border border-2 border-primary-soft"
                                            src={item.image_url ? (item.image_url.startsWith('http') ? item.image_url : `/${item.image_url}`) : "/img/testimonial-1.jpg"}
                                            style={{ width: '60px', height: '60px', objectFit: 'cover' }}
                                            alt={item.name}
                                        />
                                        <div className="ps-3">
                                            <h5 className="mb-0 fw-bold">{item.name}</h5>
                                            <small className="text-primary fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px' }}>{item.profession}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="bg-primary rounded-4 p-5 shadow text-center wow zoomIn">
                        <h2 className="text-white mb-4">Have an experience to share?</h2>
                        <p className="text-white opacity-75 mb-4 fs-5">We would love to hear from you. Your feedback helps us grow.</p>
                        <a href="/contact" className="btn btn-white rounded-pill py-3 px-5 fw-bold shadow">
                            Submit Your Story
                        </a>
                    </div>
                </div>
            </div>

            <style>{`
        .leading-relaxed { line-height: 1.8; }
        .hover-lift:hover { transform: translateY(-10px); }
        .bg-primary-soft { background-color: rgba(254, 93, 55, 0.1); }
      `}</style>
        </div>
    );
}
