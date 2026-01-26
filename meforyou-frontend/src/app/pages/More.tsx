import { useEffect } from 'react';
import { Link } from 'react-router';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, CheckCircle, Shield, Zap, Target, Users, Award } from 'lucide-react';

export function MorePage() {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
        if ((window as any).WOW) {
            new (window as any).WOW().init();
        }
    }, []);

    return (
        <div className="container-fluid bg-white p-0">
            {/* Hero Section */}
            <div className="container-fluid py-5 bg-dark-teal text-white text-center">
                <div className="container py-5">
                    <h1 className="display-3 fw-bold mb-4 wow fadeInDown">Our Depth & Strategy</h1>
                    <p className="fs-4 mb-5 wow fadeInUp" data-wow-delay="0.2s">
                        Going beyond services to deliver meaningful impact through smart solutions.
                    </p>
                </div>
            </div>

            {/* Philosophy Section */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInLeft">
                            <img src="/img/DSC_7878.jpg" className="img-fluid rounded-4 shadow-lg" alt="Our Team" />
                        </div>
                        <div className="col-lg-6 wow fadeInRight">
                            <h6 className="text-primary text-uppercase mb-3">Our Depth</h6>
                            <h1 className="mb-4 display-5 fw-bold">Transforming Ideas into Sustainable Realities</h1>
                            <p className="mb-4 text-muted fs-5">
                                Me For You Advisory isn't just a service provider; we are your strategic partner in Rwanda.
                                Our methodology rooted in "Smartness" ensures that every resource is utilized efficiently.
                            </p>
                            <div className="row g-4">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="bg-primary-soft p-3 rounded-circle text-primary">
                                            <Zap size={24} />
                                        </div>
                                        <span className="fw-bold">Agile Execution</span>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center gap-3 mb-3">
                                        <div className="bg-primary-soft p-3 rounded-circle text-primary">
                                            <Shield size={24} />
                                        </div>
                                        <span className="fw-bold">Risk Management</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Blueprint Details */}
            <div className="container-xxl py-5 bg-light">
                <div className="container">
                    <div className="text-center mx-auto mb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
                        <h1 className="display-6 fw-bold">The Me For You Blueprint</h1>
                        <p className="text-muted">A structured approach to every challenge.</p>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="bg-white p-5 rounded-4 h-100 shadow-sm border-top border-5 border-primary">
                                <Target size={40} className="text-primary mb-4" />
                                <h4>Inquiry Analysis</h4>
                                <p className="text-muted">We start by listening. Understanding your unique constraints and goals is our first priority.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div className="bg-white p-5 rounded-4 h-100 shadow-sm border-top border-5 border-primary">
                                <Award size={40} className="text-primary mb-4" />
                                <h4>Market Alignment</h4>
                                <p className="text-muted">We ensure that our proposed solutions are validated against local market conditions in Rwanda.</p>
                            </div>
                        </div>
                        <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                            <div className="bg-white p-5 rounded-4 h-100 shadow-sm border-top border-5 border-primary">
                                <Zap size={40} className="text-primary mb-4" />
                                <h4>Resource Analytics</h4>
                                <p className="text-muted">Data-driven decisions for procurement and logistics to stay within your budget.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Trigger */}
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="bg-primary rounded-4 p-5 shadow text-center wow zoomIn">
                        <h2 className="text-white mb-4">Wanna see how we can help you specifically?</h2>
                        <Link to="/contact" className="btn btn-white rounded-pill py-3 px-5 fw-bold shadow">
                            Schedule a Consultation
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
