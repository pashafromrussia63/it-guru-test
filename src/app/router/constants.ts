export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    PRODUCTS: '/products',
} as const;

export const isAuthenticated = () => {
    return localStorage.getItem('auth_token') !== null || 
        sessionStorage.getItem('auth_token') !== null;
};