import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useState } from 'react';
import { toast } from 'sonner';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const { t } = useLanguage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully! We will get back to you soon.');
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container-fluid bg-white p-0">
      {/* Premium Hero Header Section */}
      <div className="container-fluid page-header position-relative p-0 mb-5" style={{
        background: 'linear-gradient(rgba(16, 55, 65, 0.8), rgba(16, 55, 65, 0.8)), url("/img/call-to-action.jpg") center center no-repeat',
        backgroundSize: 'cover',
        minHeight: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container py-5 text-center mt-3">
          <h1 className="display-2 text-white fw-bold mb-3 animated slideInDown" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>{t('get_in_touch')}</h1>
          <nav aria-label="breadcrumb">
            <div className="d-inline-flex align-items-center text-white fs-5 fw-medium animated slideInUp">
              <Link className="text-white hover-opacity-100 transition-all text-decoration-none" to="/">{t('home')}</Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="text-white">Contact Us</span>
            </div>
          </nav>
          <p className="text-white-50 fs-5 mt-4 max-w-700 mx-auto animated fadeInUp leading-relaxed">
            Have questions or interested in our services? Send us a message and we'll get back to you as soon as possible.
          </p>
        </div>

        {/* Scalloped Border effect */}
        <div className="position-absolute start-0 bottom-0 w-100 overflow-hidden" style={{ lineHeight: 0, height: '40px' }}>
          <svg viewBox="0 0 120 28" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0 28 Q 5 0, 10 28 T 20 28 T 30 28 T 40 28 T 50 28 T 60 28 T 70 28 T 80 28 T 90 28 T 100 28 T 110 28 T 120 28 V 28 H 0 Z" fill="white" />
          </svg>
        </div>
      </div>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-light rounded p-4 h-100 border-top border-5 border-primary">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                    <MapPin className="text-primary" />
                  </div>
                  <h5 className="ms-3 mb-0">Our Office</h5>
                </div>
                <p className="mb-0">KN 667 ST, Gisozi, Kigali-Rwanda</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-light rounded p-4 h-100 border-top border-5 border-success">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                    <Mail className="text-success" />
                  </div>
                  <h5 className="ms-3 mb-0">Email Us</h5>
                </div>
                <p className="mb-0">meforyourwanda@gmail.com</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
              <div className="bg-light rounded p-4 h-100 border-top border-5 border-warning">
                <div className="d-flex align-items-center mb-3">
                  <div className="bg-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '45px', height: '45px' }}>
                    <Phone className="text-warning" />
                  </div>
                  <h5 className="ms-3 mb-0">Call Us</h5>
                </div>
                <p className="mb-0">+250 788 202 209</p>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-12 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-light rounded p-5">
                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control border-0"
                          id="name"
                          placeholder="Your Name"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">{t('full_name')}</label>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="email"
                          className="form-control border-0"
                          id="email"
                          placeholder="Your Email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                        />
                        <label htmlFor="email">{t('email')}</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <input type="text" className="form-control border-0" id="subject" placeholder="Subject" />
                        <label htmlFor="subject">Subject</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
                        <textarea
                          className="form-control border-0"
                          placeholder="Leave a message here"
                          id="message"
                          style={{ height: '150px' }}
                          required
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                        ></textarea>
                        <label htmlFor="message">Message</label>
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      <button className="btn btn-primary w-100 py-3 rounded-pill" type="submit">Send Message</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Contact End */}
    </div>
  );
}
