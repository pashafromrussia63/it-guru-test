import React from 'react';
import { LoginHeader } from './LoginHeader';
import { FormField } from './FormField';
import { ErrorMessage } from './ErrorMessage';
import { RememberMeCheckbox } from './RememberMeCheckbox';
import { SubmitButton } from './SubmitButton';
import { useLogin } from '../hooks/useLogin';

export const LoginForm: React.FC = () => {
    const {
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
    } = useLogin();

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-12">
            <LoginHeader />

            <form className="mt-8 space-y-6 w-full max-w-md" onSubmit={handleSubmit}>
                <div className="space-y-4">
                    <FormField
                        id="username"
                        name="username"
                        type="text"
                        label="Логин"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        icon="user"
                        showClear={true}
                        onClear={clearUsername}
                    />

                    <FormField
                        id="password"
                        name="password"
                        type={showPassword ? 'text' : 'password'}
                        label="Пароль"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        icon="lock"
                        showToggle={true}
                        onToggle={() => setShowPassword(!showPassword)}
                        toggleIcon={showPassword ? 'eye' : 'eye_closed'}
                    />

                    <ErrorMessage message={error} />
                    <RememberMeCheckbox />
                </div>

                <SubmitButton loading={loading} />
            </form>
        </div>
    );
};