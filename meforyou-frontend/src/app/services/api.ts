import { apiClient } from '../api/client';
import type {
    User,
    EventService,
    HouseRental,
    CarRental,
    Booking,
    UserRole
} from '../types';

export const api = {
    auth: {
        // ... existing auth is handled in AuthContext mostly, but could be moved here
        // for now we stick to what AuthContext uses, or expose these for consistency
        login: (credentials: any) => apiClient.post('/auth/login', credentials),
        register: (data: any) => apiClient.post('/auth/register', data),
        me: () => apiClient.get('/auth/me'),
    },

    events: {
        create: (data: Partial<Booking>) => apiClient.post('/events', data),
        findAll: () => apiClient.get('/events'), // For admin or user history
        findOne: (id: string | number) => apiClient.get(`/events/${id}`),
    },

    services: {
        findAll: async (): Promise<EventService[]> => {
            const data = await apiClient.get('/services');
            // Ensure data structure matches frontend
            return data;
        },
    },

    properties: {
        findAll: async (): Promise<HouseRental[]> => {
            const data = await apiClient.get('/properties');
            // Map backend entity to frontend interface if needed
            return data.map((p: any) => ({
                id: p.property_id,
                title: p.property_name,
                location: `${p.city}, ${p.street_address}`,
                pricePerNight: parseFloat(p.monthly_rent) / 30, // Approx conversion if needed, or use specific field
                bedrooms: p.bedrooms,
                bathrooms: parseFloat(p.bathrooms),
                maxGuests: 4, // Default or add to entity
                image: p.photos_urls?.[0] || '/img/house-1.jpg', // Fallback
                available: p.property_status === 'available',
                amenities: p.amenities ? Object.keys(p.amenities) : [],
            }));
        },
        findOne: (id: string | number) => apiClient.get(`/properties/${id}`),
        lease: (data: any) => apiClient.post('/properties/lease', data),
        findAllLeases: () => apiClient.get('/properties/leases'),
    },

    cars: {
        findAll: async (): Promise<CarRental[]> => {
            const data = await apiClient.get('/cars');
            return data.map((c: any) => ({
                id: c.car_id,
                brand: c.make,
                model: c.model,
                year: c.year,
                pricePerDay: parseFloat(c.daily_rate),
                image: c.photos_urls?.[0] || '/img/car-1.jpg',
                available: c.car_status === 'available',
                features: c.features ? Object.keys(c.features) : [],
                category: c.category?.name?.toLowerCase() || 'economy',
                seats: c.seats,
            }));
        },
        findOne: (id: string | number) => apiClient.get(`/cars/${id}`),
        rent: (data: any) => apiClient.post('/cars/rent', data),
        findAllRentals: () => apiClient.get('/cars/rentals'),
    },

    team: {
        findAll: () => apiClient.get('/team-members'),
    },

    testimonials: {
        findAll: () => apiClient.get('/testimonials'),
    }
};
