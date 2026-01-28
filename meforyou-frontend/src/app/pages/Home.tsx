import { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router';
import { Calendar, Car, Home as HomeIcon, Award, Quote, ArrowRight, Star, ChevronDown, Zap, DollarSign, Settings2, Shield, Heart, Lightbulb } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { api } from '../services/api';

export function Home() {
  const { t } = useLanguage();
  const [carouselItems, setCarouselItems] = useState<any[]>([]);
  const [dynamicTestimonials, setDynamicTestimonials] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [carousel, testimonials] = await Promise.all([
          api.carouselItems.findAll(),
          api.testimonials.findAll()
        ]);

        if (carousel && carousel.length > 0) setCarouselItems(carousel);
        if (testimonials && testimonials.length > 0) setDynamicTestimonials(testimonials);
      } catch (error) {
        console.error("Error fetching home data:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const $ = (window as any).jQuery;
    if ($ && typeof $.fn.owlCarousel === 'function') {
      // Hero Carousel
      // Initialize for both default and dynamic items
      $(".header-carousel").trigger('destroy.owl.carousel');
      // Small delay to ensure React render is complete
      setTimeout(() => {
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
      }, 100);
    }
    if ((window as any).WOW) {
      new (window as any).WOW().init();
    }

    // Cleanup function
    return () => {
      if ($ && typeof $.fn.owlCarousel === 'function') {
        $(".header-carousel").trigger('destroy.owl.carousel');
      }
    };
  }, [carouselItems]);



  const defaultCarousel = [
    { title: t('hero_title_1'), description: t('hero_desc_1'), image_url: 'img/hero-v2-wedding.png' },
    { title: t('hero_title_2'), description: t('hero_desc_2'), image_url: 'img/hero-cars.jpg' }
  ];

  const displayCarousel = carouselItems.length > 0 ? carouselItems : defaultCarousel;

  return (
    <div className="container-fluid bg-white p-0">
      {/* Hero Section */}
      <div className="container-fluid p-0 position-relative">
        <div className="wave-down" style={{ top: '-1px' }}></div>
        <div className="owl-carousel header-carousel position-relative">
          {displayCarousel.map((item, index) => (
            <div key={index} className="owl-carousel-item position-relative">
              <img
                className="img-fluid d-block w-100"
                src={item.image_url.startsWith('http') ? item.image_url : `/${item.image_url}`}
                alt=""
                style={{ height: '700px', objectFit: 'cover' }}
              />
              <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, 0.45)' }}>
                <div className="container pt-5">
                  <div className="row align-items-center">
                    <div className="col-10 col-lg-7">
                      <div className="p-3 p-md-4 animated zoomIn">
                        <h6 className="text-white text-uppercase fw-bold mb-3 animated slideInDown" style={{ letterSpacing: '3px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>Me For You Advisory</h6>
                        <h1 className="display-3 text-white mb-4 fw-bold animated slideInDown" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{item.title}</h1>
                        <p className="fs-5 fw-medium text-white mb-5 animated fadeInUp" style={{ maxWidth: '600px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>{item.description}</p>
                        <div className="d-flex flex-wrap gap-4 animated fadeInUp">
                          <Link to={item.primary_button_link || "/about"} className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow-lg" style={{ minWidth: '180px' }}>
                            {item.primary_button_text || "Learn More"}
                          </Link>
                          {index === 0 && (
                            <Link to="/contact" className="btn btn-dark-teal rounded-pill py-3 px-5 fw-bold shadow-lg" style={{ minWidth: '180px' }}>Our Strength</Link>
                          )}
                        </div>
                      </div>
                    </div>
                    {index === 0 && (
                      <div className="col-lg-5 d-none d-lg-block">
                        <div className="floating-hero-elements position-relative">
                          <div className="bg-white p-3 rounded-4 shadow-sm mb-3 d-flex align-items-center gap-3 animated slideInRight float-slow" style={{ width: '260px', animationDelay: '0.5s' }}>
                            <div className="bg-primary-soft p-2 rounded-circle"><Star size={24} className="text-primary" fill="currentColor" /></div>
                            <div>
                              <h6 className="mb-0 fw-bold" style={{ fontSize: '1rem' }}>Trust & Reliability</h6>
                              <p className="mb-0 text-muted" style={{ fontSize: '0.8rem' }}>Professional Standards</p>
                            </div>
                          </div>
                          <div className="bg-dark p-3 rounded-4 shadow-sm d-flex align-items-center gap-3 animated slideInRight text-white float-slow" style={{ width: '260px', animationDelay: '0.8s', animationDuration: '5s' }}>
                            <div className="bg-success p-2 rounded-circle"><Award size={24} className="text-white" /></div>
                            <div>
                              <h6 className="mb-0 fw-bold text-white" style={{ fontSize: '1rem' }}>Excellence</h6>
                              <p className="mb-0 text-white-50" style={{ fontSize: '0.8rem' }}>#1 Quality Solutions</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="wave-up" style={{ bottom: '-1px' }}></div>
      </div>

      {/* Why Choose Us */}
      <div className="container-xxl py-5 bg-white">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '900px' }}>
            <h6 className="text-primary text-uppercase fw-bold mb-3" style={{ letterSpacing: '2px' }}>{t('why_choose_us')}</h6>
            <h1 className="display-5 mb-4 fw-bold">Together We Rise and Thrive</h1>
            <p className="text-muted fs-5 lh-base px-lg-5">
              {t('why_choose_us_desc')}
            </p>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="circle-card-container">
                <div className="circle-icon-wrapper"><div className="circle-icon-inner bg-dream-soft"><Zap size={30} className="text-dream" /></div></div>
                <div className="circle-card bg-dream">
                  <h5 className="fw-bold text-dream mb-3">Quick Execution</h5>
                  <p className="small mb-0 text-muted px-2">Expertly planned and executed with speed and precision.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="circle-card-container">
                <div className="circle-icon-wrapper"><div className="circle-icon-inner bg-choose-soft"><DollarSign size={30} className="text-choose" /></div></div>
                <div className="circle-card bg-choose">
                  <h5 className="fw-bold text-choose mb-3">Affordable Quality</h5>
                  <p className="small mb-0 text-muted px-2">Premium quality delivery at competitive prices.</p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="circle-card-container">
                <div className="circle-icon-wrapper"><div className="circle-icon-inner bg-values-soft"><Settings2 size={30} className="text-values" /></div></div>
                <div className="circle-card bg-values">
                  <h5 className="fw-bold text-values mb-3">Customized Solutions</h5>
                  <p className="small mb-0 text-muted px-2">Tailored specifically to align with your unique vision.</p>
                </div>
              </div>
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

function ProcessSection() {
  const { t } = useLanguage();
  return (
    <div className="container-xxl py-5 bg-white">
      <div className="container">
        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '800px' }}>
          <h1 className="fw-bold mb-3" style={{ fontSize: '2.5rem' }}>Professional Delivery Process</h1>
          <h2 className="h4 text-dark mb-4">High Standards for Every Program</h2>
          <p className="text-muted px-lg-5">
            We guide our clients through a structured methodology to ensure excellence. Using design thinking and agile coordination, we deliver the perfect experience.
          </p>
        </div>
        <div className="process-wrapper px-lg-5 wow fadeIn" data-wow-delay="0.2s">
          <div className="text-center">
            <img src="/img/process-diagram.png" alt="Process" className="img-fluid rounded-4 shadow-sm" style={{ maxWidth: '100%' }} />
          </div>
        </div>
        <div className="text-center mt-5 wow fadeInUp" data-wow-delay="0.5s">
          <p className="h5 mb-4 fw-bold">Maximize Service Quality with Precise Operations</p>
          <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow">Let's Work Together</Link>
        </div>
      </div>
    </div>
  );
}

function FAQSection() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const faqs = [{ q: t('faq_q1'), a: t('faq_a1') }, { q: t('faq_q2'), a: t('faq_a2') }, { q: t('faq_q3'), a: t('faq_a3') }, { q: t('faq_q4'), a: t('faq_a4') }, { q: t('faq_q5'), a: t('faq_a5') }];
  return (
    <div className="container-xxl py-5 bg-white">
      <div className="container text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
        <h1 className="fw-bold mb-3">{t('faq_title')}</h1>
      </div>
      <div className="mx-auto" style={{ maxWidth: '900px' }}>
        {faqs.map((faq, idx) => (
          <div key={idx} className="border-bottom wow fadeInUp" data-wow-delay={`${0.1 * idx}s`}>
            <button onClick={() => setActiveIndex(activeIndex === idx ? null : idx)} className="w-100 py-4 d-flex align-items-center justify-content-between text-start bg-white border-0">
              <h5 className={`mb-0 fw-bold ${activeIndex === idx ? 'text-primary' : 'text-dark'}`}>{faq.q}</h5>
              <ChevronDown size={20} className={`transition-all ${activeIndex === idx ? 'rotate-180 text-primary' : 'text-muted'}`} />
            </button>
            <div className={`overflow-hidden transition-all duration-300 ${activeIndex === idx ? 'pb-4 opacity-100' : 'max-h-0 opacity-0'}`} style={{ maxHeight: activeIndex === idx ? '300px' : '0' }}>
              <p className="text-muted mb-0 lh-lg">{faq.a}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AppSection() {
  const { t } = useLanguage();
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: any) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - (rect.left + rect.width / 2)) / (rect.width / 2) * 15;
    const y = (e.clientY - (rect.top + rect.height / 2)) / (rect.height / 2) * -15;
    setRotation({ x: y, y: x });
  };
  return (
    <div className="container-xxl py-5 bg-white overflow-hidden">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6 wow fadeInUp" ref={containerRef} onMouseMove={handleMouseMove} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => { setIsHovered(false); setRotation({ x: 0, y: 0 }) }} style={{ perspective: '1000px' }}>
            <div className="position-relative d-flex justify-content-center py-5" style={{ transform: `rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`, transformStyle: 'preserve-3d', transition: 'transform 0.2s' }}>
              <img className="img-fluid rounded-4" src="/img/mobile_app_v2.png" alt="App" style={{ width: '450px', transform: 'translateZ(20px)' }} />
              <div className="position-absolute transition-all duration-500" style={{ top: '15%', right: isHovered ? '-40px' : '0px', opacity: isHovered ? 1 : 0, transform: 'translateZ(50px)' }}>
                <div className="bg-white rounded-3 p-3 shadow-lg d-flex align-items-center gap-2 border border-primary border-opacity-10">
                  <Star size={20} className="text-primary" fill="currentColor" />
                  <div><h6 className="mb-0 small fw-bold">Reviews</h6><div className="text-warning small fw-bold">4.9 Stars ⭐</div></div>
                </div>
              </div>
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

