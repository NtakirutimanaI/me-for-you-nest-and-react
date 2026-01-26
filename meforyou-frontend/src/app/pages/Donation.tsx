import { useState } from 'react';
import { Link } from 'react-router';
import { Heart, DollarSign, CheckCircle, Smartphone, Building2 } from 'lucide-react';
import { CurrencySwitcher } from '../components/CurrencySwitcher';
import { useCurrency } from '../context/CurrencyContext';
import { useLanguage } from '../context/LanguageContext';
import { toast } from 'sonner';

export function DonationPage() {
    const { formatPrice } = useCurrency();
    const { t } = useLanguage();
    const [amount, setAmount] = useState<number>(50);
    const [paymentMethod, setPaymentMethod] = useState<'momo' | 'bank'>('momo');
    const [success, setSuccess] = useState(false);

    const donationOptions = [
        { title: 'Community Events', amount: 50, description: 'Support our free community and cultural festivals.' },
        { title: 'Youth Support', amount: 100, description: 'Empower Kigali youth with arts and training programs.' },
        { title: 'General Support', amount: 200, description: 'Help us maintain and grow our services across Rwanda.' },
    ];

    const handleDonate = () => {
        toast.success(`Thank you for your donation of ${formatPrice(amount)}!`);
        setSuccess(true);
    };

    if (success) {
        return (
            <div className="container-xxl py-5 mt-5 text-center wow fadeInUp">
                <div className="bg-light rounded p-5 d-inline-block shadow-sm">
                    <CheckCircle size={80} className="text-success mb-4" />
                    <h1 className="display-4">Thank You!</h1>
                    <p className="fs-5 mb-4">Your generous donation helps us continue our mission to support the community.</p>
                    <Link to="/" className="btn btn-primary rounded-pill px-5 py-3">Back to Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="container-fluid bg-white p-0">
            {/* Shorter Premium Hero Header Section */}
            <div className="container-fluid page-header position-relative p-0 mb-5" style={{
                background: 'linear-gradient(rgba(16, 55, 65, 0.7), rgba(16, 55, 65, 0.7)), url("/img/GOD_0700.jpg") center center no-repeat',
                backgroundSize: 'cover',
                minHeight: '280px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <div className="container py-5 text-center mt-3">
                    <h1 className="display-3 text-white fw-bold mb-2 animated slideInDown" style={{ textShadow: '0 4px 15px rgba(0,0,0,0.5)' }}>Donation</h1>
                    <nav aria-label="breadcrumb">
                        <div className="d-inline-flex align-items-center text-white fs-6 fw-medium animated slideInUp">
                            <Link className="text-white hover-opacity-100 transition-all text-decoration-none" to="/">{t('home')}</Link>
                            <span className="mx-2 opacity-50">/</span>
                            <span className="text-white">Donation</span>
                        </div>
                    </nav>
                </div>

                {/* Scalloped Border effect */}
                <div className="position-absolute start-0 bottom-0 w-100 overflow-hidden" style={{ lineHeight: 0, height: '30px' }}>
                    <svg viewBox="0 0 120 28" preserveAspectRatio="none" style={{ width: '100%', height: '100%' }}>
                        <path d="M0 28 Q 5 0, 10 28 T 20 28 T 30 28 T 40 28 T 50 28 T 60 28 T 70 28 T 80 28 T 90 28 T 100 28 T 110 28 T 120 28 V 28 H 0 Z" fill="white" />
                    </svg>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-10 text-center wow fadeInUp" data-wow-delay="0.1s">
                            <h6 className="text-primary text-uppercase mb-2">{t('social_impact')}</h6>
                            <h1 className="mb-4 display-5 fw-bold">Make a Difference Today</h1>
                            <p className="mb-4 fs-5 text-muted leading-relaxed">
                                Your support allows us to keep providing high-quality cultural and management services in Rwanda. Every contribution matters.
                            </p>
                        </div>
                    </div>

                    <div className="row g-5">
                        <div className="col-lg-7">
                            <h2 className="mb-4 text-primary">Support Our Mission</h2>
                            <div className="row g-4 mb-4">
                                {donationOptions.map((opt, i) => (
                                    <div key={i} className="col-md-4">
                                        <div
                                            onClick={() => setAmount(opt.amount)}
                                            className={`p-4 border rounded text-center cursor-pointer transition-all h-100 ${amount === opt.amount ? 'border-primary bg-light shadow-sm' : 'hover-shadow'}`}
                                        >
                                            <h3 className="h4 text-primary mb-1">{formatPrice(opt.amount)}</h3>
                                            <h6 className="small mb-0">{opt.title}</h6>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="bg-light p-4 rounded mb-5 shadow-sm">
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <h4 className="mb-0">Select Amount</h4>
                                    <CurrencySwitcher />
                                </div>
                                <div className="input-group mb-3">
                                    <span className="input-group-text bg-white"><Heart className="text-danger" size={20} /></span>
                                    <input
                                        type="number"
                                        className="form-control form-control-lg"
                                        value={amount}
                                        onChange={(e) => setAmount(Number(e.target.value))}
                                        placeholder="Enter amount"
                                    />
                                    <span className="input-group-text bg-white fw-bold">USD</span>
                                </div>
                                <div className="text-primary fw-bold mt-2">Total: {formatPrice(amount)}</div>
                            </div>

                            <div className="mb-5">
                                <h4 className="mb-4">Select Payment Method</h4>
                                <div className="row g-3">
                                    <div className="col-sm-6">
                                        <div
                                            onClick={() => setPaymentMethod('momo')}
                                            className={`p-3 border rounded d-flex align-items-center cursor-pointer ${paymentMethod === 'momo' ? 'border-primary bg-primary-soft' : ''}`}
                                        >
                                            <Smartphone className="text-primary me-3" />
                                            <div>
                                                <h6 className="mb-0">Mobile Money</h6>
                                                <small className="text-muted">MTN/Airtel</small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-sm-6">
                                        <div
                                            onClick={() => setPaymentMethod('bank')}
                                            className={`p-3 border rounded d-flex align-items-center cursor-pointer ${paymentMethod === 'bank' ? 'border-primary bg-primary-soft' : ''}`}
                                        >
                                            <Building2 className="text-primary me-3" />
                                            <div>
                                                <h6 className="mb-0">Bank Transfer</h6>
                                                <small className="text-muted">Bank of Kigali</small>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <button onClick={handleDonate} className="btn btn-primary btn-lg rounded-pill px-5 py-3 shadow">
                                Complete Donation
                            </button>
                        </div>

                        <div className="col-lg-5">
                            <div className="bg-primary rounded p-5 text-white shadow h-100">
                                <h3 className="text-white mb-4">Why Donate?</h3>
                                <ul className="list-unstyled">
                                    <li className="mb-4 d-flex align-items-start">
                                        <CheckCircle className="me-3 flex-shrink-0 mt-1" />
                                        <span>Support local artists and performers in Rwanda.</span>
                                    </li>
                                    <li className="mb-4 d-flex align-items-start">
                                        <CheckCircle className="me-3 flex-shrink-0 mt-1" />
                                        <span>Ensure high-quality cultural heritage preservation.</span>
                                    </li>
                                    <li className="mb-4 d-flex align-items-start">
                                        <CheckCircle className="me-3 flex-shrink-0 mt-1" />
                                        <span>Provide accessible housing and transport solutions for all.</span>
                                    </li>
                                </ul>
                                <div className="mt-5 text-center">
                                    <img src="/img/logo.jpg" alt="Logo" className="img-fluid rounded-circle mb-3 bg-white p-2 shadow" style={{ width: '100px', height: '100px', objectFit: 'contain' }} />
                                    <h4 className="text-white">Me For You</h4>
                                    <p className="mb-0 small opacity-75">Together for a better community.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
