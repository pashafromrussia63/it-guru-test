import React from 'react';
import type { AddButtonProps } from '../types/product.types';

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
        >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
            Добавить
        </button>
    );
};