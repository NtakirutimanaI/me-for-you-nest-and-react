import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router';
import { useAuth } from '../context/AuthContext';
import { useCurrency } from '../context/CurrencyContext';
import { useLanguage } from '../context/LanguageContext';
import { Car, Calendar, Users, Fuel, Settings, ShieldCheck } from 'lucide-react';
import { CurrencySwitcher } from '../components/CurrencySwitcher';
import { toast } from 'sonner';
import type { CarRental } from '../types';
import { api } from '../services/api';

export function CarRentalPage() {
  const { isAuthenticated } = useAuth();
  const { formatPrice } = useCurrency();
  const { t } = useLanguage();
  const navigate = useNavigate();
  const [selectedCar, setSelectedCar] = useState<CarRental | null>(null);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [cars, setCars] = useState<CarRental[]>([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const data = await api.cars.findAll();
        setCars(data);
      } catch (error) {
        console.error('Failed to fetch cars', error);
        // Fallback for demo
        const local = JSON.parse(localStorage.getItem('carRentals') || '[]');
        setCars(local);
      }
    };
    fetchCars();
  }, []);

  const filteredCars = filterCategory === 'all'
    ? cars
    : cars.filter(car => car.category === filterCategory);

  const calculateDays = () => {
    if (!startDate || !endDate) return 0;
    const start = new Date(startDate);
    const end = new Date(endDate);
    const days = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  const calculateTotal = () => {
    if (!selectedCar) return 0;
    return selectedCar.pricePerDay * calculateDays();
  };

  const handleBooking = async () => {
    if (!isAuthenticated) {
      toast.error('Please login to make a booking');
      navigate('/login');
      return;
    }

    if (!selectedCar) {
      toast.error('Please select a car');
      return;
    }

    if (!startDate || !endDate) {
      toast.error('Please select rental dates');
      return;
    }

    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

    const bookingData = {
      car_id: selectedCar.id,
      client_id: currentUser.id,
      start_date: startDate,
      end_date: endDate,
      daily_rate: selectedCar.pricePerDay,
      total_cost: calculateTotal(),
      status: 'pending'
    };

    try {
      await api.cars.rent(bookingData);
      toast.success('Booking created successfully!');
      navigate(`/payment/booking-${Date.now()}`);
    } catch (error: any) {
      toast.error(error.message || 'Failed to create booking');
    }
  };

  return (
    <div className="container-fluid bg-white p-0">
      {/* Hero Section */}
      <div className="container-fluid p-0 position-relative">
        <div className="wave-down" style={{ top: '-1px' }}></div>
        <div className="position-relative">
          <img className="img-fluid d-block w-100" src="/img/hero-cars.jpg" alt="" style={{ height: '600px', objectFit: 'cover' }} />
          <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center" style={{ background: 'rgba(0, 0, 0, 0.5)' }}>
            <div className="container pt-5">
              <div className="row align-items-center">
                <div className="col-10 col-lg-8">
                  <div className="p-3 p-md-4 animated zoomIn">
                    <h6 className="text-white text-uppercase fw-bold mb-3 animated slideInDown" style={{ letterSpacing: '3px', textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}>{t('programs')}</h6>
                    <h1 className="display-3 text-white mb-4 fw-bold animated slideInDown" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.5)' }}>{t('premium_fleet')}</h1>
                    <p className="fs-5 fw-medium text-white mb-4 animated fadeInUp" style={{ maxWidth: '600px', textShadow: '0 1px 2px rgba(0,0,0,0.8)' }}>
                      Whether for business or pleasure, find the perfect vehicle for your journey across Rwanda.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="wave-up" style={{ bottom: '-1px' }}></div>
      </div>

      <div className="container-xxl py-5">
        <div className="container">
          {/* Filters */}
          <div className="row g-2 mb-5 justify-content-center wow fadeInUp" data-wow-delay="0.2s">
            {['all', 'economy', 'luxury', 'suv', 'van'].map((category) => (
              <div key={category} className="col-auto">
                <button
                  onClick={() => setFilterCategory(category)}
                  className={`btn rounded-pill px-4 text-capitalize ${filterCategory === category ? 'btn-primary' : 'btn-outline-primary'}`}
                >
                  {category}
                </button>
              </div>
            ))}
          </div>

          <div className="row g-4">
            <div className="col-lg-8">
              <div className="row g-4">
                {filteredCars.map((car, idx) => (
                  <div key={car.id} className="col-md-6 wow fadeInUp" data-wow-delay={`${0.1 * (idx % 2)}s`}>
                    <div
                      onClick={() => setSelectedCar(car)}
                      className={`classes-item border rounded h-100 cursor-pointer overflow-hidden transition-all ${selectedCar?.id === car.id ? 'border-primary border-4 shadow-lg' : 'bg-white hover-shadow'}`}
                    >
                      <div className="position-relative">
                        <img src={car.image} alt={car.brand} className="img-fluid w-100" style={{ height: '240px', objectFit: 'cover' }} />
                        <div className="position-absolute top-0 end-0 m-3 px-3 py-1 bg-primary text-white rounded-pill fw-bold small">
                          {formatPrice(car.pricePerDay)}/day
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <h4 className="mb-0">{car.brand}</h4>
                          <span className="badge bg-light text-primary border">{car.category.toUpperCase()}</span>
                        </div>
                        <p className="text-muted small mb-3">{car.model} • {car.year}</p>
                        <div className="d-flex gap-3 mb-4 text-muted small border-top pt-3">
                          <div className="d-flex align-items-center gap-1"><Users size={14} className="text-primary" /> {car.seats || 5} {t('seats')}</div>
                          <div className="d-flex align-items-center gap-1"><Fuel size={14} className="text-primary" /> Petrol/Diesel</div>
                          <div className="d-flex align-items-center gap-1"><Settings size={14} className="text-primary" /> Manual/Auto</div>
                        </div>
                        <button className={`btn w-100 rounded-pill ${selectedCar?.id === car.id ? 'btn-primary' : 'btn-outline-primary'}`}>
                          {selectedCar?.id === car.id ? t('completed') : t('select_vehicle')}
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
                  <h4 className="mb-0">{t('rental_duration')}</h4>
                  <CurrencySwitcher />
                </div>
                <div className="row g-3 mb-4">
                  <div className="col-12">
                    <label className="small fw-bold text-muted mb-1">{t('pickup_date')}</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0"><Calendar size={16} /></span>
                      <input type="date" className="form-control border-start-0" value={startDate} onChange={e => setStartDate(e.target.value)} />
                    </div>
                  </div>
                  <div className="col-12">
                    <label className="small fw-bold text-muted mb-1">{t('return_date')}</label>
                    <div className="input-group">
                      <span className="input-group-text bg-white border-end-0"><Calendar size={16} /></span>
                      <input type="date" className="form-control border-start-0" value={endDate} onChange={e => setEndDate(e.target.value)} />
                    </div>
                  </div>
                </div>

                {selectedCar ? (
                  <div className="mt-4 pt-4 border-top">
                    <div className="d-flex align-items-center mb-3">
                      <img src={selectedCar.image} className="rounded me-3" style={{ width: '80px', height: '60px', objectFit: 'cover' }} alt="" />
                      <div>
                        <h6 className="mb-0">{selectedCar.brand} {selectedCar.model}</h6>
                        <small className="text-muted">{formatPrice(selectedCar.pricePerDay)}/day</small>
                      </div>
                    </div>
                    <div className="d-flex justify-content-between mb-2">
                      <span className="text-muted">Rental Days:</span>
                      <span className="fw-bold">{calculateDays()}</span>
                    </div>
                    <div className="d-flex justify-content-between mb-4">
                      <h5 className="mb-0">{t('estimated_total')}:</h5>
                      <h4 className="mb-0 text-primary">{formatPrice(calculateTotal())}</h4>
                    </div>
                    <button
                      onClick={handleBooking}
                      disabled={calculateDays() === 0}
                      className="btn btn-primary w-100 py-3 rounded-pill fw-bold shadow-sm"
                    >
                      {t('book_now')}
                    </button>
                  </div>
                ) : (
                  <div className="text-center py-4 border-top">
                    <div className="bg-white rounded p-3 text-muted small">Please select a vehicle from the list to see the total price and book.</div>
                  </div>
                )}

                <div className="mt-3 p-3 bg-white rounded border border-primary border-opacity-10">
                  <div className="d-flex align-items-center gap-2 mb-2">
                    <ShieldCheck size={18} className="text-success" />
                    <span className="small fw-bold">Comprehensive Insurance</span>
                  </div>
                  <p className="small text-muted mb-0">All our rentals include basic insurance and 24/7 roadside assistance.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
