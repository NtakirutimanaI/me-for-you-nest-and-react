import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { LogIn } from 'lucide-react';
import { toast } from 'sonner';

export function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

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
      {/* Page Header */}
      <div className="container-fluid page-header position-relative mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
          <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">{t('sign_in')}</h1>
          <div className="d-inline-flex text-white">
            <p className="m-0 text-uppercase"><Link className="text-white" to="/">{t('home')}</Link></p>
            <i className="fa fa-angle-double-right pt-1 px-3 text-white"></i>
            <p className="m-0 text-uppercase">{t('sign_in')}</p>
          </div>
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
