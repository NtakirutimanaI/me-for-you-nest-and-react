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
        findAll: () => apiClient.get('/auth/users'),
    },

    events: {
        create: (data: Partial<Booking>) => apiClient.post('/events', data),
        findAll: () => apiClient.get('/events'), // For admin or user history
        findOne: (id: string | number) => apiClient.get(`/events/${id}`),
    },

    services: {
        findAll: async (): Promise<EventService[]> => {
            const data = await apiClient.get('/services');
            return data.map((s: any) => ({
                id: s.id.toString(),
                name: s.title,
                description: s.description,
                price: parseFloat(s.price),
                category: s.category,
                image: s.image_url,
            }));
        },
        create: (data: any) => apiClient.post('/services', data),
        delete: (id: number | string) => apiClient.delete(`/services/${id}`),
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
                image: p.photos_urls && p.photos_urls.length > 0
                    ? (p.photos_urls[0].startsWith('http') ? p.photos_urls[0] : `/${p.photos_urls[0]}`)
                    : '/img/Pic9.jpg',
                available: p.property_status === 'available',
                amenities: p.amenities ? Object.keys(p.amenities) : [],
            }));
        },
        findOne: (id: string | number) => apiClient.get(`/properties/${id}`),
        create: (data: any) => apiClient.post('/properties', data),
        delete: (id: number | string) => apiClient.delete(`/properties/${id}`),
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
                image: c.photos_urls && c.photos_urls.length > 0
                    ? (c.photos_urls[0].startsWith('http') ? c.photos_urls[0] : `/${c.photos_urls[0]}`)
                    : '/img/hero-cars.jpg',
                available: c.car_status === 'available',
                features: c.features ? Object.keys(c.features) : [],
                category: c.category?.category_name?.toLowerCase() || 'economy',
                seats: c.seats || 5,
                transmission: c.transmission || 'Automatic',
                fuelType: c.fuel_type || 'Gasoline',
            }));
        },
        findOne: (id: string | number) => apiClient.get(`/cars/${id}`),
        create: (data: any) => apiClient.post('/cars', data),
        delete: (id: number | string) => apiClient.delete(`/cars/${id}`),
        rent: (data: any) => apiClient.post('/cars/rent', data),
        findAllRentals: () => apiClient.get('/cars/rentals'),
    },

    team: {
        findAll: () => apiClient.get('/team-members'),
        create: (data: any) => apiClient.post('/team-members', data),
        delete: (id: number | string) => apiClient.delete(`/team-members/${id}`),
    },

    testimonials: {
        findAll: () => apiClient.get('/testimonials'),
        create: (data: any) => apiClient.post('/testimonials', data),
        delete: (id: number | string) => apiClient.delete(`/testimonials/${id}`),
    },

    carouselItems: {
        findAll: () => apiClient.get('/carousel-items'),
        create: (data: any) => apiClient.post('/carousel-items', data),
        delete: (id: number | string) => apiClient.delete(`/carousel-items/${id}`),
    },

    facilities: {
        findAll: () => apiClient.get('/facilities'),
        create: (data: any) => apiClient.post('/facilities', data),
        delete: (id: number | string) => apiClient.delete(`/facilities/${id}`),
    },

    partners: {
        findAll: () => apiClient.get('/partners'),
        create: (data: any) => apiClient.post('/partners', data),
        delete: (id: number | string) => apiClient.delete(`/partners/${id}`),
    }
};
