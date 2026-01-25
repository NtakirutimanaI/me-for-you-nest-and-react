import { Link } from 'react-router';

export function NotFound() {
  return (
    <div className="container-fluid bg-white p-0">
      {/* Page Header */}
      <div className="container-fluid page-header position-relative mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
          <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">404 Error</h1>
          <div className="d-inline-flex text-white">
            <p className="m-0 text-uppercase"><Link className="text-white" to="/">Home</Link></p>
            <i className="fa fa-angle-double-right pt-1 px-3 text-white"></i>
            <p className="m-0 text-uppercase">404</p>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container text-center">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <i className="bi bi-exclamation-triangle display-1 text-primary"></i>
              <h1 className="display-1">404</h1>
              <h1 className="mb-4">Page Not Found</h1>
              <p className="mb-4">We're sorry, the page you have looked for does not exist in our website! Maybe go to our home page or try to use a search?</p>
              <Link className="btn btn-primary rounded-pill py-3 px-5" to="/">Go Back To Home</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

