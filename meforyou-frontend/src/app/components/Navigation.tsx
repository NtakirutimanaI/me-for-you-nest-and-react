import { Link, useLocation } from 'react-router';
import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import {
  Globe, ChevronDown, ArrowRight, Info, Users, Heart, Award,
  Phone, HelpCircle, Calendar, Home as HomeIcon, Car, Map,
  User, Layout, ShoppingBag, LogOut, Shield
} from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();
  const location = useLocation();
  const { user, isAuthenticated, logout } = useAuth();

  const isActive = (path: string) => location.pathname === path;

  // Exact Brand Colors
  const coralColor = '#FE5D37';
  const darkColor = '#103741';
  const lightCoral = '#FFF5F3';

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top shadow-sm" style={{ top: '0', zIndex: 1200, minHeight: '85px', display: 'flex', alignItems: 'center' }}>
      <div className="container-fluid px-4 px-lg-5 d-flex align-items-center justify-content-between w-100">

        {/* BRAND LOGO */}
        <Link to="/" className="navbar-brand d-flex align-items-center text-decoration-none">
          <img src="/img/logo.jpg" alt="Logo" style={{ height: '38px', width: 'auto', marginRight: '10px' }} />
          <span style={{ color: coralColor, fontWeight: 800, fontSize: '32px', letterSpacing: '-0.5px' }}>
            Me For You
          </span>
        </Link>

        {/* MOBILE TOGGLER */}
        <button
          className="navbar-toggler border-0 shadow-none d-lg-none"
          type="button"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* NAVIGATION CONTENT */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`} id="navbarCollapse" style={{ flexGrow: 1 }}>
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link to="/" className={`nav-link fw-bold px-3 ${isActive('/') ? 'active' : ''}`}>
                {t('home')}
              </Link>
            </li>

            {/* ABOUT US - MEGA MENU */}
            <li className="nav-item dropdown dropdown-mega">
              <a href="#" className="nav-link dropdown-toggle fw-bold d-flex align-items-center gap-1" style={{ color: darkColor }}>
                {t('about')} <ChevronDown size={14} strokeWidth={3} />
              </a>
              <div className="dropdown-menu mega-menu-box border-0 shadow-lg p-4">
                <div className="row g-4 m-0" style={{ width: '100%' }}>
                  <div className="col-lg-4 border-end">
                    <h6 className="mega-title">{t('who_we_are')}</h6>
                    <Link to="/about" className="mega-item d-flex align-items-start gap-3">
                      <div className="mega-icon"><Info size={20} /></div>
                      <div>
                        <div className="mega-item-name">{t('our_story')}</div>
                        <div className="mega-item-text">Our mission and journey in Rwanda.</div>
                      </div>
                    </Link>
                    <Link to="/team" className="mega-item d-flex align-items-start gap-3 mt-3">
                      <div className="mega-icon"><Users size={20} /></div>
                      <div>
                        <div className="mega-item-name">{t('our_team')}</div>
                        <div className="mega-item-text">Meet the people who make it happen.</div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-lg-4 border-end">
                    <h6 className="mega-title">{t('our_network')}</h6>
                    <Link to="/partners" className="mega-item d-flex align-items-start gap-3">
                      <div className="mega-icon"><Heart size={20} /></div>
                      <div>
                        <div className="mega-item-name">{t('partners')}</div>
                        <div className="mega-item-text">Our trusted community and partners.</div>
                      </div>
                    </Link>
                    <Link to="/donation" className="mega-item d-flex align-items-start gap-3 mt-3">
                      <div className="mega-icon"><Award size={20} /></div>
                      <div>
                        <div className="mega-item-name">{t('social_impact')}</div>
                        <div className="mega-item-text">Giving back to our community in Kigali.</div>
                      </div>
                    </Link>
                  </div>

                  <div className="col-lg-4">
                    <h6 className="mega-title">{t('support')}</h6>
                    <Link to="/contact" className="mega-item d-flex align-items-start gap-3">
                      <div className="mega-icon"><Phone size={20} /></div>
                      <div>
                        <div className="mega-item-name">{t('contact')}</div>
                        <div className="mega-item-text">Get in touch with our office in Gisozi.</div>
                      </div>
                    </Link>
                    <Link to="/faq" className="mega-item d-flex align-items-start gap-3 mt-3">
                      <div className="mega-icon"><HelpCircle size={20} /></div>
                      <div>
                        <div className="mega-item-name">{t('help_center')}</div>
                        <div className="mega-item-text">FAQ and support resources.</div>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </li>

            {/* PROGRAMS - MEGA MENU */}
            <li className="nav-item dropdown dropdown-mega">
              <a href="#" className="nav-link dropdown-toggle fw-bold d-flex align-items-center gap-1" style={{ color: darkColor }}>
                {t('programs')} <ChevronDown size={14} strokeWidth={3} />
              </a>
              <div className="dropdown-menu mega-menu-box border-0 shadow-lg p-0 overflow-hidden">
                <div className="row g-0 m-0" style={{ width: '100%', minHeight: '400px' }}>
                  <div className="col-lg-8 p-5 bg-white">
                    <h6 className="mega-title text-muted mb-4 pb-2 border-bottom">{t('core_services')}</h6>
                    <div className="row g-4">
                      <div className="col-md-6">
                        <Link to="/events" className="mega-item d-flex align-items-start gap-3">
                          <div className="mega-icon-simple"><Calendar size={22} /></div>
                          <div>
                            <div className="mega-item-name">{t('events')}</div>
                            <div className="mega-item-text">Professional planning for weddings and corporate gatherings.</div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <Link to="/house-rental" className="mega-item d-flex align-items-start gap-3">
                          <div className="mega-icon-simple"><HomeIcon size={22} /></div>
                          <div>
                            <div className="mega-item-name">{t('housing')}</div>
                            <div className="mega-item-text">Residential solutions for short and long-term stays.</div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <Link to="/car-rental" className="mega-item d-flex align-items-start gap-3">
                          <div className="mega-icon-simple"><Car size={22} /></div>
                          <div>
                            <div className="mega-item-name">{t('transport')}</div>
                            <div className="mega-item-text">Premium vehicle rentals with chauffeur options.</div>
                          </div>
                        </Link>
                      </div>
                      <div className="col-md-6">
                        <Link to="/about" className="mega-item d-flex align-items-start gap-3">
                          <div className="mega-icon-simple"><Map size={22} /></div>
                          <div>
                            <div className="mega-item-name">{t('cultural')}</div>
                            <div className="mega-item-text">Explore authentic traditions and beauty of Rwanda.</div>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-4 p-5" style={{ backgroundColor: '#F9FAFB', borderLeft: '1px solid #EEE' }}>
                    <h6 className="mega-title text-muted mb-4 pb-2 border-bottom">{t('highlights')}</h6>
                    <div className="featured-item mb-4">
                      <div className="d-flex gap-3 align-items-center mb-2">
                        <img src="/img/Pic8.jpg" alt="Featured" style={{ width: '70px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                        <div>
                          <span className="badge mb-1" style={{ backgroundColor: lightCoral, color: coralColor, fontSize: '10px' }}>{t('upcoming')}</span>
                          <div className="fw-bold small" style={{ color: darkColor, lineHeight: '1.2' }}>Kigali Wedding Expo</div>
                        </div>
                      </div>
                    </div>
                    <div className="featured-item">
                      <div className="d-flex gap-3 align-items-center mb-2">
                        <img src="/img/Pic7.jpg" alt="Featured" style={{ width: '70px', height: '50px', borderRadius: '8px', objectFit: 'cover' }} />
                        <div>
                          <span className="badge mb-1" style={{ backgroundColor: '#E0F2FE', color: '#0284C7', fontSize: '10px' }}>{t('new')}</span>
                          <div className="fw-bold small" style={{ color: darkColor, lineHeight: '1.2' }}>Luxury SUV Fleet</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="nav-item">
              <a href="/#testimonials" className="nav-link fw-bold px-3">{t('testimonials')}</a>
            </li>

            <li className="nav-item">
              <Link to="/contact" className={`nav-link fw-bold px-3 ${isActive('/contact') ? 'active' : ''}`}>
                {t('contact')}
              </Link>
            </li>
          </ul>

          {/* ACTION BUTTONS */}
          <div className="d-flex align-items-center gap-3">
            <div className="dropdown">
              <button className="btn-currency" type="button" data-bs-toggle="dropdown">
                <Globe size={18} style={{ color: coralColor }} />
                <span className="fw-bold">{language}</span>
                <ChevronDown size={12} strokeWidth={3} />
              </button>
              <ul className="dropdown-menu dropdown-menu-end border-0 shadow-sm">
                <li><button onClick={() => setLanguage('EN')} className="dropdown-item small fw-bold">English</button></li>
                <li><button onClick={() => setLanguage('KN')} className="dropdown-item small fw-bold">Kinyarwanda</button></li>
                <li><button onClick={() => setLanguage('SW')} className="dropdown-item small fw-bold">Swahili</button></li>
                <li><button onClick={() => setLanguage('FR')} className="dropdown-item small fw-bold">French</button></li>
              </ul>
            </div>

            {isAuthenticated ? (
              <div className="dropdown">
                <button className="btn-account shadow-sm" data-bs-toggle="dropdown">
                  <div className="account-avatar">
                    {user?.role === 'admin' ? <Shield size={16} /> : user?.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="account-info d-none d-md-block">
                    <span className="account-name">{user?.name.split(' ')[0]}</span>
                    <span className="account-role">{user?.role}</span>
                  </div>
                  <ChevronDown size={14} strokeWidth={3} className="ms-1" />
                </button>
                <ul className="dropdown-menu dropdown-menu-end border-0 shadow-lg mt-2 p-2" style={{ minWidth: '240px', borderRadius: '15px' }}>
                  <li className="p-3 mb-2 border-bottom d-md-none text-center">
                    <h6 className="mb-0 fw-bold">{user?.name}</h6>
                    <small className="text-primary fw-bold text-uppercase">{user?.role}</small>
                  </li>
                  <li>
                    <Link to="/dashboard" className="dropdown-item py-2 px-3 rounded-pill mb-1 d-flex align-items-center gap-3">
                      <Layout size={18} className="text-primary" />
                      <span className="fw-bold small">{t('control_dashboard')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/bookings" className="dropdown-item py-2 px-3 rounded-pill mb-1 d-flex align-items-center gap-3">
                      <ShoppingBag size={18} className="text-primary" />
                      <span className="fw-bold small">{t('manage_bookings')}</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/profile" className="dropdown-item py-2 px-3 rounded-pill mb-1 d-flex align-items-center gap-3">
                      <User size={18} className="text-primary" />
                      <span className="fw-bold small">{t('account_settings')}</span>
                    </Link>
                  </li>
                  <li><hr className="dropdown-divider opacity-50" /></li>
                  <li>
                    <button onClick={logout} className="dropdown-item py-2 px-3 rounded-pill text-danger d-flex align-items-center gap-3">
                      <LogOut size={18} />
                      <span className="fw-bold small">{t('sign_out')}</span>
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to="/login" className="btn-join shadow-sm text-decoration-none d-flex align-items-center gap-2">
                <span className="fw-bold">Join Us</span>
                <ArrowRight size={18} strokeWidth={3} />
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="scallop-down"></div>

      <style>{`
          .navbar-nav .nav-link { color: #555 !important; font-size: 16px; padding: 30px 15px !important; transition: 0.3s; }
          .navbar-nav .nav-link:hover, .navbar-nav .nav-link.active { color: ${coralColor} !important; }

          /* MEGA MENU SHARED */
          .dropdown-mega { position: static !important; }
          .mega-menu-box {
            position: absolute; width: 95vw; max-width: 1100px; left: 50% !important; transform: translateX(-50%) !important;
            top: 100%; border-radius: 0 0 20px 20px !important; background: white;
            visibility: hidden; opacity: 0; transition: 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            display: block !important; box-shadow: 0 30px 60px rgba(0,0,0,0.15) !important;
            border: 1px solid #eee !important; z-index: 1000;
          }
          .dropdown-mega:hover .mega-menu-box { visibility: visible; opacity: 1; transform: translateX(-50%) translateY(0) !important; }
          
          .mega-title { font-weight: 800; color: ${darkColor}; margin-bottom: 20px; font-size: 14px; text-transform: uppercase; letter-spacing: 1px; }
          
          .mega-item { 
            padding: 12px; border-radius: 12px; transition: 0.3s; 
            text-decoration: none !important; color: inherit !important;
          }
          .mega-item:hover { background: ${lightCoral}; transform: translateY(-3px); }
          .mega-icon { color: ${coralColor}; background: white; padding: 10px; border-radius: 10px; box-shadow: 0 4px 10px rgba(0,0,0,0.05); }
          .mega-icon-simple { color: ${coralColor}; }
          .mega-item-name { font-weight: 700; font-size: 14px; color: ${darkColor}; }
          .mega-item-text { font-size: 12px; color: #666; }

          .btn-currency { background: ${lightCoral}; border: none; border-radius: 50px; padding: 8px 16px; display: flex; align-items: center; gap: 8px; height: 42px; transition: 0.3s; }
          
          .btn-account { 
            background: #fff; border: 1px solid #eee; border-radius: 50px; padding: 5px 15px 5px 5px; 
            display: flex; align-items: center; gap: 10px; height: 48px; transition: 0.3s; 
          }
          .btn-account:hover { border-color: ${coralColor}; background: ${lightCoral}; }
          
          .account-avatar { 
            width: 38px; height: 38px; background: ${coralColor}; color: white; border-radius: 50%; 
            display: flex; align-items: center; justify-content: center; font-weight: 800; font-size: 14px;
          }
          .account-info { display: flex; flex-direction: column; align-items: flex-start; line-height: 1.1; }
          .account-name { font-weight: 800; font-size: 14px; color: ${darkColor}; }
          .account-role { font-size: 10px; font-weight: 700; text-transform: uppercase; color: ${coralColor}; letter-spacing: 0.5px; }

          .btn-join { background: ${coralColor}; color: white !important; border-radius: 50px; padding: 8px 25px; display: flex; align-items: center; gap: 10px; height: 44px; transition: 0.3s; }
          .btn-join:hover { background: #e54d2a; transform: translateY(-2px); box-shadow: 0 5px 15px rgba(254, 93, 55, 0.3); }

          .dropdown-toggle::after { display: none !important; }

          @media (max-width: 991.98px) {
            .mega-menu-box { position: relative !important; width: 100%; transform: none !important; left: 0 !important; visibility: visible !important; opacity: 1 !important; display: none !important; }
            .dropdown-mega.show .mega-menu-box { display: block !important; }
            .navbar-collapse { padding: 20px; background: white; border-radius: 15px; margin-top: 10px; box-shadow: 0 10px 30px rgba(0,0,0,0.1); }
          }
        `}</style>

    </nav>
  );
}
