import { useState } from 'react';
import { Navigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { User, Mail, Phone, Shield } from 'lucide-react';
import { toast } from 'sonner';

export function ProfilePage() {
  const { user, isAuthenticated, updateProfile } = useAuth();
  const { t } = useLanguage();
  const [name, setName] = useState(user?.name || '');
  const [phone, setPhone] = useState(user?.phone || '');

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const handleUpdate = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name, phone });
    toast.success('Profile updated successfully!');
  };

  return (
    <div className="container-fluid bg-white p-0">
      {/* Page Header */}
      <div className="container-fluid page-header position-relative mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
          <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">{t('profile')}</h1>
          <div className="d-inline-flex text-white">
            <p className="m-0 text-uppercase"><Link className="text-white" to="/">{t('home')}</Link></p>
            <i className="fa fa-angle-double-right pt-1 px-3 text-white"></i>
            <p className="m-0 text-uppercase">{t('profile')}</p>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="bg-light rounded p-5 shadow-sm">
                <div className="d-flex align-items-center gap-4 mb-5">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center" style={{ width: '80px', height: '80px' }}>
                    <User size={40} />
                  </div>
                  <div>
                    <h2 className="mb-1">{user?.name}</h2>
                    <span className="badge bg-primary rounded-pill capitalize px-3">{user?.role} Account</span>
                  </div>
                </div>

                <form onSubmit={handleUpdate}>
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="form-group mb-3">
                        <label className="fw-bold small text-dark mb-2">{t('full_name')}</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0"><User size={18} className="text-primary" /></span>
                          <input
                            type="text"
                            className="form-control border-start-0 ps-0"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label className="fw-bold small text-dark mb-2">{t('email')}</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0"><Mail size={18} className="text-muted" /></span>
                          <input
                            type="email"
                            className="form-control border-start-0 ps-0 bg-light"
                            value={user?.email}
                            disabled
                          />
                        </div>
                        <small className="text-muted">Email cannot be changed</small>
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="form-group mb-3">
                        <label className="fw-bold small text-dark mb-2">{t('phone_number')}</label>
                        <div className="input-group">
                          <span className="input-group-text bg-white border-end-0"><Phone size={18} className="text-primary" /></span>
                          <input
                            type="tel"
                            className="form-control border-start-0 ps-0"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="+250 788 000 000"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <div className="form-group mb-4">
                        <label className="fw-bold small text-dark mb-2">Access Role</label>
                        <div className="input-group">
                          <span className="input-group-text bg-light border-end-0"><Shield size={18} className="text-muted" /></span>
                          <input
                            type="text"
                            className="form-control border-start-0 ps-0 bg-light capitalize"
                            value={user?.role}
                            disabled
                          />
                        </div>
                      </div>
                    </div>

                    <div className="col-12">
                      <button type="submit" className="btn btn-primary w-100 py-3 rounded-pill fw-bold">Update Profile</button>
                    </div>
                  </div>
                </form>

                <div className="mt-5 p-4 bg-white rounded border border-primary border-opacity-10 text-center">
                  <p className="text-muted small mb-0">Account Member since: <strong>{user?.createdAt ? new Date(user.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' }) : 'N/A'}</strong></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
