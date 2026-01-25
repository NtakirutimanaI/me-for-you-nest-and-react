import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router';
import { Calendar, Car, Home as HomeIcon, Users, Award, Quote, ArrowRight, Star, ChevronDown, Map as MapIcon, Zap, DollarSign, Settings2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export function Home() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Calendar,
      title: t('events'),
      description: 'Complete event planning services for weddings, corporate events, and special occasions. We handle everything from venue to decor.',
      image: '/img/Pic8.jpg',
      link: '/events',
      color: 'text-primary'
    },
    {
      icon: Car,
      title: t('transport'),
      description: 'Wide range of vehicles from economy to luxury cars for any occasion. Reliable service with professional drivers available.',
      image: '/img/Pic7.jpg',
      link: '/car-rental',
      color: 'text-success'
    },
    {
      icon: HomeIcon,
      title: t('housing'),
      description: 'Comfortable accommodations for short-term and long-term stays in Kigali. Fully furnished and secure environments.',
      image: '/img/Pic9.jpg',
      link: '/house-rental',
      color: 'text-warning'
    },
  ];

  const testimonials = [
    {
      name: 'John Mutara',
      role: 'Event Host',
      text: 'Me For You made our wedding planning so easy. Every detail was perfect and the team was incredibly professional.',
      image: '/img/testimonial-11.jpg'
    },
    {
      name: 'Sarah Umutoni',
      role: 'Traveler',
      text: 'I used their car rental service for a month. The vehicle was in excellent condition and the support was outstanding.',
      image: '/img/testimonial-2000.jpg'
    },
    {
      name: 'David Karemera',
      role: 'Business Client',
      text: 'Highly recommended for house rentals. The location was secure and the amenities were exactly as described.',
      image: '/img/testimonial-3pp.jpg'
    }
  ];

  useEffect(() => {
    const $ = (window as any).jQuery;
    if ($ && typeof $.fn.owlCarousel === 'function') {
      $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,
        nav: true,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
        ]
      });

      $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 24,
        dots: false,
        loop: true,
        nav: true,
        navText: [
          '<i class="fa fa-chevron-left"></i>',
          '<i class="fa fa-chevron-right"></i>'
        ],
        responsive: {
          0: { items: 1 },
          992: { items: 2 }
        }
      });
    }
    if ((window as any).WOW) {
      new (window as any).WOW().init();
    }
  }, []);

  return (
    <div className="container-fluid bg-white p-0">
      {/* Hero Section */}
      <div className="container-fluid p-0 position-relative">
        <div className="owl-carousel header-carousel position-relative">
          <div className="owl-carousel-item position-relative">
            <img className="img-fluid d-block w-100" src="/img/hero-v2-wedding.png" alt="" style={{ height: '500px', objectFit: 'cover' }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-10 col-lg-6">
                    <div className="hero-glass-card p-3 p-md-4 rounded-4 animated zoomIn" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <h6 className="text-primary text-uppercase fw-bold mb-2 animated slideInDown" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>Welcome to Me For You</h6>
                      <h1 className="display-5 text-white mb-3 fw-bold animated slideInDown">{t('hero_title_1')}</h1>
                      <p className="fs-6 fw-medium text-white-50 mb-4 animated fadeInUp">{t('hero_desc_1')}</p>
                      <div className="d-flex flex-wrap gap-2 animated fadeInUp">
                        <Link to="/events" className="btn btn-primary rounded-pill py-2 px-4 fw-bold shadow-sm">{t('book_now')}</Link>
                        <Link to="/about" className="btn btn-primary rounded-pill py-2 px-4 fw-bold shadow-sm">{t('about')}</Link>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 d-none d-lg-block">
                    <div className="floating-hero-elements position-relative">
                      <div className="bg-white p-3 rounded-4 shadow-sm mb-3 d-flex align-items-center gap-3 animated slideInRight float-slow" style={{ width: '260px', animationDelay: '0.5s' }}>
                        <div className="bg-primary-soft p-2 rounded-circle"><Star size={24} className="text-primary" fill="currentColor" /></div>
                        <div>
                          <h6 className="mb-0 fw-bold" style={{ fontSize: '1rem' }}>Trust & Reliability</h6>
                          <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>99.9% Happy Clients</p>
                        </div>
                      </div>
                      <div className="bg-dark p-3 rounded-4 shadow-sm d-flex align-items-center gap-3 animated slideInRight text-white float-slow" style={{ width: '260px', animationDelay: '0.8s', animationDuration: '5s' }}>
                        <div className="bg-success p-2 rounded-circle"><Award size={24} className="text-white" /></div>
                        <div>
                          <h6 className="mb-0 fw-bold text-white" style={{ fontSize: '1rem' }}>Service Excellence</h6>
                          <p className="mb-0 text-white-50" style={{ fontSize: '0.8rem' }}>Rwanda's #1 Provider</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-carousel-item position-relative">
            <img className="img-fluid d-block w-100" src="/img/hero-cars.jpg" alt="" style={{ height: '500px', objectFit: 'cover' }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
              <div className="container">
                <div className="row align-items-center">
                  <div className="col-10 col-lg-6">
                    <div className="hero-glass-card p-3 p-md-4 rounded-4 animated zoomIn" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <h6 className="text-primary text-uppercase fw-bold mb-2" style={{ letterSpacing: '2px', fontSize: '0.8rem' }}>Seamless Management</h6>
                      <h1 className="display-5 text-white mb-3 fw-bold animated slideInDown">{t('hero_title_2')}</h1>
                      <p className="fs-6 fw-medium text-white-50 mb-4 animated fadeInUp">{t('hero_desc_2')}</p>
                      <div className="d-flex flex-wrap gap-2 animated fadeInUp">
                        <Link to="/contact" className="btn btn-primary rounded-pill py-2 px-4 fw-bold shadow-sm">{t('contact')}</Link>
                        <Link to="/car-rental" className="btn btn-primary rounded-pill py-2 px-4 fw-bold shadow-sm">Explore Fleet</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-carousel-item position-relative">
            <img className="img-fluid d-block w-100" src="/img/hero-v2-decor.png" alt="" style={{ height: '500px', objectFit: 'cover' }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-6">
                    <div className="hero-glass-card p-3 p-md-4 rounded-4 animated zoomIn" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <h1 className="display-5 text-white mb-3 fw-bold animated slideInDown">{t('hero_title_3')}</h1>
                      <p className="fs-6 fw-medium text-white mb-4 animated fadeInUp">{t('hero_desc_3')}</p>
                      <div className="d-flex flex-wrap gap-2 animated fadeInUp">
                        <Link to="/about" className="btn btn-primary rounded-pill py-2 px-4 fw-bold shadow-sm">{t('about')}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="owl-carousel-item position-relative">
            <img className="img-fluid d-block w-100" src="/img/hero-team.jpg" alt="" style={{ height: '500px', objectFit: 'cover' }} />
            <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
              <div className="container">
                <div className="row justify-content-start">
                  <div className="col-10 col-lg-6">
                    <div className="hero-glass-card p-3 p-md-4 rounded-4 animated zoomIn" style={{ background: 'rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                      <h1 className="display-5 text-white mb-3 fw-bold animated slideInDown">{t('hero_title_4')}</h1>
                      <p className="fs-6 fw-medium text-white mb-4 animated fadeInUp">{t('hero_desc_4')}</p>
                      <div className="d-flex flex-wrap gap-2 animated fadeInUp">
                        <Link to="/house-rental" className="btn btn-primary rounded-pill py-2 px-4 fw-bold shadow-sm">{t('book_now')}</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="scallop-up" style={{ top: 'auto', bottom: '0', height: '40px', backgroundSize: '80px 40px' }}></div>
      </div>

      {/* Why Choose Us */}
      <div className="container-xxl py-5 bg-white">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px' }}>
            <h6 className="text-primary text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px' }}>Move With Us Now</h6>
            <h1 className="display-5 mb-4 fw-bold">Together We Rise and Thrive</h1>
            <p className="text-muted fs-5 lh-base px-lg-5">
              Keep moving with us, as we journey together toward growth and success. We are here for you—dedicated to supporting your goals, empowering your dreams, and building a brighter future. Let’s grow, learn, and innovate side by side, transforming every challenge into opportunity. Together, we rise and thrive.
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            {/* Quick implementation & Planning */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="circle-card-container">
                <div className="circle-icon-wrapper">
                  <div className="circle-icon-inner bg-dream-soft">
                    <Zap size={30} className="text-dream" />
                  </div>
                </div>
                <div className="circle-card bg-dream">
                  <h5 className="fw-bold text-dream mb-3">Quick implementation & Planning</h5>
                  <p className="small mb-0 text-muted px-2">
                    Expertly planned and executed with speed and precision to meet your timeline.
                  </p>
                </div>
              </div>
            </div>

            {/* Lower costs for high-end services */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="circle-card-container">
                <div className="circle-icon-wrapper">
                  <div className="circle-icon-inner bg-choose-soft">
                    <DollarSign size={30} className="text-choose" />
                  </div>
                </div>
                <div className="circle-card bg-choose">
                  <h5 className="fw-bold text-choose mb-3">Lower costs for high-end services</h5>
                  <p className="small mb-0 text-muted px-2">
                    Premium quality delivery at competitive prices that respect your budget.
                  </p>
                </div>
              </div>
            </div>

            {/* Customized to meet requirements from */}
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="circle-card-container">
                <div className="circle-icon-wrapper">
                  <div className="circle-icon-inner bg-values-soft">
                    <Settings2 size={30} className="text-values" />
                  </div>
                </div>
                <div className="circle-card bg-values">
                  <h5 className="fw-bold text-values mb-3">Customized to meet requirements from</h5>
                  <p className="small mb-0 text-muted px-2">
                    Tailored solutions designed specifically to align with your unique vision.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Our Services */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">{t('premium_services')}</h1>
            <p>{t('premium_services_desc')}</p>
          </div>
          <div className="row g-4">
            {services.map((service, idx) => (
              <div key={idx} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (idx + 1)}s`}>
                <div className="classes-item border rounded-4 h-100 hover-lift shadow-sm transition-all">
                  <div className="position-relative overflow-hidden rounded-top-4">
                    <img className="img-fluid w-100 transition-all duration-500" src={service.image} alt={service.title} style={{ height: '260px', objectFit: 'cover' }} />
                    <div className="classes-overlay">
                      <Link to={service.link} className="btn btn-outline-white rounded-pill px-4 fw-bold">{t('view_details')}</Link>
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <div className="bg-primary-soft rounded-pill d-inline-block px-4 py-2 mb-3 text-primary fw-bold">
                      {service.title}
                    </div>
                    <p className="mb-4 text-muted">{service.description}</p>
                    <Link to={service.link} className="btn btn-primary rounded-pill px-4 py-2 fw-bold shadow-sm">{t('book_now')}</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile App Section */}
      <AppSection />

      {/* Process Section */}
      <ProcessSection />

      {/* FAQ Section */}
      <FAQSection />

      <div className="container-xxl py-5">
        <div className="container">
          <div className="bg-primary rounded p-5 shadow text-center wow zoomIn" data-wow-delay="0.1s">
            <h2 className="text-white mb-4">{t('supercharge_success')}</h2>
            <Link to="/contact" className="btn btn-white rounded-pill py-3 px-5 fw-bold">{t('get_in_touch')}</Link>
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div id="testimonials" className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">{t('what_clients_say')}</h1>
            <p>Hear from the people who have experienced our services firsthand.</p>
          </div>
          <div className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
            {testimonials.map((t_item, idx) => (
              <div key={idx} className="testimonial-item bg-white rounded-4 p-4 p-md-5 shadow-sm border border-light h-100 hover-lift transition-all position-relative">
                <Quote size={60} className="text-primary opacity-10 position-absolute top-0 end-0 m-4" />
                <div className="d-flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="text-warning" fill="currentColor" />
                  ))}
                </div>
                <p className="fs-5 mb-4 italic text-dark leading-relaxed" style={{ position: 'relative', zIndex: 1 }}>"{t_item.text}"</p>
                <div className="d-flex align-items-center mt-auto border-top pt-4">
                  <img className="img-fluid flex-shrink-0 rounded-circle border border-2 border-primary-soft" src={t_item.image} style={{ width: '64px', height: '64px', objectFit: 'cover' }} alt="" />
                  <div className="ps-3">
                    <h5 className="mb-0 fw-bold text-dark">{t_item.name}</h5>
                    <small className="text-primary fw-bold text-uppercase" style={{ fontSize: '10px', letterSpacing: '1px' }}>{t_item.role}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container position-relative">
          <div className="scallop-down" style={{ top: '-20px' }}></div>
          <div className="scallop-up" style={{ bottom: '-20px' }}></div>
          <div className="rounded-4 p-5 shadow-lg wow zoomIn position-relative overflow-hidden deep-sea-gradient" data-wow-delay="0.1s" style={{ background: 'linear-gradient(rgba(16, 55, 65, 0.7), rgba(16, 55, 65, 0.7)), url(/img/call-to-action.jpg) center center no-repeat', backgroundSize: 'cover' }}>
            <div className="row g-5 align-items-center position-relative" style={{ zIndex: 1 }}>
              <div className="col-lg-7 text-center text-lg-start">
                <h1 className="display-4 text-white mb-4 fw-bold">{t('ready_to_hire')}</h1>
                <p className="text-white-50 mb-0 fs-5 leading-relaxed">{t('ready_to_hire_desc')}</p>
              </div>
              <div className="col-lg-5 text-center text-lg-end">
                <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-lg-end gap-3">
                  <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow">
                    {t('contact')}
                  </Link>
                  <Link to="/register" className="btn btn-outline-light rounded-pill py-3 px-5 fw-bold">
                    {t('sign_up')}
                  </Link>
                </div>
              </div>
            </div>
            {/* Decorative circles */}
            <div className="position-absolute top-0 end-0 bg-white opacity-10 rounded-circle" style={{ width: '300px', height: '300px', marginRight: '-150px', marginTop: '-150px' }}></div>
            <div className="position-absolute bottom-0 start-0 bg-primary opacity-10 rounded-circle" style={{ width: '200px', height: '200px', marginLeft: '-100px', marginBottom: '-100px' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessSection() {
  const { t } = useLanguage();

  const stages = [
    {
      title: 'Consultation',
      icon: <Users className="text-primary" size={24} />,
      points: ['Inquiry Analysis', 'Site Visitation', 'Budget Assessment', 'Needs Blueprint'],
      delay: '0.1s',
      color: '#CFE9FA'
    },
    {
      title: 'Strategy',
      icon: <MapIcon className="text-primary" size={24} />,
      points: ['Stakeholder Briefing', 'Market Alignment', 'Service KPIs', 'Planning Blueprint'],
      delay: '0.3s',
      color: '#E0F2FE'
    },
    {
      title: 'Preparation',
      icon: <Calendar className="text-primary" size={24} />,
      points: ['Logistics Mapping', 'Vendor Selection', 'Quality Testing', 'Resource Analytics'],
      delay: '0.5s',
      color: '#FFF5F3'
    },
    {
      title: 'Execution',
      icon: <Award className="text-primary" size={24} />,
      points: ['Live Implementation', 'Schedule Syncing', 'Real-time Monitoring', 'Service Delivery'],
      delay: '0.7s',
      color: '#F0FDF4'
    }
  ];

  return (
    <div className="container-xxl py-5 bg-white">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>Professional Service Delivery Process</h1>
          <h2 className="h4 text-dark mb-4">We Follow High Standards for Every Program</h2>
          <p className="text-muted px-lg-5">
            We guide our clients through a structured methodology to ensure excellence. Using design thinking and agile coordination,
            we make incremental progress through dedicated planning cycles to deliver the perfect service experience.
          </p>
        </div>

        {/* Process Visual Container */}
        <div className="process-wrapper px-lg-5 wow fadeIn" data-wow-delay="0.2s">

          {/* Top Labels (Grouping) */}
          <div className="row g-0 mb-3 text-center d-none d-lg-flex border-bottom pb-2">
            <div className="col-9 position-relative">
              <span className="fw-bold small text-uppercase" style={{ letterSpacing: '2px' }}>Project Planning & Discovery</span>
              <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '2px', borderBottom: '1px solid #ddd', bottom: '-9px' }}></div>
            </div>
            <div className="col-3 position-relative">
              <span className="fw-bold small text-uppercase" style={{ letterSpacing: '2px' }}>Execution & Delivery</span>
              <div className="position-absolute bottom-0 start-0 w-100" style={{ height: '2px', borderBottom: '1px solid #ddd', bottom: '-9px' }}></div>
            </div>
          </div>

          <div className="row g-4 position-relative pt-4">
            {stages.map((stage, idx) => (
              <div key={idx} className="col-lg-3 col-md-6">
                <div className="process-card bg-white rounded-4 shadow-sm border h-100 position-relative hover-lift transition-all overflow-hidden">
                  <div className="process-header py-4 text-center border-bottom d-flex flex-column align-items-center gap-2" style={{ backgroundColor: stage.color }}>
                    <div className="bg-white p-2 rounded-circle shadow-sm mb-1">{stage.icon}</div>
                    <span className="fw-bold text-dark" style={{ fontSize: '1.1rem' }}>{stage.title}</span>
                  </div>
                  <div className="p-4">
                    <ul className="list-unstyled mb-0">
                      {stage.points.map((point, pIdx) => (
                        <li key={pIdx} className="d-flex align-items-center mb-3 small text-muted">
                          <div className="rounded-circle me-3" style={{ width: '6px', height: '6px', backgroundColor: '#3498db' }}></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Horizontal Arrow between cards */}
                  {idx < 3 && (
                    <div className="position-absolute top-50 end-0 translate-middle-y d-none d-lg-block" style={{ marginRight: '-22px', zIndex: 10 }}>
                      <div style={{ borderTop: '1px dashed #aaa', width: '30px', position: 'relative' }}>
                        <span style={{ position: 'absolute', right: '-4px', top: '-6px', fontSize: '12px' }}>▶</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Bottom Curved Return Arrow (Simplified with dashed line) */}
            <div className="col-12 d-none d-lg-block position-relative mt-5">
              <div style={{
                height: '40px',
                width: '75%',
                margin: '0 auto',
                border: '1px dashed #aaa',
                borderTop: 'none',
                borderRadius: '0 0 100px 100px',
                position: 'relative'
              }}>
                <span style={{ position: 'absolute', left: '-5px', top: '-10px', transform: 'rotate(-90deg)', fontSize: '14px' }}>▲</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-5 wow fadeInUp" data-wow-delay="0.5s">
          <p className="h5 mb-4 fw-bold">Maximize Service Quality with our Methodical and Precise Operations</p>
          <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow" style={{ backgroundColor: '#FE5D37', borderColor: '#FE5D37' }}>
            Let's Work Together
          </Link>
        </div>
      </div>

      <style>{`
        .process-card {
           border: 1px solid #e1e9ef !important;
           transition: .3s;
        }
        .process-card:hover {
           box-shadow: 0 10px 40px rgba(0,0,0,0.05) !important;
        }
        .process-header {
           border-top-left-radius: 8px;
           border-top-right-radius: 8px;
        }
      `}</style>
    </div>
  );
}

function FAQSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const faqs = [
    { q: t('faq_q1'), a: t('faq_a1') },
    { q: t('faq_q2'), a: t('faq_a2') },
    { q: t('faq_q3'), a: t('faq_a3') },
    { q: t('faq_q4'), a: t('faq_a4') },
    { q: t('faq_q5'), a: t('faq_a5') },
  ];

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container-xxl py-5 bg-white">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>{t('faq_title')}</h1>
        </div>

        <div className="mx-auto" style={{ maxWidth: '900px' }}>
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="border-bottom wow fadeInUp"
              data-wow-delay={`${0.1 * idx}s`}
            >
              <button
                onClick={() => toggleAccordion(idx)}
                className="w-100 py-4 d-flex align-items-center justify-content-between text-start bg-white border-0 transition-all hover-opacity-75"
                style={{ outline: 'none' }}
              >
                <h5 className={`mb-0 fw-bold ${activeIndex === idx ? 'text-primary' : 'text-dark'}`} style={{ fontSize: '1.1rem' }}>
                  {faq.q}
                </h5>
                <ChevronDown
                  size={20}
                  className={`transition-all duration-300 ${activeIndex === idx ? 'rotate-180 text-primary' : 'text-muted'}`}
                />
              </button>

              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === idx ? 'pb-4 opacity-100' : 'max-h-0 opacity-0'}`}
                style={{ maxHeight: activeIndex === idx ? '300px' : '0' }}
              >
                <p className="text-muted mb-0 lh-lg">
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .rotate-180 {
          transform: rotate(180deg);
        }
        .max-h-0 {
          max-height: 0;
        }
        .hover-opacity-75:hover {
          opacity: 0.75;
        }
      `}</style>
    </div>
  );
}

function AppSection() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation (max 15 degrees)
    const rotateX = (mouseY / (rect.height / 2)) * -15;
    const rotateY = (mouseX / (rect.width / 2)) * 15;

    setRotation({ x: rotateX, y: rotateY });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotation({ x: 0, y: 0 });
  };

  return (
    <div className="container-xxl py-5 bg-white overflow-hidden">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div
            className="col-lg-6 wow fadeInUp"
            data-wow-delay="0.1s"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={handleMouseLeave}
            onMouseMove={handleMouseMove}
            ref={containerRef}
            style={{ perspective: '1000px' }}
          >
            <div className="position-relative d-flex justify-content-center align-items-center py-5">
              {/* Central Phone Mockup with 3D Tilt */}
              <div
                className="position-relative transition-all duration-200 ease-out"
                style={{
                  transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
                  transformStyle: 'preserve-3d'
                }}
              >
                <img
                  className="img-fluid rounded-4"
                  src="/img/mobile_app_v2.png"
                  alt="Mobile App v2"
                  style={{ width: '450px', transform: 'translateZ(20px)' }}
                />

                {/* Animated Floating UI Elements */}
                {/* 1. Top Right: Customer Reviews */}
                <div
                  className="position-absolute transition-all duration-500 ease-in-out"
                  style={{
                    top: '15%',
                    right: isHovered ? '-60px' : '0px',
                    transform: `translateZ(50px) scale(${isHovered ? 1.1 : 0.5})`,
                    opacity: isHovered ? 1 : 0,
                    pointerEvents: isHovered ? 'auto' : 'none',
                    filter: isHovered ? 'none' : 'blur(10px)'
                  }}
                >
                  <div className="bg-white rounded-3 p-3 shadow-lg d-flex align-items-center gap-2 border border-primary border-opacity-10" style={{ minWidth: '180px' }}>
                    <div className="bg-primary-soft p-2 rounded-circle">
                      <Star size={20} className="text-primary" fill="currentColor" />
                    </div>
                    <div>
                      <h6 className="mb-0 small fw-bold text-dark">Customer Reviews</h6>
                      <div className="text-warning small fw-bold">4.9 Stars ⭐</div>
                    </div>
                  </div>
                </div>

                {/* 2. Bottom Left: Recent Booking */}
                <div
                  className="position-absolute transition-all duration-500 ease-in-out"
                  style={{
                    bottom: '25%',
                    left: isHovered ? '-80px' : '0px',
                    transform: `translateZ(40px) scale(${isHovered ? 1.1 : 0.5})`,
                    opacity: isHovered ? 1 : 0,
                    pointerEvents: isHovered ? 'auto' : 'none',
                    filter: isHovered ? 'none' : 'blur(10px)'
                  }}
                >
                  <div className="bg-dark rounded-3 p-3 shadow-lg d-flex align-items-center gap-2 border border-white border-opacity-10 text-white" style={{ minWidth: '220px' }}>
                    <div className="bg-primary p-2 rounded-circle">
                      <Car size={20} className="text-white" />
                    </div>
                    <div>
                      <h6 className="mb-0 small fw-bold text-white">Recent booking:</h6>
                      <div className="text-primary-soft small fw-bold">Toyota Land Cruiser</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Background Glows */}
              <div className="position-absolute top-50 start-50 translate-middle w-100 h-100 bg-primary-soft rounded-circle filter-blur opacity-25" style={{ zIndex: -1, width: '400px', height: '400px' }}></div>
            </div>
          </div>

          <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
            <h1 className="display-5 mb-4">{t('mobile_app_title')} — {t('mobile_app_subtitle')}</h1>
            <p className="mb-4 fs-5">{t('mobile_app_desc')}</p>

            <div className="mb-5">
              <h4 className="mb-3">{t('mobile_app_android_ios')}</h4>
              <p>{t('mobile_app_feature_desc')}</p>
              <Link to="/about" className="btn btn-primary rounded-pill py-3 px-5 mt-2 d-inline-flex align-items-center gap-2">
                {t('explore_more')} <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
