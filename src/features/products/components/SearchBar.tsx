import React from 'react';
import type { SearchBarProps } from '../types/product.types';

export const SearchBar: React.FC<SearchBarProps> = ({ 
    searchQuery, 
    searching, 
    onSearchChange 
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(e.target.value);
    };

    return (
        <div className="relative w-full">
            <input
                type="text"
                placeholder="Найти"
                value={searchQuery}
                onChange={handleChange}
                className="w-full p-2 pl-10 border bg-gray-200 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <svg
                className="absolute left-3 top-3.5 h-5 w-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            
            {searching && (
                <div className="absolute right-3 top-3.5">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-solid border-blue-600 border-r-transparent"></div>
                </div>
            )}
        </div>
    );
};