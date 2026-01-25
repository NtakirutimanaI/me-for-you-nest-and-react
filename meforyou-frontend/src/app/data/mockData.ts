import type { EventService, CarRental, HouseRental, DonationOption } from '@/app/types';

export const eventServices: EventService[] = [
  {
    id: 'es-1',
    name: 'Full Wedding Decoration',
    description: 'Complete wedding venue decoration with flowers, lighting, and setup',
    price: 1500,
    category: 'decoration',
  },
  {
    id: 'es-2',
    name: 'Professional DJ & Sound System',
    description: 'High-quality sound system with experienced DJ for your event',
    price: 800,
    category: 'sound',
  },
  {
    id: 'es-3',
    name: 'Wedding Catering Service',
    description: 'Full catering service for up to 200 guests',
    price: 2500,
    category: 'catering',
  },
  {
    id: 'es-4',
    name: 'Professional Photography',
    description: 'Full-day photography coverage with edited photos',
    price: 1200,
    category: 'photography',
  },
  {
    id: 'es-5',
    name: 'Live Music Band',
    description: '4-piece live band for 4 hours',
    price: 1800,
    category: 'music',
  },
  {
    id: 'es-6',
    name: 'Event Planning & Coordination',
    description: 'Full event planning and day-of coordination',
    price: 2000,
    category: 'planning',
  },
  {
    id: 'es-7',
    name: 'Guest Transportation',
    description: 'Shuttle service for guests',
    price: 600,
    category: 'transport',
  },
  {
    id: 'es-8',
    name: 'Professional Dance Team',
    description: 'Choreographed dance performances',
    price: 1000,
    category: 'dance',
  },
];

export const carRentals: CarRental[] = [
  {
    id: 'car-1',
    brand: 'Mercedes-Benz',
    model: 'S-Class',
    year: 2023,
    pricePerDay: 250,
    image: 'https://images.unsplash.com/photo-1762602671608-06e044a71448?w=800',
    available: true,
    features: ['Leather Seats', 'GPS', 'Bluetooth', 'Sunroof', 'Automatic'],
    category: 'luxury',
  },
  {
    id: 'car-2',
    brand: 'Toyota',
    model: 'Land Cruiser',
    year: 2023,
    pricePerDay: 180,
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=800',
    available: true,
    features: ['4WD', 'GPS', '7 Seats', 'Bluetooth', 'Automatic'],
    category: 'suv',
  },
  {
    id: 'car-3',
    brand: 'Toyota',
    model: 'Hiace Van',
    year: 2022,
    pricePerDay: 120,
    image: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?w=800',
    available: true,
    features: ['14 Seats', 'Air Conditioning', 'Bluetooth', 'Manual'],
    category: 'van',
  },
  {
    id: 'car-4',
    brand: 'Honda',
    model: 'Accord',
    year: 2023,
    pricePerDay: 80,
    image: 'https://images.unsplash.com/photo-1590362891991-f776e747a588?w=800',
    available: true,
    features: ['Fuel Efficient', 'GPS', 'Bluetooth', 'Automatic'],
    category: 'economy',
  },
  {
    id: 'car-5',
    brand: 'BMW',
    model: '7 Series',
    year: 2023,
    pricePerDay: 300,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=800',
    available: true,
    features: ['Luxury Interior', 'GPS', 'Massage Seats', 'Automatic'],
    category: 'luxury',
  },
  {
    id: 'car-6',
    brand: 'Toyota',
    model: 'Corolla',
    year: 2023,
    pricePerDay: 60,
    image: 'https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?w=800',
    available: true,
    features: ['Fuel Efficient', 'Bluetooth', 'Air Conditioning', 'Automatic'],
    category: 'economy',
  },
];

export const houseRentals: HouseRental[] = [
  {
    id: 'house-1',
    title: 'Luxury Villa in Kigali',
    location: 'Kacyiru, Kigali',
    pricePerNight: 300,
    bedrooms: 5,
    bathrooms: 4,
    maxGuests: 10,
    image: 'https://images.unsplash.com/photo-1762295538792-03fac7348c63?w=800',
    available: true,
    amenities: ['Swimming Pool', 'Garden', 'WiFi', 'Security', 'Parking', 'Kitchen'],
  },
  {
    id: 'house-2',
    title: 'Modern Apartment Downtown',
    location: 'Kimihurura, Kigali',
    pricePerNight: 150,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800',
    available: true,
    amenities: ['WiFi', 'Security', 'Parking', 'Kitchen', 'Gym', 'Balcony'],
  },
  {
    id: 'house-3',
    title: 'Cozy Family House',
    location: 'Nyarutarama, Kigali',
    pricePerNight: 200,
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800',
    available: true,
    amenities: ['Garden', 'WiFi', 'Security', 'Parking', 'Kitchen', 'BBQ Area'],
  },
  {
    id: 'house-4',
    title: 'Lake View Cottage',
    location: 'Gisenyi, Western Province',
    pricePerNight: 180,
    bedrooms: 3,
    bathrooms: 2,
    maxGuests: 6,
    image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800',
    available: true,
    amenities: ['Lake Access', 'WiFi', 'Kitchen', 'Fireplace', 'Parking'],
  },
  {
    id: 'house-5',
    title: 'Executive Penthouse',
    location: 'Kigali Heights',
    pricePerNight: 400,
    bedrooms: 4,
    bathrooms: 3,
    maxGuests: 8,
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800',
    available: true,
    amenities: ['Rooftop Terrace', 'WiFi', 'Security', 'Parking', 'Kitchen', 'Gym', 'City View'],
  },
  {
    id: 'house-6',
    title: 'Budget-Friendly Studio',
    location: 'Remera, Kigali',
    pricePerNight: 80,
    bedrooms: 1,
    bathrooms: 1,
    maxGuests: 2,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800',
    available: true,
    amenities: ['WiFi', 'Kitchen', 'Parking'],
  },
];

export const donationOptions: DonationOption[] = [
  {
    id: 'don-1',
    title: 'Support Community Events',
    description: 'Help us organize free community events and celebrations',
    suggestedAmount: 50,
  },
  {
    id: 'don-2',
    title: 'Youth Programs',
    description: 'Support youth cultural and arts programs',
    suggestedAmount: 100,
  },
  {
    id: 'don-3',
    title: 'General Support',
    description: 'General donation to support Me For You initiatives',
  },
];

// Initialize localStorage with mock data if empty
export function initializeMockData() {
  if (!localStorage.getItem('eventServices')) {
    localStorage.setItem('eventServices', JSON.stringify(eventServices));
  }
  if (!localStorage.getItem('carRentals')) {
    localStorage.setItem('carRentals', JSON.stringify(carRentals));
  }
  if (!localStorage.getItem('houseRentals')) {
    localStorage.setItem('houseRentals', JSON.stringify(houseRentals));
  }
  if (!localStorage.getItem('bookings')) {
    localStorage.setItem('bookings', JSON.stringify([]));
  }
  if (!localStorage.getItem('payments')) {
    localStorage.setItem('payments', JSON.stringify([]));
  }
  // Create default admin user if no users exist
  const users = JSON.parse(localStorage.getItem('users') || '[]');
  if (users.length === 0) {
    const defaultAdmin = {
      id: 'user-admin',
      name: 'Admin User',
      email: 'admin@meforyou.org',
      password: 'admin123',
      role: 'admin',
      phone: '+250788000000',
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem('users', JSON.stringify([defaultAdmin]));
  }
}
