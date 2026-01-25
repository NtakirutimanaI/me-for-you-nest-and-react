import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import type { User, UserRole } from '@/app/types';
import { apiClient } from '@/app/api/client';

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string, role?: UserRole) => Promise<boolean>;
  logout: () => void;
  updateProfile: (updates: Partial<User>) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Initialize from existing token
  useEffect(() => {
    const token = localStorage.getItem('token');
    const storedUser = localStorage.getItem('currentUser');
    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    try {
      const response = await apiClient.post('/auth/login', { email, password });
      const { access_token, user: backendUser } = response;

      // Map backend user to frontend user
      const frontendUser: User = {
        id: backendUser.id,
        name: backendUser.username, // or combine first_name/last_name if available
        email: backendUser.email,
        role: backendUser.user_type as UserRole,
        createdAt: new Date().toISOString() // Backend doesn't return date in the simple response, ideally fetch profile
      };

      localStorage.setItem('token', access_token);
      localStorage.setItem('currentUser', JSON.stringify(frontendUser));
      setUser(frontendUser);
      return true;
    } catch (error) {
      console.error('Login failed:', error);
      return false;
    }
  };

  const register = async (name: string, email: string, password: string, role: UserRole = 'client'): Promise<boolean> => {
    try {
      const nameParts = name.trim().split(' ');
      const firstName = nameParts[0];
      const lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : 'User';

      await apiClient.post('/auth/register', {
        email,
        password,
        username: email, // Use email as username for simplicity
        first_name: firstName,
        last_name: lastName,
        // role is currently hardcoded to CLIENT in backend service, ignoring passed role for security or adjusting backend?
        // Backend AuthService sets user_type: UserType.CLIENT. 
      });

      // Auto login after register
      return await login(email, password);
    } catch (error) {
      console.error('Registration failed:', error);
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('currentUser');
    localStorage.removeItem('token');
  };

  const updateProfile = (updates: Partial<User>) => {
    // This is optimistically updating local state. 
    // Ideally should call a backend endpoint to update profile.
    if (!user) return;

    const updatedUser = { ...user, ...updates };
    setUser(updatedUser);
    localStorage.setItem('currentUser', JSON.stringify(updatedUser));
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated: !!user,
      login,
      register,
      logout,
      updateProfile,
    }}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
}
