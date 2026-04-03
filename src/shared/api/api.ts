import axios from 'axios';
import { getAuthToken } from '../auth/session';

export const apiClient = axios.create({
    baseURL: 'https://dummyjson.com',
});

apiClient.interceptors.request.use((config) => {
    const token = getAuthToken();

    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
});