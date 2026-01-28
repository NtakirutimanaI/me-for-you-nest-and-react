import { useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { UserPlus } from 'lucide-react';
import { toast } from 'sonner';

export function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const { t } = useLanguage();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }

    if (password.length < 6) {
      toast.error('Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    const success = await register(name, email, password);

    if (success) {
      toast.success('Account created successfully!');
      navigate('/dashboard');
    } else {
      toast.error('Email already exists');
    }

    setLoading(false);
  };

  return (
    <div className="container-fluid bg-white p-0">
      {/* Shorter Premium Hero Header Section */}
      <div className="container-fluid page-header position-relative p-0 mb-5" style={{
        background: 'linear-gradient(rgba(16, 55, 65, 0.7), rgba(16, 55, 65, 0.7)), url("/img/3L7A6367.jpg") center center no-repeat',
        backgroundSize: 'cover',
        minHeight: '280px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        <div className="container py-5 text-center mt-3">
          <h1 className="display-3 text-white fw-bold mb-2 animated slideInDown" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>{t('sign_up')}</h1>
          <nav aria-label="breadcrumb">
            <div className="d-inline-flex align-items-center text-white fs-6 fw-medium animated slideInUp">
              <Link className="text-white hover-opacity-100 transition-all text-decoration-none" to="/">{t('home')}</Link>
              <span className="mx-2 opacity-50">/</span>
              <span className="text-white">{t('sign_up')}</span>
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
            <div className="col-lg-6 col-md-8">
              <div className="bg-light rounded p-5 shadow-sm">
                <div className="text-center mb-4">
                  <div className="bg-primary text-white rounded-circle d-inline-flex align-items-center justify-content-center mb-3" style={{ width: '60px', height: '60px' }}>
                    <UserPlus size={30} />
                  </div>
                  <h2 className="mb-0">Join Me For You</h2>
                  <p className="text-muted">Create an account to start booking our services</p>
                </div>

                <form onSubmit={handleSubmit}>
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-floating">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          placeholder="John Doe"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                        />
                        <label htmlFor="name">{t('full_name')}</label>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-floating">
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
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
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
                    </div>
                    <div className="col-md-6">
                      <div className="form-floating">
                        <input
                          type="password"
                          className="form-control"
                          id="confirmPassword"
                          placeholder="Confirm Password"
                          required
                          value={confirmPassword}
                          onChange={(e) => setConfirmPassword(e.target.value)}
                        />
                        <label htmlFor="confirmPassword">Confirm Password</label>
                      </div>
                    </div>
                    <div className="col-12 mt-4">
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary w-100 py-3 rounded-pill"
                      >
                        {loading ? 'Creating account...' : t('register_btn')}
                      </button>
                    </div>
                  </div>
                </form>

                <div className="text-center mt-4">
                  <p className="mb-0">
                    {t('have_account')}{' '}
                    <Link to="/login" className="text-primary fw-bold">
                      {t('sign_in')}
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
