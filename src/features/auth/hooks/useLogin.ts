
import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authApi } from '../api/auth';
import { setSession } from '../../../shared/auth/session';

export const useLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const from = location.state?.from?.pathname || '/products';

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        setError('');

        const rememberMe = (e.currentTarget.rememberMe as HTMLInputElement)?.checked || false;

        if (!username.trim() || !password) {
            setError('Пожалуйста, введите логин и пароль');
            return;
        }

        setLoading(true);

        try {
            const response = await authApi.login(username, password);
            setSession(
                response.accessToken,
                {
                    id: response.id,
                    username: response.username,
                    firstName: response.firstName,
                    lastName: response.lastName,
                    image: response.image,
                },
                rememberMe,
            );

            navigate(from, { replace: true });
            
        } catch (err: any) {
            const errorMessage = err?.response?.data?.message || 'Invalid username or password';
            setError(errorMessage);
        } finally {
            setLoading(false);
        }
    };

    const clearUsername = () => {
        setUsername('');
    };

    return {
        loading,
        error,
        showPassword,
        username,
        password,
        setShowPassword,
        setUsername,
        setPassword,
        handleSubmit,
        clearUsername,
    };
};