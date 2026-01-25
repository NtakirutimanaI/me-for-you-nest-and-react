import { Users, Target, Award, Heart, CheckCircle, Shield, Lightbulb, UserCheck, Quote } from 'lucide-react';
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

  return (
    <div className="container-fluid bg-white p-0">
      {/* Background / Who We Are Section */}
      <div className="container-xxl py-5">
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

      <style>{`
        .leading-relaxed { line-height: 1.8; }
        .hover-lift:hover { transform: translateY(-10px); }
        .bg-primary-soft { background-color: rgba(254, 93, 55, 0.1); }
      `}</style>
    </div>
  );
}
