import { Outlet, useLocation } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { AdminSidebar } from '../components/AdminSidebar';
import { BookingModal } from '../components/BookingModal';
import { ScrollToTop } from '../components/ScrollToTop';
import { AuthProvider, useAuth } from '../context/AuthContext';
import { CurrencyProvider } from '../context/CurrencyContext';
import { LanguageProvider } from '../context/LanguageContext';
import { useEffect } from 'react';
import { initializeMockData } from '../data/mockData';

function LayoutWrapper() {
  const location = useLocation();
  const { user, isAuthenticated } = useAuth();

  const isDashboardRoute = (location.pathname.startsWith('/dashboard') ||
    location.pathname.startsWith('/content-manager') ||
    location.pathname.startsWith('/bookings') ||
    location.pathname.startsWith('/profile')) &&
    isAuthenticated &&
    (user?.role === 'admin' || user?.role === 'manager');

  return (
    <div className="d-flex flex-column min-vh-100 bg-white">
      <BookingModal />
      <Navigation />
      <AdminSidebar />
      <main
        className="flex-grow-1"
        style={{
          paddingTop: '85px',
          paddingLeft: isDashboardRoute ? '260px' : '0',
          transition: 'padding-left 0.3s ease'
        }}
      >
        <Outlet />
      </main>
      {!isDashboardRoute && <Footer />}
      <ScrollToTop />
    </div>
  );
}

export function Root() {
  useEffect(() => {
    initializeMockData();
  }, []);

  return (
    <LanguageProvider>
      <AuthProvider>
        <CurrencyProvider>
          <LayoutWrapper />
        </CurrencyProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
