import { useState, useEffect } from 'react';
import { useLocation } from 'react-router';
import { X, Calendar, MessageSquare, User, Mail, Phone, ShoppingBag, Quote, CheckCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { toast } from 'sonner';

export function BookingModal() {
    const [isVisible, setIsVisible] = useState(false);
    const location = useLocation();
    const { t } = useLanguage();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: 'events',
        details: ''
    });

    useEffect(() => {
        const hidden = localStorage.getItem('hideBookingModal') === 'true';
        if (hidden) return;

        const excludedPages = ['/login', '/register', '/dashboard', '/profile', '/bookings', '/payment'];
        const isExcluded = excludedPages.some(path => location.pathname.startsWith(path));

        if (isExcluded) {
            if (isVisible) setIsVisible(false);
            return;
        }

        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 300000); // 5 minutes

        return () => clearTimeout(timer);
    }, [location.pathname]);

    const handleClose = () => {
        setIsVisible(false);
    };

    const handleDontShowAgain = () => {
        localStorage.setItem('hideBookingModal', 'true');
        setIsVisible(false);
        toast.info('Feature hidden. You can still book via the "Programs" menu.');
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        toast.success('Thank you! Our expert will contact you soon.');
        setIsVisible(false);
    };

    if (!isVisible) return null;

    const coralColor = '#FE5D37';
    const darkColor = '#103741';

    return (
        <div className="booking-modal-overlay">
            <div className="booking-modal-container animate-slide-up">
                {/* Close Button */}
                <button onClick={handleClose} className="modal-close-btn">
                    <X size={20} />
                </button>

                <div className="row g-0 h-100">
                    {/* Left Column: Form */}
                    <div className="col-lg-7 p-4 p-md-5 bg-white modal-scrollable">
                        <h2 className="display-6 fw-bold mb-2" style={{ color: darkColor }}>Book a Free Consultation</h2>
                        <p className="text-muted small mb-4">
                            Please take a moment to fill out the form and schedule a personal demonstration of our services.
                            Our specialist will get in touch with you soon.
                        </p>

                        <form onSubmit={handleSubmit} className="row g-3">
                            <div className="col-md-6 text-start">
                                <label className="small fw-bold text-dark mb-1">Name</label>
                                <div className="input-group input-group-sm">
                                    <span className="input-group-text bg-light border-0"><User size={14} className="text-primary" /></span>
                                    <input
                                        type="text"
                                        className="form-control bg-light border-0 py-2"
                                        placeholder="Your Full Name"
                                        required
                                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 text-start">
                                <label className="small fw-bold text-dark mb-1">Email</label>
                                <div className="input-group input-group-sm">
                                    <span className="input-group-text bg-light border-0"><Mail size={14} className="text-primary" /></span>
                                    <input
                                        type="email"
                                        className="form-control bg-light border-0 py-2"
                                        placeholder="Your Email Address"
                                        required
                                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 text-start">
                                <label className="small fw-bold text-dark mb-1">Phone Number</label>
                                <div className="input-group input-group-sm">
                                    <span className="input-group-text bg-light border-0"><Phone size={14} className="text-primary" /></span>
                                    <input
                                        type="tel"
                                        className="form-control bg-light border-0 py-2"
                                        placeholder="Your Phone Number"
                                        required
                                        onChange={e => setFormData({ ...formData, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                            <div className="col-md-6 text-start">
                                <label className="small fw-bold text-dark mb-1">Desired Service</label>
                                <div className="input-group input-group-sm">
                                    <span className="input-group-text bg-light border-0"><ShoppingBag size={14} className="text-primary" /></span>
                                    <select
                                        className="form-select bg-light border-0 py-2"
                                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                                    >
                                        <option value="events">Me For You Events</option>
                                        <option value="housing">Me For You Housing</option>
                                        <option value="transport">Me For You Transport</option>
                                        <option value="cultural">Cultural Programs</option>
                                    </select>
                                </div>
                            </div>
                            <div className="col-12 text-start">
                                <label className="small fw-bold text-dark mb-1">Project Details</label>
                                <div className="input-group input-group-sm">
                                    <span className="input-group-text bg-light border-0 align-items-start pt-2"><MessageSquare size={14} className="text-primary" /></span>
                                    <textarea
                                        className="form-control bg-light border-0"
                                        rows={3}
                                        placeholder="Tell us about your event or stay requirements..."
                                        onChange={e => setFormData({ ...formData, details: e.target.value })}
                                    ></textarea>
                                </div>
                            </div>

                            <div className="col-12 mt-4 d-flex flex-column gap-2">
                                <button type="submit" className="btn btn-primary py-3 rounded-pill fw-bold shadow-sm" style={{ backgroundColor: coralColor, borderColor: coralColor }}>
                                    Let's Discuss Your Idea
                                </button>
                                <button type="button" onClick={handleDontShowAgain} className="btn btn-link text-muted small p-0 text-decoration-none">
                                    Don't see this again
                                </button>
                            </div>
                        </form>
                    </div>

                    {/* Right Column: Founder Testimonial */}
                    <div className="col-lg-5 d-none d-lg-flex flex-column p-4 p-md-5 text-white position-relative overflow-hidden" style={{ backgroundColor: '#FFF5F3' }}>
                        <div className="brand-blob-overlay"></div>

                        <div className="position-relative z-1 h-100 d-flex flex-column justify-content-between">
                            <div className="bg-white rounded-4 p-4 shadow-sm" style={{ border: `1px solid ${coralColor}20` }}>
                                <Quote size={40} style={{ color: coralColor }} fill={coralColor} opacity={0.1} strokeWidth={1} />
                                <p className="small italic mt-2 mb-4 text-dark" style={{ lineHeight: '1.6', fontSize: '15px' }}>
                                    "Me For You transformed our vision into reality. Our goal is to provide seamless management and rental services that exceed every client's expectations in Rwanda."
                                </p>
                                <div className="d-flex align-items-center gap-3 pt-3 border-top">
                                    <img src="/img/founder.jpg" className="rounded-circle shadow-sm" style={{ width: '60px', height: '60px', objectFit: 'cover', border: `3px solid ${coralColor}40` }} alt="Founder Papy N." />
                                    <div className="text-start">
                                        <h6 className="mb-0 text-dark fw-bold">Papy N.</h6>
                                        <small className="text-muted fw-bold">Founder & CEO, Me For You</small>
                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>
            </div>

            <style>{`
        .booking-modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: rgba(16, 55, 65, 0.4);
          backdrop-filter: blur(8px);
          z-index: 9999;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 20px;
        }

        .booking-modal-container {
          background: white;
          width: 100%;
          max-width: 900px;
          border-radius: 24px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 40px 100px rgba(0,0,0,0.2);
          height: auto;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
        }

        .modal-scrollable {
          overflow-y: auto;
          max-height: 90vh;
        }

        .modal-close-btn {
          position: absolute;
          top: 15px;
          right: 15px;
          background: white;
          border: none;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 10px rgba(0,0,0,0.1);
          z-index: 20;
          transition: 0.3s;
          color: ${darkColor};
        }
        .modal-close-btn:hover {
          background: ${coralColor};
          color: white;
          transform: rotate(90deg);
        }

        .animate-slide-up {
          animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(40px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }

        .brand-blob-overlay {
          position: absolute;
          top: -150px;
          right: -150px;
          width: 400px;
          height: 400px;
          background: rgba(254, 93, 55, 0.08);
          border-radius: 50%;
          filter: blur(60px);
        }

        .form-control:focus, .form-select:focus {
          box-shadow: none;
          background-color: #fff !important;
          border-bottom: 2px solid ${coralColor} !important;
          border-radius: 4px;
        }

        @media (max-width: 991.98px) {
          .booking-modal-container { max-width: 500px; }
        }
      `}</style>
        </div>
    );
}
