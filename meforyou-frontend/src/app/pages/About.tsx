import { useEffect } from 'react';
import { Target, Award, CheckCircle, Shield, Lightbulb, UserCheck, Quote, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export function AboutPage() {
  const { t } = useLanguage();

  const values = [
    {
      icon: Shield,
      title: t('value_professionalism'),
      description: t('value_professionalism_desc'),
      delay: '0.1s'
    },
    {
      icon: UserCheck,
      title: t('value_trustworthiness'),
      description: t('value_trustworthiness_desc'),
      delay: '0.3s'
    },
    {
      icon: Lightbulb,
      title: t('value_smartness'),
      description: t('value_smartness_desc'),
      delay: '0.5s'
    }
  ];

  useEffect(() => {
    const $ = (window as any).jQuery;
    if ($ && typeof $.fn.owlCarousel === 'function') {
      $(".about-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
        nav: false,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
      });
    }
  }, []);

  return (
    <div className="container-fluid bg-white p-0">
      {/* Photo Collage Hero Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '2px' }}>About Me For You</h6>
              <h1 className="display-4 fw-bold mb-4">Creating Memorable Experiences Together</h1>
              <p className="fs-5 text-muted mb-4 leading-relaxed">
                At Me For You Advisory, we believe every moment deserves to be special. From stunning events to comfortable homes and reliable transport, we're here to make your dreams a reality.
              </p>
              <div className="d-flex flex-wrap gap-4 mb-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-primary rounded-circle p-2">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="fw-bold">Events & Weddings</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-primary rounded-circle p-2">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="fw-bold">Housing Solutions</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-primary rounded-circle p-2">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="fw-bold">Transport Services</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow-sm">{t('get_in_touch')}</Link>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="photo-collage-container position-relative" style={{ minHeight: '500px' }}>
                {/* Main large circle - top */}
                <div
                  className="photo-circle photo-circle-main position-absolute"
                  style={{
                    width: '320px',
                    height: '320px',
                    top: '0',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '6px solid #f8f4f2',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    zIndex: 3
                  }}
                >
                  <img
                    src="/img/collage-wedding.jpg"
                    alt="Happy moments"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Bottom left circle */}
                <div
                  className="photo-circle photo-circle-left position-absolute"
                  style={{
                    width: '220px',
                    height: '220px',
                    bottom: '20px',
                    left: '10%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '5px solid #f8f4f2',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    zIndex: 2
                  }}
                >
                  <img
                    src="/img/collage-people.png"
                    alt="Event decoration"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>

                {/* Bottom right circle */}
                <div
                  className="photo-circle photo-circle-right position-absolute"
                  style={{
                    width: '220px',
                    height: '220px',
                    bottom: '20px',
                    right: '10%',
                    borderRadius: '50%',
                    overflow: 'hidden',
                    border: '5px solid #f8f4f2',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                    zIndex: 2
                  }}
                >
                  <img
                    src="/img/collage-serving.jpg"
                    alt="Team members"
                    className="w-100 h-100"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background / Who We Are Section */}
      <div className="container-xxl py-5 bg-light">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase mb-2">{t('who_we_are')}</h6>
              <h1 className="mb-4 display-5 fw-bold">{t('background_title')}</h1>
              <p className="mb-4 fs-5 text-muted leading-relaxed">
                {t('background_desc')}
              </p>
              <div className="row g-4 mb-5 justify-content-center">
                <div className="col-sm-4">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="btn-square bg-primary rounded-circle me-3">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                    <span className="fw-bold">Professional Team</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="btn-square bg-primary rounded-circle me-3">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                    <span className="fw-bold">Reliable Service</span>
                  </div>
                </div>
                <div className="col-sm-4">
                  <div className="d-flex align-items-center justify-content-center mb-3">
                    <div className="btn-square bg-primary rounded-circle me-3">
                      <CheckCircle className="text-white" size={20} />
                    </div>
                    <span className="fw-bold">24/7 Support</span>
                  </div>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow-sm">{t('get_in_touch')}</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="container-fluid bg-light py-5 my-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeIn" data-wow-delay="0.1s">
              <div className="bg-white p-5 rounded-4 shadow-sm border-start border-5 border-primary">
                <Target size={48} className="text-primary mb-4" />
                <h2 className="display-6 fw-bold mb-3">{t('mission_title')}</h2>
                <p className="mb-0 text-muted fs-5 leading-relaxed">
                  {t('mission_desc')}
                </p>
              </div>
            </div>
            <div className="col-lg-7 wow fadeIn" data-wow-delay="0.5s">
              <div className="ps-lg-5">
                <Quote size={60} className="text-primary opacity-25 mb-4" />
                <h1 className="mb-4 display-6 italic fw-medium">"{t('founder_quote')}"</h1>
                <div className="d-flex align-items-center gap-3">
                  <img src="/img/founder.jpg" className="rounded-circle shadow-sm border border-3 border-white" style={{ width: '80px', height: '80px', objectFit: 'cover' }} alt="" />
                  <div>
                    <h4 className="mb-0 text-primary fw-bold text-uppercase">{t('founder_full_name')}</h4>
                    <small className="text-muted fw-bold">Founder & CEO, Me For You Advisory</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="container-xxl py-5">
        <div className="container text-center">
          <div className="mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h6 className="text-primary text-uppercase mb-2">How We Work</h6>
            <h1 className="mb-3 display-5 fw-bold">Our Core Values</h1>
            <p className="text-muted">Our work is guided by principles that ensure the best results for our clients.</p>
          </div>
          <div className="row g-4 justify-content-center">
            {values.map((v, i) => (
              <div key={i} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={v.delay}>
                <div className="facility-item bg-light rounded-4 p-5 text-center h-100 shadow-sm transition-all hover-lift">
                  <div className="bg-white rounded-circle d-inline-flex align-items-center justify-content-center mb-4 shadow-sm" style={{ width: '90px', height: '90px' }}>
                    <v.icon className="text-primary" size={40} />
                  </div>
                  <h4 className="mb-3 fw-bold">{v.title}</h4>
                  <p className="mb-0 text-muted">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="container-xxl py-5 bg-white">
        <div className="container">
          <div className="row g-5 align-items-center">
            <div className="col-lg-5 wow fadeInUp" data-wow-delay="0.1s">
              <div className="owl-carousel about-carousel rounded-4 shadow-lg overflow-hidden">
                <img className="img-fluid w-100" src="/img/DSC09554.JPG" alt="" style={{ objectFit: 'cover', height: '450px' }} />
                <img className="img-fluid w-100" src="/img/DSC_7878.jpg" alt="" style={{ objectFit: 'cover', height: '450px' }} />
                <img className="img-fluid w-100" src="/img/3L7A6430.jpg" alt="" style={{ objectFit: 'cover', height: '450px' }} />
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="display-5 fw-bold mb-4">{t('about_cta_title')}</h1>
              <p className="fs-5 text-muted mb-4 leading-relaxed">
                {t('background_desc')}
              </p>
              <Link to="/more" className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow-sm d-inline-flex align-items-center gap-2" style={{ backgroundColor: '#FE5D37', border: 'none' }}>
                {t('learn_more_about_us')} <ArrowRight size={20} />
              </Link>
            </div>
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
