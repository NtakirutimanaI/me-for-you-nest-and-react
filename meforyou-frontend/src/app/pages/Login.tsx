import { useState, useEffect } from 'react';
import { Link, useNavigate, Navigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { LogIn } from 'lucide-react';
import { toast } from 'sonner';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login, isAuthenticated } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const success = await login(email, password);

    if (success) {
      toast.success('Login successful!');
      navigate('/dashboard');
    } else {
      toast.error('Invalid email or password');
    }

    setLoading(false);
  };

  return (
    <div className="container-fluid bg-white p-0">
      {/* Shorter Premium Hero Header Section */}
      <div className="container-fluid page-header position-relative p-0 mb-5" style={{
        background: 'linear-gradient(rgba(16, 55, 65, 0.7), rgba(16, 55, 65, 0.7)), url("/img/3L7A6430.jpg") center center no-repeat',
        backgroundSize: 'cover',
        minHeight: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container py-5 text-center mt-3">
          <h1 className="display-3 text-white fw-bold mb-2 animated slideInDown" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>{t('sign_in')}</h1>
          <nav aria-label="breadcrumb">
            <div className="d-inline-flex align-items-center text-white fs-6 fw-medium animated slideInUp">
              <Link className="text-white hover-opacity-100 transition-all text-decoration-none" to="/">{t('home')}</Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="text-white">{t('sign_in')}</span>
            </div>
          </nav>
        </div>

        {/* Large White Scalloped Wave Border */}
        <div className="position-absolute start-0 bottom-0 w-100 overflow-hidden" style={{ lineHeight: 0, height: '30px' }}>
          <svg viewBox="0 0 120 28" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
            <path d="M0 28 Q 5 0, 10 28 T 20 28 T 30 28 T 40 28 T 50 28 T 60 28 T 70 28 T 80 28 T 90 28 T 100 28 T 110 28 T 120 28 V 28 H 0 Z" fill="white" />
          </svg>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-5 col-md-8">
              <div className="bg-light rounded p-5 shadow-sm">
                <div className="text-center mb-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <LogIn size={30} />
                  </div>
                  <h2 className="mb-0">Welcome Back</h2>
                  <p className="text-muted">Sign in to manage your bookings</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="form-floating mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="name@example.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label htmlFor="email">{t('email')}</label>
                  </div>
                  <div className="form-floating mb-4">
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      placeholder="Password"
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label htmlFor="password">{t('password')}</label>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="btn btn-primary w-100 py-3 rounded-pill mb-4"
                  >
                    {loading ? 'Signing in...' : t('sign_in')}
                  </button>
                </form>

                <div className="text-center pb-3">
                  <p className="mb-0">
                    {t('no_account')}{' '}
                    <Link to="/register" className="text-primary fw-bold">
                      {t('sign_up')}
                    </Link>
                  </p>
                </div>

                <div className="mt-4 p-3 bg-white rounded border border-primary border-opacity-25">
                  <p className="small text-dark fw-bold mb-1">Demo Account:</p>
                  <p className="small text-muted mb-0">Email: admin@meforyou.org</p>
                  <p className="small text-muted mb-0">Password: admin123</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
