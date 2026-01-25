import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
      <div className="container-fluid py-5">
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">{t('get_in_touch')}</h3>
            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>KN 667 ST, Gisozi, Kigali-Rwanda</p>
            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+250 788 202 209</p>
            <p className="mb-2"><i className="fa fa-envelope me-3"></i>meforyourwanda@gmail.com</p>
            <div className="d-flex pt-2">
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-twitter"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-facebook-f"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-youtube"></i></a>
              <a className="btn btn-outline-light btn-social" href=""><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">{t('quick_links')}</h3>
            <Link className="btn btn-link text-white-50" to="/about">{t('about')}</Link>
            <Link className="btn btn-link text-white-50" to="/contact">{t('contact')}</Link>
            <Link className="btn btn-link text-white-50" to="/events">{t('programs')}</Link>
            <Link className="btn btn-link text-white-50" to="/privacy">{t('privacy_policy')}</Link>
            <Link className="btn btn-link text-white-50" to="/terms">{t('terms_condition')}</Link>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">{t('photo_gallery')}</h3>
            <div className="row g-2 pt-2">
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-1.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-2.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-3.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-4.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-5.jpg" alt="" />
              </div>
              <div className="col-4">
                <img className="img-fluid rounded bg-light p-1" src="/img/classes-6.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">{t('hints_links')}</h3>
            <p>Provide space for clients to place orders for each service they want.</p>
            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
              <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email" />
              <button type="button" className="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">{t('sign_up')}</button>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="copyright">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
              <Link className="border-bottom" to="/">Me For You</Link>, {t('all_rights_reserved')}
            </div>
            <div className="col-md-6 text-center text-md-end">
              <div className="footer-menu">
                <Link to="/">{t('home')}</Link>
                <Link to="/cookies">Cookies</Link>
                <Link to="/help">Help</Link>
                <Link to="/faq">FQAs</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
