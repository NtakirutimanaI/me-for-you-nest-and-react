import { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { api } from '../services/api';
import { useLanguage } from '../context/LanguageContext';
import {
  Calendar, Car, Home, DollarSign, Users, Package,
  TrendingUp, Clock, CheckCircle, XCircle, Settings2, Plus, Layout,
  MessageSquare, Image as ImageIcon
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
    const fetchDashboardData = async () => {
      try {
        const [eventData, carData, propData] = await Promise.all([
          api.events.findAll(),
          api.cars.findAllRentals(),
          api.properties.findAllLeases()
        ]);

        // Unify into Booking interface for display
        const unified: Booking[] = [
          ...eventData.map((e: any) => ({
            id: e.event_id.toString(),
            userId: e.client?.user_id,
            userName: `${e.client?.first_name || ''} ${e.client?.last_name || ''}`.trim() || 'Guest',
            serviceType: 'events',
            startDate: e.event_date || e.start_date,
            totalAmount: parseFloat(e.budget || 0),
            status: e.event_status || 'pending',
            paymentStatus: 'pending',
            createdAt: e.created_at
          })),
          ...carData.map((r: any) => ({
            id: r.rental_id.toString(),
            userId: r.client?.user_id,
            userName: r.client?.username || 'Client',
            serviceType: 'car-rental',
            startDate: r.start_date,
            totalAmount: parseFloat(r.total_cost || 0),
            status: r.status || 'pending',
            paymentStatus: 'pending',
            createdAt: r.created_at
          })),
          ...propData.map((l: any) => ({
            id: l.lease_id.toString(),
            userId: l.tenant?.user_id,
            userName: l.tenant?.username || 'Tenant',
            serviceType: 'house-rental',
            startDate: l.start_date,
            totalAmount: parseFloat(l.monthly_rent || 0),
            status: l.lease_status === 'active' ? 'confirmed' : 'pending',
            paymentStatus: 'pending',
            createdAt: l.created_at
          }))
        ];

        setAllBookings(unified);

        if (user?.role === 'client') {
          setBookings(unified.filter(b => b.userId?.toString() === user.id.toString()));
        } else {
          setBookings(unified);
        }

        if (user?.role === 'admin' || user?.role === 'manager') {
          const userData = await api.auth.findAll();
          setUsers(userData.map((u: any) => ({
            id: u.user_id,
            name: `${u.first_name || ''} ${u.last_name || ''}`.trim() || u.username,
            email: u.email,
            role: u.user_type,
          })));
        }
      } catch (error) {
        console.error("Dashboard fetch failed:", error);
      }
    };

    if (user) {
      fetchDashboardData();
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
    <div className="container-fluid bg-light p-0 min-h-screen position-relative overflow-hidden">
      {(user?.role === 'admin' || user?.role === 'manager') && (
        <div className="admin-sidebar-hover-zone">
          <div className="admin-sidebar shadow-lg">
            <div className="sidebar-header p-4 border-bottom">
              <h5 className="mb-0 fw-bold text-primary">MITS ADMIN</h5>
              <small className="text-muted">Management Hub</small>
            </div>
            <div className="sidebar-links p-3">
              <div className="sidebar-category mt-2 mb-2 px-3">
                <small className="text-muted fw-bold">MAIN</small>
              </div>
              <Link to="/dashboard" className="sidebar-link active">
                <Layout size={18} />
                <span>Overview</span>
              </Link>
              <Link to="/bookings" className="sidebar-link text-decoration-none">
                <Package size={18} />
                <span>Manage Bookings</span>
              </Link>

              <div className="sidebar-category mt-4 mb-2 px-3">
                <small className="text-muted fw-bold">SERVICES</small>
              </div>
              <Link to="/content-manager?tab=services" className="sidebar-link text-decoration-none">
                <Package size={18} />
                <span>Events & Core</span>
              </Link>
              <Link to="/content-manager?tab=cars" className="sidebar-link text-decoration-none">
                <Car size={18} />
                <span>Car Fleet</span>
              </Link>
              <Link to="/content-manager?tab=properties" className="sidebar-link text-decoration-none">
                <Home size={18} />
                <span>Properties</span>
              </Link>

              <div className="sidebar-category mt-4 mb-2 px-3">
                <small className="text-muted fw-bold">CONTENT</small>
              </div>
              <Link to="/content-manager?tab=team" className="sidebar-link text-decoration-none">
                <Users size={18} />
                <span>Team Members</span>
              </Link>
              <Link to="/content-manager?tab=partners" className="sidebar-link text-decoration-none">
                <Users size={18} />
                <span>Partners List</span>
              </Link>
              <Link to="/content-manager?tab=testimonials" className="sidebar-link text-decoration-none">
                <MessageSquare size={18} />
                <span>Testimonials</span>
              </Link>
              <Link to="/content-manager?tab=carousel" className="sidebar-link text-decoration-none">
                <ImageIcon size={18} />
                <span>Carousel Items</span>
              </Link>

              <div className="sidebar-category mt-4 mb-2 px-3">
                <small className="text-muted fw-bold">SYSTEM</small>
              </div>
              <Link to="/profile" className="sidebar-link text-decoration-none">
                <Settings2 size={18} />
                <span>Platform Settings</span>
              </Link>

              <div className="mt-4 pt-4 px-3 border-top">
                <div className="p-3 bg-primary-soft rounded-4 text-center">
                  <h6 className="small fw-bold mb-1">Platform Status</h6>
                  <div className="d-flex align-items-center justify-content-center gap-1">
                    <div className="rounded-circle bg-success" style={{ width: '6px', height: '6px' }}></div>
                    <span className="small text-success fw-bold">Online</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

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
                <div className="list-group list-group-flush mb-4">
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
                    <h5 className="mb-3">Admin Controls</h5>
                    <Link to="/content-manager" className="list-group-item list-group-item-action border-0 px-0 d-flex align-items-center mb-3 bg-primary text-white rounded-4 p-3 shadow-sm hover-lift">
                      <div className="rounded-circle bg-white text-primary p-2 me-3">
                        <Settings2 size={20} />
                      </div>
                      <div className="flex-grow-1">
                        <h6 className="mb-0 text-white">Manage Content</h6>
                        <small className="text-white-50">Team, Services, FAQ & More</small>
                      </div>
                      <Link to="/content-manager" className="text-white ms-auto font-bold d-flex align-items-center justify-content-center bg-white rounded-circle" style={{ width: '32px', height: '32px' }}>
                        <Plus size={20} color="#FE5D37" />
                      </Link>
                    </Link>
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
      <style>{`
        .hover-lift:hover { transform: translateY(-3px); box-shadow: 0 5px 15px rgba(0,0,0,0.1) !important; }
        .bg-primary-soft { background-color: rgba(254, 93, 55, 0.1); }
        .bg-success-soft { background-color: rgba(25, 135, 84, 0.1); }
        .bg-info-soft { background-color: rgba(13, 202, 240, 0.1); }

        /* Admin Sidebar Styles */
        .admin-sidebar-hover-zone {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          width: 80px;
          z-index: 2000;
          transition: width 0.3s ease;
        }

        .admin-sidebar {
          position: fixed;
          left: -280px;
          top: 0;
          height: 100vh;
          width: 280px;
          background: white;
          z-index: 2001;
          transition: left 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .admin-sidebar-hover-zone:hover .admin-sidebar {
          left: 0;
        }

        .sidebar-link {
          display: flex;
          align-items: center;
          gap: 15px;
          padding: 12px 20px;
          border-radius: 12px;
          color: #555;
          text-decoration: none;
          font-weight: 500;
          transition: all 0.2s;
          margin-bottom: 5px;
        }

        .sidebar-link:hover {
          background: var(--primary-soft);
          color: var(--primary);
          transform: translateX(5px);
        }

        .sidebar-link.active {
          background: var(--primary);
          color: white;
        }

        /* Hover Hint */
        .admin-sidebar-hover-zone::after {
          content: 'ADMIN';
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%) rotate(-90deg);
          font-weight: 900;
          font-size: 10px;
          letter-spacing: 2px;
          color: var(--primary);
          opacity: 0.5;
          transition: opacity 0.3s;
        }
        .admin-sidebar-hover-zone:hover::after {
          opacity: 0;
        }
      `}</style>
    </div >
  );
}
