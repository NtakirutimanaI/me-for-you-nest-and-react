import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useCurrency } from '../context/CurrencyContext';
import { useLanguage } from '../context/LanguageContext';
import { Home as HomeIcon, MapPin, Bed, Bath, Users, Wifi, Wind, Coffee, Calendar, Check } from 'lucide-react';
import { CurrencySwitcher } from '../components/CurrencySwitcher';
import { toast } from 'sonner';
import type { HouseRental, User } from '../types';
import { api } from '../services/api';

export function HouseRentalPage() {
  const { isAuthenticated } = useAuth();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedHouse, setSelectedHouse] = useState<HouseRental | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [houses, setHouses] = useState<HouseRental[]>([]);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const data = await api.properties.findAll();
        setHouses(data);
      } catch (error) {
        console.error('Failed to load houses', error);
        const local = JSON.parse(localStorage.getItem('houseRentals') || '[]');
        setHouses(local);
      }
    };
    fetchHouses();
  }, []);

  const calculateNights = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const nights = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return nights > 0 ? nights : 0;
  };

  const calculateTotal = () => {
    if (!selectedHouse) return 0;
    return selectedHouse.pricePerNight * calculateNights();
  };

  const handleBooking = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to make a booking');
      navigate('/login');
      return;
    }

    if (!selectedHouse) {
      toast.error('Please select a property');
      return;
    }

    if (!startDate || !endDate) {
      toast.error('Please select check-in and check-out dates');
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    // Create a Lease (or booking)
    const bookingData = {
      property_id: selectedHouse.id,
      tenant_id: currentUser.id, // Ensure this maps correctly if tenant_id is number
      start_date: startDate,
      end_date: endDate,
      monthly_rent: selectedHouse.pricePerNight * 30, // Estimate
      security_deposit: 0,
      lease_status: 'pending_approval'
    };

    try {
      await api.properties.lease(bookingData);
      toast.success('Booking created successfully!');
      // Ideally navigate to confirmation
      navigate(`/payment/booking-${Date.now()}`);
    } catch (error: any) {
      toast.error(error.message || 'Failed to create booking');
    }
  };

  return (
    <div className="container-fluid bg-white p-0">
      <div className="container-xxl py-5">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10 text-center wow fadeInUp" data-wow-delay="0.1s">
              <h6 className="text-primary text-uppercase mb-2">{t('programs')}</h6>
              <h1 className="mb-4 display-5 fw-bold">{t('find_home')}</h1>
              <p className="mb-4 fs-5 text-muted leading-relaxed">
                Discover premium accommodations in Kigali, carefully selected for comfort, security, and convenience.
              </p>
            </div>
          </div>

          <div className="row g-5">
            <div className="col-lg-8">
              <div className="row g-4">
                {houses.map((house, idx) => (
                  <div key={house.id} className="col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (idx % 2)}s`}>
                    <div
                      onClick={() => setSelectedHouse(house)}
                      className={`classes-item border rounded h-100 cursor-pointer overflow-hidden transition-all ${selectedHouse?.id === house.id ? 'border-primary ring-2 ring-primary shadow-lg' : 'bg-white hover-shadow'}`}
                    >
                      <div className="position-relative">
                        <img src={house.image} alt={house.title} className="img-fluid w-100" style={{ height: '240px', objectFit: 'cover' }} />
                        <div className="position-absolute bottom-0 start-0 m-3 px-3 py-1 bg-primary text-white rounded-pill fw-bold small shadow">
                          {formatPrice(house.pricePerNight)}/night
                        </div>
                        {!house.available && (
                          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center" style={{ background: 'rgba(0,0,0,0.5)' }}>
                            <span className="bg-danger text-white px-3 py-1 rounded-pill fw-bold">Currently Booked</span>
                          </div>
                        )}
                      </div>
                      <div className="p-4">
                        <h4 className="mb-2">{house.title}</h4>
                        <div className="d-flex align-items-center text-muted small mb-3">
                          <MapPin size={14} className="me-1 text-primary" />
                          {house.location}
                        </div>
                        <div className="d-flex justify-content-between mb-4 text-dark small border-top pt-3">
                          <div className="d-flex align-items-center gap-1"><Bed size={16} className="text-primary" /> {house.bedrooms} Bed</div>
                          <div className="d-flex align-items-center gap-1"><Bath size={16} className="text-primary" /> {house.bathrooms} Bath</div>
                          <div className="d-flex align-items-center gap-1"><Users size={16} className="text-primary" /> {house.maxGuests} Guests</div>
                        </div>
                        <div className="d-flex gap-2 mb-4">
                          <span className="p-2 bg-light rounded-circle text-primary" title="WiFi"><Wifi size={14} /></span>
                          <span className="p-2 bg-light rounded-circle text-primary" title="AC"><Wind size={14} /></span>
                          <span className="p-2 bg-light rounded-circle text-primary" title="Coffee"><Coffee size={14} /></span>
                        </div>
                        <button className={`btn w-100 rounded-pill ${selectedHouse?.id === house.id ? 'btn-primary' : 'btn-outline-primary'}`}>
                          {selectedHouse?.id === house.id ? t('completed') : t('select_property')}
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="col-lg-4">
              <div className="bg-light rounded p-4 shadow-sm sticky-top" style={{ top: '100px' }}>
                <div className="d-flex justify-content-between align-items-center mb-4">
                  <h4 className="mb-0">{t('stay_details')}</h4>
                  <CurrencySwitcher />
                </div>
                <div className="row g-3">
                  <div className="col-12">
                    <label className="small fw-bold text-muted mb-1">{t('checkin_date')}</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0"><Calendar size={16} /></span>
                      <input type="date" className="form-control border-start-0" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold text-muted mb-1">{t('checkout_date')}</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0"><Calendar size={16} /></span>
                      <input type="date" className="form-control border-start-0" value={endDate} onChange={e => setEndDate(e.target.value)} />
                    </div>
                  </div>
                </div>

                {selectedHouse ? (
                  <div className="mt-4 pt-4 border-top">
                    <div className="d-flex align-items-center mb-3">
                      <img src={selectedHouse.image} className="rounded me-3" style={{ width: '80px', height: '60px', objectFit: 'cover' }} alt="" />
                      <div className="overflow-hidden">
                        <h6 className="mb-0 text-truncate">{selectedHouse.title}</h6>
                        <small className="text-muted">{formatPrice(selectedHouse.pricePerNight)}/night</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Total Nights:</span>
                      <span className="fw-bold">{calculateNights()}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="mb-0">{t('estimated_total')}:</h5>
                      <h4 className="mb-0 text-primary">{formatPrice(calculateTotal())}</h4>
                    </div>
                    <button
                      onClick={handleBooking}
                      disabled={calculateNights() === 0}
                      className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm"
                    >
                      {t('book_now')}
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-4 border-top">
                    <div className="bg-white rounded p-3 text-muted small">Select a property from the list to view the estimated stay cost.</div>
                  </div>
                )}

                <div className="mt-4 p-3 bg-white rounded border">
                  <h6 className="mb-3">What's Included</h6>
                  <ul className="list-unstyled small text-muted mb-0">
                    <li className="mb-2"><Check size={14} className="text-primary me-2" /> 24/7 Security & Support</li>
                    <li className="mb-2"><Check size={14} className="text-primary me-2" /> Clean & Furnished Rooms</li>
                    <li><Check size={14} className="text-primary me-2" /> Flexible Check-in/out</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
