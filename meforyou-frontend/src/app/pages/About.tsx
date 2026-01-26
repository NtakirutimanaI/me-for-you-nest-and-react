import { useEffect, useState } from 'react';
import { Target, Award, CheckCircle, Shield, Lightbulb, UserCheck, Quote, ArrowRight, LucideIcon } from 'lucide-react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { api } from '../services/api';

interface DynamicValue {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: string;
}

export function AboutPage() {
  const { t } = useLanguage();
  const [coreValues, setCoreValues] = useState<DynamicValue[]>([]);
  const [founder, setFounder] = useState<any>(null);
  const [carouselImages, setCarouselImages] = useState<string[]>([
    "/img/DSC09554.JPG",
    "/img/DSC_7878.jpg",
    "/img/3L7A6430.jpg"
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch Facilities for Core Values
        const facilitiesData = await api.facilities.findAll();
        if (facilitiesData && facilitiesData.length > 0) {
          const mappedValues = facilitiesData.map((f: any, index: number) => {
            let Icon = Shield;
            if (f.title.toLowerCase().includes('dream')) Icon = Lightbulb;
            if (f.title.toLowerCase().includes('choose')) Icon = UserCheck;
            if (f.title.toLowerCase().includes('mission')) Icon = Target;

            return {
              icon: Icon,
              title: f.title,
              description: f.description,
              delay: `${0.1 + index * 0.2}s`
            };
          });
          setCoreValues(mappedValues);
        }

        // Fetch Team for Founder
        const teamData = await api.team.findAll();
        const foundFounder = teamData.find((member: any) =>
          member.role.toLowerCase().includes('founder') || member.name.includes('Papy')
        );
        if (foundFounder) setFounder(foundFounder);

        // Fetch Carousel Items for bottom carousel
        const carouselData = await api.carouselItems.findAll();
        if (carouselData && carouselData.length >= 3) {
          setCarouselImages(carouselData.slice(0, 5).map((item: any) =>
            item.image_url.startsWith('http') ? item.image_url : `/${item.image_url}`
          ));
        }
      } catch (error) {
        console.error("Error fetching dynamic content:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const $ = (window as any).jQuery;
    if ($ && typeof $.fn.owlCarousel === 'function' && carouselImages.length > 0) {
      // Small timeout to ensure DOM is updated after potential state refresh
      const timer = setTimeout(() => {
        $(".about-carousel").trigger('destroy.owl.carousel');
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
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [carouselImages]);

  const fallbackValues = [
    { icon: Shield, title: t('value_professionalism'), description: t('value_professionalism_desc'), delay: '0.1s' },
    { icon: UserCheck, title: t('value_trustworthiness'), description: t('value_trustworthiness_desc'), delay: '0.3s' },
    { icon: Lightbulb, title: t('value_smartness'), description: t('value_smartness_desc'), delay: '0.5s' }
  ];

  const displayValues = coreValues.length > 0 ? coreValues : fallbackValues;

  return (
    <div className="container-fluid bg-white p-0">
      {/* Photo Collage Hero Section */}
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase mb-3" style={{ letterSpacing: '2px' }}>{t('about')}</h6>
              <h1 className="display-4 fw-bold mb-4">{t('hero_title_2')}</h1>
              <p className="fs-5 text-muted mb-4 leading-relaxed">
                {t('hero_desc_2')}
              </p>
              <div className="d-flex flex-wrap gap-4 mb-4">
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-primary rounded-circle p-2">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="fw-bold">{t('events')}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-primary rounded-circle p-2">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="fw-bold">{t('housing')}</span>
                </div>
                <div className="d-flex align-items-center gap-2">
                  <div className="bg-primary rounded-circle p-2">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="fw-bold">{t('transport')}</span>
                </div>
              </div>
              <Link to="/contact" className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow-sm">{t('get_in_touch')}</Link>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="photo-collage-container position-relative" style={{ minHeight: '500px' }}>
                <div
                  className="photo-circle photo-circle-main position-absolute"
                  style={{ width: '320px', height: '320px', top: '0', left: '50%', transform: 'translateX(-50%)', borderRadius: '50%', overflow: 'hidden', border: '6px solid #f8f4f2', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', zIndex: 3 }}
                >
                  <img src="/img/collage-wedding.jpg" alt="Wedding" className="w-100 h-100 object-fit-cover" />
                </div>
                <div
                  className="photo-circle photo-circle-left position-absolute"
                  style={{ width: '220px', height: '220px', bottom: '20px', left: '10%', borderRadius: '50%', overflow: 'hidden', border: '5px solid #f8f4f2', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', zIndex: 2 }}
                >
                  <img src="/img/collage-people.png" alt="People" className="w-100 h-100 object-fit-cover" />
                </div>
                <div
                  className="photo-circle photo-circle-right position-absolute"
                  style={{ width: '220px', height: '220px', bottom: '20px', right: '10%', borderRadius: '50%', overflow: 'hidden', border: '5px solid #f8f4f2', boxShadow: '0 10px 40px rgba(0,0,0,0.1)', zIndex: 2 }}
                >
                  <img src="/img/collage-serving.jpg" alt="Service" className="w-100 h-100 object-fit-cover" />
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
                  <img
                    src={founder ? (founder.image_url.startsWith('http') ? founder.image_url : `/${founder.image_url}`) : "/img/founder.jpg"}
                    className="rounded-circle shadow-sm border border-3 border-white"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                    alt={founder?.name || "Founder"}
                  />
                  <div>
                    <h4 className="mb-0 text-primary fw-bold text-uppercase">{founder?.name || t('founder_full_name')}</h4>
                    <small className="text-muted fw-bold">{founder?.role || "Founder & CEO, Me For You Advisory"}</small>
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
            <h1 className="mb-3 display-5 fw-bold">{t('why_choose_us')}</h1>
            <p className="text-muted">{t('why_choose_us_desc')}</p>
          </div>
          <div className="row g-4 justify-content-center">
            {displayValues.map((v, i) => (
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
                {carouselImages.map((img, index) => (
                  <img key={index} className="img-fluid w-100" src={img} alt="" style={{ objectFit: 'cover', height: '450px' }} />
                ))}
              </div>
            </div>
            <div className="col-lg-7 wow fadeInUp" data-wow-delay="0.3s">
              <h1 className="display-5 fw-bold mb-4">{t('about_cta_title')}</h1>
              <p className="fs-5 text-muted mb-4 leading-relaxed">
                {t('background_desc')}
              </p>
              <div className="d-flex gap-3">
                <Link to="/more" className="btn btn-primary rounded-pill py-3 px-5 fw-bold shadow-sm d-inline-flex align-items-center gap-2">
                  {t('learn_more_about_us')} <ArrowRight size={20} />
                </Link>
                <Link to="/contact" className="btn btn-outline-primary rounded-pill py-3 px-5 fw-bold shadow-sm">
                  {t('contact')}
                </Link>
              </div>
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

