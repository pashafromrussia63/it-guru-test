import React from 'react';

export const LoadingState: React.FC = () => {
    return (
        <div className="flex-1 flex items-center justify-center">
            <div className="text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
                <p className="mt-2 text-gray-600">Загрузка...</p>
            </div>
        </div>
    );
};