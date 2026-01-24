import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path ? 'active' : '';

  return (
    <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top px-4 px-lg-5 py-lg-0">
      <Link to="/" className="navbar-brand">
        <h1 className="m-0 text-primary d-flex align-items-center">
          <img src="/img/logo.jpg" alt="Logo" className="logo-img me-2" style={{ height: '30px', width: 'auto', objectFit: 'contain' }} />
          Me For You
        </h1>
      </Link>
      <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto">
          <Link to="/" className={`nav-item nav-link ${isActive('/')}`}>Home</Link>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">About Us</a>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
              <Link to="/aboutus" className="dropdown-item">Who We Are?</Link>
              <Link to="/team" className="dropdown-item">Team</Link>
              <Link to="/partners" className="dropdown-item">Partners</Link>
            </div>
          </div>
          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Programs</a>
            <div className="dropdown-menu rounded-0 rounded-bottom border-0 shadow-sm m-0">
              <Link to="/events" className="dropdown-item">Me For You Events</Link>
              <Link to="/housing" className="dropdown-item">Me For You Housing</Link>
              <Link to="/transport" className="dropdown-item">Me For You Transport</Link>
            </div>
          </div>
          <Link to="/testimonials" className={`nav-item nav-link ${isActive('/testimonials')}`}>Testimonials</Link>
          <Link to="/contact" className={`nav-item nav-link ${isActive('/contact')}`}>Contact Us</Link>
        </div>
        <Link to="/join" className="btn btn-primary rounded-pill px-3 d-none d-lg-block">
          Join Us<i className="fa fa-arrow-right ms-3"></i>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
