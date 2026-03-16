import React from 'react';
import type { ErrorStateProps } from '../types/product.types';

export const ErrorState: React.FC<ErrorStateProps> = ({ message }) => {
    return (
        <div className="text-center text-red-600 p-4">
            <p>{message}</p>
            <button 
                onClick={() => window.location.reload()} 
                className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
            >
                Попробовать снова
            </button>
        </div>
    );
};