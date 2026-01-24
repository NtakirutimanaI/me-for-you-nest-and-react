import { useState } from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
    const [isLogin, setIsLogin] = useState(true);

    const toggleForm = () => {
        setIsLogin(!isLogin);
    };

    return (
        <div className="container-fluid bg-light min-vh-100 d-flex align-items-center justify-content-center py-5">
            <div className="bg-white rounded shadow-lg overflow-hidden" style={{ maxWidth: '900px', width: '100%' }}>
                <div className="row g-0">
                    {/* Left Side - Image/Logo */}
                    <div className="col-lg-6 bg-black d-flex flex-column align-items-center justify-content-center p-5 text-center text-white" style={{ backgroundColor: '#000' }}>
                        <div className="mb-4">
                            {/* Using the logo from public/img/logo.jpg. 
                                In the screenshot, it's a specific graphic. 
                                We will use the existing logo or a placeholder that looks professional. 
                                Since we don't have the exact image asset from the screenshot, we use the project logo.
                            */}
                            <img
                                src="/img/logo.jpg"
                                alt="Me For You Logo"
                                className="img-fluid mb-3"
                                style={{ maxHeight: '150px', objectFit: 'contain' }} // Adjusted for logo.jpg aspect ratio
                            />
                        </div>
                        <h2 className="fw-bold">Professional companion</h2>
                    </div>

                    {/* Right Side - Forms */}
                    <div className="col-lg-6 p-5">
                        <div className="d-flex justify-content-center mb-4">
                            {/* Optional: Tab like buttons if the user strictly wanted 'buttons' to switch, 
                                but the screenshot shows a link toggle. 
                                We will stick to the screenshot design for the primary UI but buttons could be added if needed.
                                For now, following the screenshot structure which is cleaner.
                             */}
                        </div>

                        {/* Login Form */}
                        {isLogin ? (
                            <div className="login-form">
                                <h3 className="mb-4 fw-bold text-dark">Login</h3>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Email</label>
                                        <input type="email" className="form-control p-3" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Password</label>
                                        <input type="password" className="form-control p-3" placeholder="Enter your password" />
                                    </div>
                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <div className="form-check">
                                            <input type="checkbox" className="form-check-input" id="rememberMe" />
                                            <label className="form-check-label text-muted" htmlFor="rememberMe">Remember me</label>
                                        </div>
                                    </div>

                                    <div className="d-flex justify-content-between align-items-center mb-4">
                                        <a href="#" className="text-primary text-decoration-none">Forgot your password?</a>
                                        <button type="submit" className="btn btn-primary px-4 py-2 fw-bold" style={{ backgroundColor: '#ff5722', borderColor: '#ff5722' }}>Log in</button>
                                    </div>
                                </form>
                                <div className="text-center mt-4">
                                    <p className="text-muted">Don't have an account? <button onClick={toggleForm} className="btn btn-link p-0 text-primary text-decoration-none fw-bold">Register</button></p>
                                </div>
                            </div>
                        ) : (
                            /* Register Form */
                            <div className="register-form">
                                <h3 className="mb-4 fw-bold text-dark">Register</h3>
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Full Name</label>
                                        <input type="text" className="form-control p-3" placeholder="Enter your full name" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Email</label>
                                        <input type="email" className="form-control p-3" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Password</label>
                                        <input type="password" className="form-control p-3" placeholder="Create a password" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label fw-bold">Confirm Password</label>
                                        <input type="password" className="form-control p-3" placeholder="Confirm your password" />
                                    </div>
                                    <div className="d-grid mb-4">
                                        <button type="submit" className="btn btn-primary py-3 fw-bold" style={{ backgroundColor: '#ff5722', borderColor: '#ff5722' }}>Sign Up</button>
                                    </div>
                                </form>
                                <div className="text-center mt-4">
                                    <p className="text-muted">Already have an account? <button onClick={toggleForm} className="btn btn-link p-0 text-primary text-decoration-none fw-bold">Log in</button></p>
                                </div>
                            </div>
                        )}

                        <div className="text-center mt-5">
                            <Link to="/" className="btn btn-primary px-4 py-2" style={{ backgroundColor: '#ff5722', borderColor: '#ff5722' }}>Back To Web</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Join;
