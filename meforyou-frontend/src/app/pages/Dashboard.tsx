import { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import {
  Calendar, Car, Home, DollarSign, Users, Package,
  TrendingUp, Clock, CheckCircle, XCircle
} from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import type { Booking, User } from '../types';

export function DashboardPage() {
  const { user, isAuthenticated } = useAuth();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [allBookings, setAllBookings] = useState<Booking[]>([]);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    if (user) {
      const allBookingsData = JSON.parse(localStorage.getItem('bookings') || '[]');
      setAllBookings(allBookingsData);

      if (user.role === 'client') {
        setBookings(allBookingsData.filter((b: Booking) => b.userId === user.id));
      } else {
        setBookings(allBookingsData);
      }

      if (user.role === 'admin' || user.role === 'manager') {
        setUsers(JSON.parse(localStorage.getItem('users') || '[]'));
      }
    }
  }, [user]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const stats = {
    totalBookings: user?.role === 'client'
      ? bookings.length
      : allBookings.length,
    pendingBookings: bookings.filter(b => b.status === 'pending').length,
    confirmedBookings: bookings.filter(b => b.status === 'confirmed').length,
    totalRevenue: user?.role !== 'client'
      ? allBookings.reduce((sum, b) => sum + (b.paymentStatus === 'paid' ? b.totalAmount : 0), 0)
      : bookings.reduce((sum, b) => sum + b.totalAmount, 0),
  };

  return (
    <div className="container-fluid bg-light p-0 min-h-screen">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div>
              <h1 className="mb-1">{t('dashboard')}</h1>
              <p className="text-muted mb-0">Welcome back, <strong className="text-primary">{user?.name}</strong> ({user?.role})</p>
            </div>
            <div className="d-flex gap-2">
              <Link to="/bookings" className="btn btn-outline-primary rounded-pill px-4">{t('bookings')}</Link>
              <Link to="/profile" className="btn btn-primary rounded-pill px-4">{t('profile')}</Link>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="row g-4 mb-5">
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-white rounded p-4 h-100 shadow-sm border-start border-5 border-primary">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <Package className="text-primary" />
                  </div>
                  <div className="text-end">
                    <p className="text-muted mb-1 small uppercase fw-bold">{t('total_bookings')}</p>
                    <h2 className="mb-0">{stats.totalBookings}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.2s">
              <div className="bg-white rounded p-4 h-100 shadow-sm border-start border-5 border-warning">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <Clock className="text-warning" />
                  </div>
                  <div className="text-end">
                    <p className="text-muted mb-1 small uppercase fw-bold">{t('pending')}</p>
                    <h2 className="mb-0">{stats.pendingBookings}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-white rounded p-4 h-100 shadow-sm border-start border-5 border-success">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <CheckCircle className="text-success" />
                  </div>
                  <div className="text-end">
                    <p className="text-muted mb-1 small uppercase fw-bold">{t('confirmed')}</p>
                    <h2 className="mb-0">{stats.confirmedBookings}</h2>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.4s">
              <div className="bg-white rounded p-4 h-100 shadow-sm border-start border-5 border-info">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="bg-light rounded-circle d-flex align-items-center justify-content-center" style={{ width: '50px', height: '50px' }}>
                    <DollarSign className="text-info" />
                  </div>
                  <div className="text-end">
                    <p className="text-muted mb-1 small uppercase fw-bold">
                      {user?.role === 'client' ? t('total_spent') : t('revenue')}
                    </p>
                    <h2 className="mb-0">{formatPrice(stats.totalRevenue)}</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="row g-4">
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <div className="bg-white rounded p-4 shadow-sm h-100">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <h4 className="mb-0">{t('recent_activity')}</h4>
                  <Link to="/bookings" className="btn btn-link text-primary p-0">{t('view_all')}</Link>
                </div>
                {bookings.length === 0 ? (
                  <div className="text-center py-5">
                    <Package size={48} className="text-muted mb-3 opacity-25" />
                    <p className="text-muted">{t('no_bookings')}</p>
                    <Link to="/events" className="btn btn-primary rounded-pill mt-2">{t('book_first')}</Link>
                  </div>
                ) : (
                  <div className="table-responsive">
                    <table className="table table-hover align-middle">
                      <thead className="table-light">
                        <tr>
                          <th className="border-0">{t('id')}</th>
                          <th className="border-0">{t('service')}</th>
                          <th className="border-0">{t('date')}</th>
                          <th className="border-0">{t('amount')}</th>
                          <th className="border-0">{t('status')}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {bookings.slice(0, 5).map((booking) => (
                          <tr key={booking.id}>
                            <td className="small fw-bold text-muted">#{booking.id.slice(-6)}</td>
                            <td>
                              <div className="d-flex align-items-center">
                                <div className="bg-light rounded p-2 me-3">
                                  {booking.serviceType === 'events' && <Calendar size={16} className="text-primary" />}
                                  {booking.serviceType === 'car-rental' && <Car size={16} className="text-primary" />}
                                  {booking.serviceType === 'house-rental' && <Home size={16} className="text-primary" />}
                                </div>
                                <span className="capitalize">{booking.serviceType.replace('-', ' ')}</span>
                              </div>
                            </td>
                            <td>{new Date(booking.startDate).toLocaleDateString()}</td>
                            <td className="fw-bold">{formatPrice(booking.totalAmount)}</td>
                            <td>
                              <span
                                className={`badge rounded-pill px-3 py-2 ${booking.status === 'confirmed' ? 'bg-success' :
                                  booking.status === 'pending' ? 'bg-warning text-dark' :
                                    booking.status === 'completed' ? 'bg-info' : 'bg-danger'
                                  }`}
                              >
                                {t(booking.status)}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>

            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-white rounded p-4 shadow-sm h-100">
                <h4 className="mb-4">{t('quick_actions')}</h4>
                <div className="list-group list-group-flush">
                  <Link to="/events" className="list-group-item list-group-item-action border-0 px-0 d-flex align-items-center mb-2">
                    <div className="rounded-circle bg-primary-soft text-primary p-3 me-3">
                      <Calendar size={20} />
                    </div>
                    <div>
                      <h6 className="mb-0">{t('plan_event')}</h6>
                      <small className="text-muted">Start planning your next big day</small>
                    </div>
                  </Link>
                  <Link to="/car-rental" className="list-group-item list-group-item-action border-0 px-0 d-flex align-items-center mb-2">
                    <div className="rounded-circle bg-success-soft text-success p-3 me-3">
                      <Car size={20} />
                    </div>
                    <div>
                      <h6 className="mb-0">{t('rent_vehicle')}</h6>
                      <small className="text-muted">Explore our fleet for your trips</small>
                    </div>
                  </Link>
                  <Link to="/house-rental" className="list-group-item list-group-item-action border-0 px-0 d-flex align-items-center">
                    <div className="rounded-circle bg-info-soft text-info p-3 me-3">
                      <Home size={20} />
                    </div>
                    <div>
                      <h6 className="mb-0">{t('find_house')}</h6>
                      <small className="text-muted">Browse exclusive accommodations</small>
                    </div>
                  </Link>
                </div>

                {(user?.role === 'admin' || user?.role === 'manager') && (
                  <div className="mt-4 pt-4 border-top">
                    <h5 className="mb-3">Admin Overviews</h5>
                    <div className="p-3 bg-light rounded shadow-sm">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="small text-muted">Total Users</span>
                        <span className="fw-bold">{users.length}</span>
                      </div>
                      <div className="progress" style={{ height: '4px' }}>
                        <div className="progress-bar bg-primary" style={{ width: '100%' }}></div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
