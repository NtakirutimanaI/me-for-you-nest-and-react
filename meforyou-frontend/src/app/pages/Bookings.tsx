import { useEffect, useState } from 'react';
import { Navigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { Package, Calendar, Car, Home as HomeIcon } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import { useLanguage } from '../context/LanguageContext';
import type { Booking } from '../types';
import { toast } from 'sonner';
import { api } from '../services/api';

export function BookingsPage() {
  const { user, isAuthenticated } = useAuth();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const [bookings, setBookings] = useState<Booking[]>([]);
  const [filter, setFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBookings = async () => {
      if (!user) return;
      setLoading(true);
      try {
        const [events, leases, rentals] = await Promise.all([
          api.events.findAll(),
          api.properties.findAllLeases(),
          api.cars.findAllRentals()
        ]);

        const mappedEvents = (events || []).map((e: any) => ({
          id: `event-${e.event_id}`,
          userId: e.client?.user_id,
          userName: e.client?.username,
          serviceType: 'events',
          startDate: e.event_date,
          endDate: e.event_date,
          totalAmount: e.budget, // or price, verifying field
          status: e.status || 'pending',
          paymentStatus: 'pending', // TODO: check invoice
          createdAt: e.created_at,
        }));

        const mappedLeases = (leases || []).map((l: any) => ({
          id: `lease-${l.lease_id}`,
          userId: l.tenant?.user_id,
          userName: l.tenant?.username,
          serviceType: 'house-rental',
          startDate: l.start_date,
          endDate: l.end_date,
          totalAmount: l.monthly_rent, // or total for period
          status: l.lease_status === 'active' ? 'confirmed' : l.lease_status,
          paymentStatus: 'pending',
          createdAt: l.created_at,
        }));

        const mappedRentals = (rentals || []).map((r: any) => ({
          id: `rental-${r.rental_id}`,
          userId: r.client?.user_id, // ensure relationship exists
          userName: r.client?.username,
          serviceType: 'car-rental',
          startDate: r.start_date,
          endDate: r.end_date,
          totalAmount: r.total_cost,
          status: r.status || 'pending',
          paymentStatus: 'pending',
          createdAt: r.created_at,
        }));

        const allBookings = [...mappedEvents, ...mappedLeases, ...mappedRentals];

        if (user.role === 'client') {
          setBookings(allBookings.filter(b => b.userId === user.id));
        } else {
          setBookings(allBookings);
        }

      } catch (error) {
        console.error('Failed to fetch bookings', error);
        toast.error('Failed to load bookings from backend');
        // Fallback or empty
        setBookings([]);
      } finally {
        setLoading(false);
      }
    };
    fetchBookings();
  }, [user]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  const filteredBookings = filter === 'all'
    ? bookings
    : bookings.filter(b => b.status === filter);

  const updateBookingStatus = async (bookingId: string, newStatus: Booking['status']) => {
    // TODO: implement backend update
    toast.info('Status update not fully implemented on backend yet');
  };

  if (loading) {
    return (
      <div className="container-fluid bg-white p-5 text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="container-fluid bg-white p-0">
      {/* Page Header */}
      <div className="container-fluid page-header position-relative mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
          <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">{t('bookings')}</h1>
          <div className="d-inline-flex text-white">
            <p className="m-0 text-uppercase"><Link className="text-white" to="/">{t('home')}</Link></p>
            <i className="fa fa-angle-double-right pt-1 px-3 text-white"></i>
            <p className="m-0 text-uppercase">{t('bookings')}</p>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px' }}>
            <h1 className="mb-3">{t('manage_bookings')}</h1>
            <p>Track your requests, manage payments, and check the status of your upcoming services.</p>
          </div>

          {/* Filters */}
          <div className="row g-2 mb-5 justify-content-center wow fadeInUp" data-wow-delay="0.2s">
            {['all', 'pending', 'confirmed', 'completed', 'cancelled'].map((f) => (
              <div key={f} className="col-auto">
                <button
                  onClick={() => setFilter(f)}
                  className={`btn rounded-pill px-4 capitalize ${filter === f ? 'btn-primary' : 'btn-outline-primary'}`}
                >
                  {t(f)}
                </button>
              </div>
            ))}
          </div>

          <div className="row g-4">
            {filteredBookings.length === 0 ? (
              <div className="col-12 text-center py-5 wow fadeInUp" data-wow-delay="0.3s">
                <div className="bg-light rounded p-5 d-inline-block shadow-sm">
                  <Package size={64} className="text-muted mb-4 opacity-50" />
                  <h3 className="mb-2">No Bookings Found</h3>
                  <p className="text-muted mb-4">{t('no_bookings')}</p>
                  <Link to="/events" className="btn btn-primary rounded-pill px-5">{t('premium_services')}</Link>
                </div>
              </div>
            ) : (
              filteredBookings.map((booking, idx) => (
                <div key={booking.id} className="col-12 wow fadeInUp" data-wow-delay={`${0.1 * (idx % 5)}s`}>
                  <div className="bg-light rounded p-4 h-100 shadow-sm hover-shadow transition-all border">
                    <div className="row align-items-center">
                      <div className="col-md-1">
                        <div className="bg-white rounded-circle d-flex align-items-center justify-content-center mx-auto" style={{ width: '60px', height: '60px' }}>
                          {booking.serviceType === 'events' && <Calendar className="text-primary" />}
                          {booking.serviceType === 'car-rental' && <Car className="text-primary" />}
                          {booking.serviceType === 'house-rental' && <HomeIcon className="text-primary" />}
                        </div>
                      </div>
                      <div className="col-md-3 mt-3 mt-md-0">
                        <h5 className="mb-1 fw-bold">#{booking.id.slice(-8)}</h5>
                        <span className="text-muted small capitalize">{booking.serviceType!.replace('-', ' ')}</span>
                      </div>
                      <div className="col-md-3">
                        <div className="small text-muted mb-1"><i className="far fa-calendar-alt me-2 text-primary"></i>Period</div>
                        <div className="fw-bold small">{new Date(booking.startDate).toLocaleDateString()} - {new Date(booking.endDate).toLocaleDateString()}</div>
                      </div>
                      <div className="col-md-2 text-md-center">
                        <h4 className="mb-0 text-primary">{formatPrice(booking.totalAmount)}</h4>
                        <span className={`badge rounded-pill mt-1 ${booking.paymentStatus === 'paid' ? 'bg-success' : 'bg-warning text-dark'}`}>
                          {t(booking.paymentStatus === 'paid' ? 'paid' : 'pending')}
                        </span>
                      </div>
                      <div className="col-md-3 text-md-end mt-3 mt-md-0">
                        <div className="d-flex flex-column gap-2 align-items-md-end">
                          <span className={`badge rounded-pill px-3 py-2 mb-2 ${booking.status === 'confirmed' ? 'bg-success' :
                            booking.status === 'pending' ? 'bg-warning text-dark' :
                              booking.status === 'completed' ? 'bg-info' : 'bg-danger'
                            }`}>
                            {t(booking.status).toUpperCase()}
                          </span>

                          {(user?.role === 'admin' || user?.role === 'manager') && booking.status !== 'cancelled' && (
                            <div className="btn-group btn-group-sm">
                              {booking.status === 'pending' && (
                                <button onClick={() => updateBookingStatus(booking.id, 'confirmed')} className="btn btn-success border-0">Approve</button>
                              )}
                              {booking.status === 'confirmed' && (
                                <button onClick={() => updateBookingStatus(booking.id, 'completed')} className="btn btn-info border-0 text-white">Done</button>
                              )}
                              {booking.status === 'pending' && (
                                <button onClick={() => updateBookingStatus(booking.id, 'cancelled')} className="btn btn-danger border-0 text-white">Reject</button>
                              )}
                            </div>
                          )}
                          {booking.paymentStatus !== 'paid' && (
                            <Link to={`/payment/${booking.id}`} className="btn btn-primary btn-sm rounded-pill px-3">Make Payment</Link>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
