import React from 'react';
import type { SubmitButtonProps } from '../types/auth.types';

export const SubmitButton: React.FC<SubmitButtonProps> = ({ loading }) => {
    return (
        <button
            type="submit"
            disabled={loading}
            className="w-full flex justify-center rounded-md bg-blue-700 text-white hover:bg-blue-800 disabled:opacity-50 py-3 px-4 font-medium transition-colors"
        >
            {loading ? 'Вход...' : 'Войти'}
        </button>
    );
};