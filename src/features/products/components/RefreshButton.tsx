import React from 'react';
import type { RefreshButtonProps } from '../types/product.types';
import { Icon } from '../../../shared/components/Icon';

export const RefreshButton: React.FC<RefreshButtonProps> = ({ 
    onClick
}) => {
    return (
        <button
            onClick={onClick}
            className={`mr-2 py-1 px-3 border border-gray-200 text-gray-600 hover:text-blue-600 transition-colors rounded-full hover:bg-gray-100`}
            title="Сбросить сортировку и обновить"
        >
            <Icon name='refresh' size={16}/>
        </button>
    );
};