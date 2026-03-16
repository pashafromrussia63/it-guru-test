import { Navigate } from 'react-router-dom';
import { LoginForm } from '../../features/auth/components/LoginForm';
import { ProductsPage } from '../../features/products/components/ProductsPage';
import { ProtectedRoute } from '../../features/auth/components/ProtectedRoute';
import { ROUTES, isAuthenticated } from './constants';

export const routes = [
    {
        path: ROUTES.HOME,
        element: isAuthenticated() ? 
            <Navigate to={ROUTES.PRODUCTS} replace /> : 
            <Navigate to={ROUTES.LOGIN} replace />,
    },
    {
        path: ROUTES.LOGIN,
        element: <LoginForm />,
    },
    {
        path: ROUTES.PRODUCTS,
        element: (
            <ProtectedRoute>
                <ProductsPage />
            </ProtectedRoute>
        ),
    },
    {
        path: '*',
        element: <Navigate to={ROUTES.HOME} replace />,
    },
];