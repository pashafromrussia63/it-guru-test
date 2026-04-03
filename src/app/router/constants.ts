import { isAuthenticated as isSessionAuthenticated } from '../../shared/auth/session';

export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    PRODUCTS: '/products',
} as const;

export const isAuthenticated = () => isSessionAuthenticated();