import { useState, useEffect } from 'react';
import { useParams, useNavigate, Navigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useLanguage } from '../context/LanguageContext';
import { CreditCard, Smartphone, Building2, Heart, CheckCircle } from 'lucide-react';
import { useCurrency } from '../context/CurrencyContext';
import type { Booking, PaymentMethod } from '../types';
import { toast } from 'sonner';

export function PaymentPage() {
  const { bookingId } = useParams();
  const { user, isAuthenticated } = useAuth();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [booking, setBooking] = useState<Booking | null>(null);
  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>('momo');
  const [reference, setReference] = useState('');
  const [processing, setProcessing] = useState(false);

  useEffect(() => {
    if (bookingId) {
      const bookings: Booking[] = JSON.parse(localStorage.getItem('bookings') || '[]');
      const found = bookings.find(b => b.id === bookingId);
      if (found) {
        setBooking(found);
      }
    }
  }, [bookingId]);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  if (!booking) {
    return (
      <div className="container py-5 text-center">
        <p className="text-muted">Booking not found</p>
        <Link to="/bookings" className="btn btn-primary rounded-pill">Back to Bookings</Link>
      </div>
    );
  }

  const handlePayment = () => {
    setProcessing(true);

    setTimeout(() => {
      const payment = {
        id: `payment-${Date.now()}`,
        bookingId: booking.id,
        amount: booking.totalAmount,
        method: paymentMethod,
        status: 'paid' as const,
        reference: reference || `REF-${Date.now()}`,
        createdAt: new Date().toISOString(),
      };

      const payments = JSON.parse(localStorage.getItem('payments') || '[]');
      payments.push(payment);
      localStorage.setItem('payments', JSON.stringify(payments));

      const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
      const updated = bookings.map((b: Booking) =>
        b.id === booking.id ? { ...b, paymentStatus: 'paid', paymentMethod } : b
      );
      localStorage.setItem('bookings', JSON.stringify(updated));

      setProcessing(false);
      toast.success('Payment successful!');
      navigate('/bookings');
    }, 2000);
  };

  const paymentMethods = [
    {
      value: 'momo' as PaymentMethod,
      label: 'Mobile Money',
      icon: Smartphone,
      description: 'Pay via MTN MoMo or Airtel Money'
    },
    {
      value: 'bank-transfer' as PaymentMethod,
      label: 'Bank Transfer',
      icon: Building2,
      description: 'Transfer directly to our bank account'
    },
    {
      value: 'atm-card' as PaymentMethod,
      label: 'Credit/Debit Card',
      icon: CreditCard,
      description: 'Pay with your credit or debit card'
    },
    {
      value: 'donation' as PaymentMethod,
      label: 'Donation Payment',
      icon: Heart,
      description: 'Make a donation to support us'
    },
  ];

  return (
    <div className="container-fluid bg-white p-0">
      {/* Page Header */}
      <div className="container-fluid page-header position-relative mb-5">
        <div className="d-flex flex-column align-items-center justify-content-center pt-0 pt-lg-5" style={{ minHeight: '400px' }}>
          <h1 className="display-4 text-white mb-3 mt-0 mt-lg-5">Complete Payment</h1>
          <div className="d-inline-flex text-white">
            <p className="m-0 text-uppercase"><Link className="text-white" to="/">{t('home')}</Link></p>
            <i className="fa fa-angle-double-right pt-1 px-3 text-white"></i>
            <p className="m-0 text-uppercase">Payment</p>
          </div>
        </div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          <div className="row g-5">
            {/* Payment Methods */}
            <div className="col-lg-8 wow fadeInUp" data-wow-delay="0.1s">
              <h3 className="mb-4">Select Payment Method</h3>
              <div className="row g-3 mb-5">
                {paymentMethods.map((method) => {
                  const Icon = method.icon;
                  const isSelected = paymentMethod === method.value;
                  return (
                    <div key={method.value} className="col-md-6">
                      <div
                        onClick={() => setPaymentMethod(method.value)}
                        className={`p-4 rounded border h-100 cursor-pointer transition-all ${isSelected ? 'border-primary bg-light shadow-sm' : 'border-light bg-white hover-shadow'}`}
                      >
                        <div className="d-flex align-items-center mb-3">
                          <div className={`p-3 rounded-circle me-3 ${isSelected ? 'bg-primary text-white' : 'bg-light text-primary'}`}>
                            <Icon size={24} />
                          </div>
                          <h5 className="mb-0">{method.label}</h5>
                          {isSelected && <CheckCircle size={20} className="ms-auto text-primary" />}
                        </div>
                        <p className="text-muted small mb-0">{method.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="bg-light rounded p-4 shadow-sm wow fadeInUp" data-wow-delay="0.2s">
                <h4 className="mb-4">Transaction Details</h4>
                {paymentMethod === 'momo' && (
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="fw-bold small text-dark mb-2">MoMo Phone Number</label>
                        <input type="tel" className="form-control" placeholder="+250 788 000 000" />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="alert alert-info border-0 py-3 mb-0">
                        <p className="mb-0 small"><i className="fas fa-info-circle me-2"></i>You will receive a prompt on your phone to authorize the transaction of <strong>{formatPrice(booking.totalAmount)}</strong>.</p>
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'bank-transfer' && (
                  <div className="row g-3">
                    <div className="col-12 text-center mb-3">
                      <div className="p-3 bg-white border rounded">
                        <div className="row">
                          <div className="col-sm-6 text-sm-start mb-2 mb-sm-0">
                            <span className="text-muted small d-block">Bank Name</span>
                            <span className="fw-bold">Bank of Kigali</span>
                          </div>
                          <div className="col-sm-6 text-sm-end">
                            <span className="text-muted small d-block">Account Number</span>
                            <span className="fw-bold text-primary">1234567890</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="form-group">
                        <label className="fw-bold small text-dark mb-2">Transfer Reference Number</label>
                        <input
                          type="text"
                          className="form-control"
                          value={reference}
                          onChange={(e) => setReference(e.target.value)}
                          placeholder="e.g. TR-992388"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'atm-card' && (
                  <div className="row g-3">
                    <div className="col-12">
                      <div className="form-group">
                        <label className="fw-bold small text-dark mb-2">Card Number</label>
                        <input type="text" className="form-control" placeholder="1234 5678 9012 3456" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="fw-bold small text-dark mb-2">Expiry Date</label>
                        <input type="text" className="form-control" placeholder="MM/YY" />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <label className="fw-bold small text-dark mb-2">CVV</label>
                        <input type="text" className="form-control" placeholder="123" />
                      </div>
                    </div>
                  </div>
                )}

                {paymentMethod === 'donation' && (
                  <div className="text-center py-3">
                    <Heart size={48} className="text-danger mb-3" />
                    <h5>Support Me For You</h5>
                    <p className="text-muted">Your extra contribution helps our community projects. Feel free to adjust the amount.</p>
                    <div className="input-group w-50 mx-auto">
                      <span className="input-group-text">$</span>
                      <input type="number" className="form-control text-center" placeholder="Extra amount" />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Order Summary */}
            <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
              <div className="bg-light rounded p-4 shadow-sm sticky-top" style={{ top: '100px' }}>
                <h4 className="mb-4">Order Summary</h4>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Booking Reference:</span>
                  <span className="fw-bold">#{booking.id.slice(-8)}</span>
                </div>
                <div className="d-flex justify-content-between mb-2">
                  <span className="text-muted">Service Type:</span>
                  <span className="fw-bold capitalize text-primary">{booking.serviceType.replace('-', ' ')}</span>
                </div>
                <div className="d-flex justify-content-between mb-4 pb-4 border-bottom">
                  <span className="text-muted">Booking Date:</span>
                  <span className="fw-bold">{new Date(booking.startDate).toLocaleDateString()}</span>
                </div>

                <div className="d-flex justify-content-between mb-4">
                  <h5 className="mb-0">{t('amount')}:</h5>
                  <h3 className="mb-0 text-primary">{formatPrice(booking.totalAmount)}</h3>
                </div>

                <button
                  onClick={handlePayment}
                  disabled={processing}
                  className="btn btn-primary w-100 py-3 rounded-pill fw-bold mb-3 shadow-sm"
                >
                  {processing ? (
                    <>
                      <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                      Processing...
                    </>
                  ) : 'Complete Payment'}
                </button>

                <p className="text-center text-muted small mb-0"><i className="fas fa-shield-alt me-2"></i>Secure Transaction</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
