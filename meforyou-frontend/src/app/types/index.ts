export type UserRole = 'admin' | 'manager' | 'agent' | 'client';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  phone?: string;
  createdAt: string;
}

export type ServiceType = 'events' | 'car-rental' | 'house-rental';
export type EventType = 'wedding' | 'corporate' | 'birthday' | 'conference' | 'other';

export interface EventService {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'decoration' | 'catering' | 'music' | 'photography' | 'transport' | 'planning' | 'sound' | 'dance';
}

export interface CarRental {
  id: string;
  brand: string;
  model: string;
  year: number;
  pricePerDay: number;
  image: string;
  available: boolean;
  features: string[];
  category: 'economy' | 'luxury' | 'suv' | 'van';
  seats?: number;
  transmission?: string;
  fuelType?: string;
}

export interface HouseRental {
  id: string;
  title: string;
  location: string;
  pricePerNight: number;
  bedrooms: number;
  bathrooms: number;
  maxGuests: number;
  image: string;
  available: boolean;
  amenities: string[];
}

export type PaymentMethod = 'momo' | 'bank-transfer' | 'atm-card' | 'donation';
export type BookingStatus = 'pending' | 'confirmed' | 'completed' | 'cancelled';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

export interface Booking {
  id: string;
  userId: string;
  userName: string;
  serviceType: ServiceType;
  eventType?: EventType;
  services?: string[];
  carId?: string;
  houseId?: string;
  startDate: string;
  endDate: string;
  totalAmount: number;
  status: BookingStatus;
  paymentStatus: PaymentStatus;
  paymentMethod?: PaymentMethod;
  createdAt: string;
  notes?: string;
}

export interface Payment {
  id: string;
  bookingId: string;
  amount: number;
  method: PaymentMethod;
  status: PaymentStatus;
  reference?: string;
  createdAt: string;
}

export interface DonationOption {
  id: string;
  title: string;
  description: string;
  suggestedAmount?: number;
}
