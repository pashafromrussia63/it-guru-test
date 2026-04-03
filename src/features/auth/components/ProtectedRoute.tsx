import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import type { ProtectedRouteProps } from '../types/auth.types';
import { isAuthenticated } from '../../../shared/auth/session';

export const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
    const location = useLocation();

    if (!isAuthenticated()) {
        return <Navigate to="/" state={{ from: location }} replace />;
    }

    return <>{children}</>;
};