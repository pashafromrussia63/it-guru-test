import React from 'react';

export const LoginHeader: React.FC = () => {
    return (
        <div>
            <h1 className="text-4xl lg:text-[40px] font-semibold text-center whitespace-nowrap">
                Добро пожаловать!
            </h1>
            <p className="text-gray-300 text-lg mt-3 text-center font-medium">
                Пожалуйста, авторизуйтесь
            </p>
        </div>
    );
};