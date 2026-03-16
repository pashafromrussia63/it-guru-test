import React from 'react';

export const RememberMeCheckbox: React.FC = () => {
    return (
        <div className="flex items-center">
            <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="h-4 w-4 text-blue-600 rounded border-gray-300"
            />
            <label htmlFor="rememberMe" className="text-base ml-2">
                Запомнить данные
            </label>
        </div>
    );
};