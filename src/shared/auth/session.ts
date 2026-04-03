const AUTH_TOKEN_KEY = 'auth_token';
const USER_DATA_KEY = 'user_data';

export interface AuthUser {
    id: number;
    username: string;
    firstName: string;
    lastName: string;
    image: string;
}

const getAuthStorage = (): Storage | null => {
    if (typeof window === 'undefined') {
        return null;
    }

    if (localStorage.getItem(AUTH_TOKEN_KEY) !== null) {
        return localStorage;
    }

    if (sessionStorage.getItem(AUTH_TOKEN_KEY) !== null) {
        return sessionStorage;
    }

    return null;
};

export const getAuthToken = (): string | null => {
    const storage = getAuthStorage();
    return storage ? storage.getItem(AUTH_TOKEN_KEY) : null;
};

export const isAuthenticated = (): boolean => getAuthToken() !== null;

export const setSession = (token: string, user: AuthUser, rememberMe: boolean): void => {
    const targetStorage = rememberMe ? localStorage : sessionStorage;
    const otherStorage = rememberMe ? sessionStorage : localStorage;

    otherStorage.removeItem(AUTH_TOKEN_KEY);
    otherStorage.removeItem(USER_DATA_KEY);

    targetStorage.setItem(AUTH_TOKEN_KEY, token);
    targetStorage.setItem(USER_DATA_KEY, JSON.stringify(user));
};

export const clearSession = (): void => {
    localStorage.removeItem(AUTH_TOKEN_KEY);
    localStorage.removeItem(USER_DATA_KEY);
    sessionStorage.removeItem(AUTH_TOKEN_KEY);
    sessionStorage.removeItem(USER_DATA_KEY);
};
