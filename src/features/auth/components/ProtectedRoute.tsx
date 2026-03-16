import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const location = useLocation();

    const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');
    
    if (!token) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};