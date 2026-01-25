import { useState } from 'react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useCurrency } from '../context/CurrencyContext';
import { useLanguage } from '../context/LanguageContext';
import { Calendar, Check, Users, Clock, Star } from 'lucide-react';
import { CurrencySwitcher } from '../components/CurrencySwitcher';
import { toast } from 'sonner';
import type { EventType, EventService } from '../types';

export function EventsPage() {
  const { isAuthenticated } = useAuth();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [eventType, setEventType] = useState<EventType>('wedding');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [guests, setGuests] = useState('');
  const [notes, setNotes] = useState('');

  const eventServices: EventService[] = JSON.parse(localStorage.getItem('eventServices') || '[]');

  const toggleService = (serviceId: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceId)
        ? prev.filter(id => id !== serviceId)
        : [...prev, serviceId]
    );
  };

  const calculateTotal = () => {
    return eventServices
      .filter(service => selectedServices.includes(service.id))
      .reduce((sum, service) => sum + service.price, 0);
  };

  const handleBooking = () => {
    if (!isAuthenticated) {
      toast.error('Please login to make a booking');
      navigate('/login');
      return;
    }

    if (selectedServices.length === 0) {
      toast.error('Please select at least one service');
      return;
    }

    if (!startDate || !endDate) {
      toast.error('Please select event dates');
      return;
    }

    const booking = {
      id: `booking-${Date.now()}`,
      userId: JSON.parse(localStorage.getItem('currentUser') || '{}').id,
      userName: JSON.parse(localStorage.getItem('currentUser') || '{}').name,
      serviceType: 'events' as const,
      eventType,
      services: selectedServices,
      startDate,
      endDate,
      totalAmount: calculateTotal(),
      status: 'pending' as const,
      paymentStatus: 'pending' as const,
      createdAt: new Date().toISOString(),
      notes: `${guests ? `Guests: ${guests}. ` : ''}${notes}`,
    };

    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push(booking);
    localStorage.setItem('bookings', JSON.stringify(bookings));

    toast.success('Booking created successfully!');
    navigate(`/payment/${booking.id}`);
  };

  const eventTypes = [
    { value: 'wedding' as EventType, label: 'Wedding', image: '/img/classes-1.jpg' },
    { value: 'corporate' as EventType, label: 'Corporate Event', image: '/img/classes-2.jpg' },
    { value: 'birthday' as EventType, label: 'Birthday Party', image: '/img/classes-3.jpg' },
    { value: 'conference' as EventType, label: 'Conference', image: '/img/classes-4.jpg' },
    { value: 'other' as EventType, label: 'Other', image: '/img/classes-5.jpg' },
  ];

  return (
    <div className="container-fluid bg-white p-0">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase mb-2">{t('programs')}</h6>
              <h1 className="mb-4 display-5 fw-bold">{t('plan_event')}</h1>
              <p className="mb-4 fs-5 text-muted leading-relaxed">
                Me For You Events offers a complete planning experience. Choose your event type and select the services you need.
              </p>
            </div>
          </div>

          {/* Step 1: Event Type */}
          <div className="mb-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex align-items-center mb-4">
              <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>1</div>
              <h2 className="mb-0">Select Event Type</h2>
            </div>
            <div className="row g-3">
              {eventTypes.map((type) => (
                <div key={type.value} className="col-lg-2 col-md-4 col-6">
                  <div
                    onClick={() => setEventType(type.value)}
                    className={`position-relative rounded overflow-hidden cursor-pointer transition-all ${eventType === type.value ? 'border-primary border-4 shadow-lg scale-105' : 'opacity-75 hover-opacity-100'}`}
                    style={{ height: '120px' }}
                  >
                    <img src={type.image} alt={type.label} className="w-100 h-100 object-fit-cover" />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-end p-2" style={{ background: 'linear-gradient(transparent, rgba(0,0,0,0.8))' }}>
                      <span className="text-white small fw-bold">{type.label}</span>
                    </div>
                    {eventType === type.value && <div className="position-absolute top-0 end-0 p-2"><Check className="text-white bg-primary rounded-circle p-1" size={20} /></div>}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-8">
              {/* Step 2: Services */}
              <div className="mb-5 wow fadeInUp" data-wow-delay="0.2s">
                <div className="d-flex align-items-center mb-4">
                  <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '40px', height: '40px' }}>2</div>
                  <h2 className="mb-0">Select Services</h2>
                </div>
                <div className="row g-4">
                  {eventServices.map((service) => (
                    <div key={service.id} className="col-md-6">
                      <div
                        onClick={() => toggleService(service.id)}
                        className={`p-4 rounded border h-100 cursor-pointer transition-all ${selectedServices.includes(service.id) ? 'border-primary bg-light shadow-sm' : 'bg-white border-light hover-shadow'}`}
                      >
                        <div className="d-flex justify-content-between mb-3">
                          <h5 className="mb-0">{service.name}</h5>
                          <div className={`rounded-circle p-1 ${selectedServices.includes(service.id) ? 'bg-primary text-white' : 'bg-light text-muted'}`}>
                            <Check size={16} />
                          </div>
                        </div>
                        <p className="text-muted small mb-3">{service.description}</p>
                        <div className="d-flex align-items-center justify-content-between">
                          <span className="h5 text-primary mb-0">{formatPrice(service.price)}</span>
                          <span className="badge bg-white text-muted border px-2 py-1">{service.category}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              {/* Step 3: Details & Booking */}
              <div className="bg-light rounded p-4 shadow-sm sticky-top mb-5" style={{ top: '100px' }}>
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div className="d-flex align-items-center">
                    <div className="bg-primary text-white rounded-circle d-flex align-items-center justify-content-center me-3" style={{ width: '30px', height: '30px', fontSize: '14px' }}>3</div>
                    <h4 className="mb-0">Event Details</h4>
                  </div>
                  <CurrencySwitcher />
                </div>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="small fw-bold text-muted mb-1">Desired Date</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0"><Calendar size={16} /></span>
                      <input type="date" className="form-control border-start-0" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold text-muted mb-1">Expected Guests</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0"><Users size={16} /></span>
                      <input type="number" className="form-control border-start-0" placeholder="e.g. 150" value={guests} onChange={e => setGuests(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold text-muted mb-1">Additional Notes</label>
                    <textarea className="form-control" rows={3} placeholder="Tell us more about your needs..." value={notes} onChange={e => setNotes(e.target.value)}></textarea>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-top">
                  <div className="d-flex justify-content-between mb-2">
                    <span className="text-muted">Services Selected:</span>
                    <span className="fw-bold">{selectedServices.length}</span>
                  </div>
                  <div className="d-flex justify-content-between mb-4">
                    <h5 className="mb-0">{t('estimated_total')}:</h5>
                    <h4 className="mb-0 text-primary">{formatPrice(calculateTotal())}</h4>
                  </div>
                  <button
                    onClick={handleBooking}
                    disabled={selectedServices.length === 0}
                    className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm"
                  >
                    Proceed to Payment
                  </button>
                </div>
              </div>

              <div className="bg-dark rounded p-4 text-white wow fadeIn" data-wow-delay="0.1s">
                <h5><Clock size={20} className="me-2 text-primary" /> Need it urgent?</h5>
                <p className="small mb-0">Call us for immediate assistance on last-minute events.</p>
                <p className="fw-bold text-primary mb-0">+250 788 202 209</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
