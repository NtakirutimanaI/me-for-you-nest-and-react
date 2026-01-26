import { createBrowserRouter } from 'react-router';
import { Root } from './pages/Root';
import { Home } from './pages/Home';
import { EventsPage } from './pages/Events';
import { CarRentalPage } from './pages/CarRental';
import { HouseRentalPage } from './pages/HouseRental';
import { AboutPage } from './pages/About';
import { ContactPage } from './pages/Contact';
import { LoginPage } from './pages/Login';
import { RegisterPage } from './pages/Register';
import { DashboardPage } from './pages/Dashboard';
import { BookingsPage } from './pages/Bookings';
import { PaymentPage } from './pages/Payment';
import { ProfilePage } from './pages/Profile';
import { TeamPage } from './pages/Team';
import { DonationPage } from './pages/Donation';
import { PartnersPage } from './pages/Partners';
import { MorePage } from './pages/More';
import { NotFound } from './pages/NotFound';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: 'events', Component: EventsPage },
      { path: 'car-rental', Component: CarRentalPage },
      { path: 'house-rental', Component: HouseRentalPage },
      { path: 'about', Component: AboutPage },
      { path: 'more', Component: MorePage },
      { path: 'team', Component: TeamPage },
      { path: 'partners', Component: PartnersPage },
      { path: 'contact', Component: ContactPage },
      { path: 'donation', Component: DonationPage },
      { path: 'login', Component: LoginPage },
      { path: 'register', Component: RegisterPage },
      { path: 'dashboard', Component: DashboardPage },
      { path: 'bookings', Component: BookingsPage },
      { path: 'payment/:bookingId', Component: PaymentPage },
      { path: 'profile', Component: ProfilePage },
      { path: '*', Component: NotFound },
    ],
  },
]);
