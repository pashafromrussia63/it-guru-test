import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://dummyjson.com',
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('auth_token') || sessionStorage.getItem('auth_token');

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});