const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

const getToken = () => localStorage.getItem('token');

export const apiClient = {
    get: async (endpoint: string) => {
        const token = getToken();
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'GET',
            headers,
        });
        if (!response.ok) {
            if (response.status === 401) {
                // Optional: Dispatch event or handle logout
                // localStorage.removeItem('token');
                // window.location.href = '/login'; 
            }
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    },
    post: async (endpoint: string, body: any) => {
        const token = getToken();
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'POST',
            headers,
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    },
    patch: async (endpoint: string, body: any) => {
        const token = getToken();
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'PATCH',
            headers,
            body: JSON.stringify(body),
        });
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `Error ${response.status}: ${response.statusText}`);
        }
        return response.json();
    },
    delete: async (endpoint: string) => {
        const token = getToken();
        const headers: HeadersInit = {
            'Content-Type': 'application/json',
        };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }
        const response = await fetch(`${API_URL}${endpoint}`, {
            method: 'DELETE',
            headers,
        });
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        // Delete sometimes returns 204 No Content
        if (response.status === 204) return null;
        return response.json().catch(() => null);
    },
};
