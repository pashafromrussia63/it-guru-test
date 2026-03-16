import { apiClient } from '../../../shared/api/api';

export const authApi = {
    login: async (username: string, password: string) => {
        const response = await apiClient.post('/auth/login', {
            username,
            password,
            expiresInMins: 30,
        });

        return response.data;
    }
};