import { Outlet } from 'react-router';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BookingModal } from '../components/BookingModal';
import { AuthProvider } from '../context/AuthContext';
import { CurrencyProvider } from '../context/CurrencyContext';
import { LanguageProvider } from '../context/LanguageContext';
import { useEffect } from 'react';
import { initializeMockData } from '../data/mockData';

export function Root() {
  useEffect(() => {
    initializeMockData();
  }, []);

  return (
    <LanguageProvider>
      <AuthProvider>
        <CurrencyProvider>
          <div className="d-flex flex-column min-vh-100 bg-white">
            <BookingModal />
            <Navigation />
            <main className="flex-grow-1">
              <Outlet />
            </main>
            <Footer />
          </div>
        </CurrencyProvider>
      </AuthProvider>
    </LanguageProvider>
  );
}
