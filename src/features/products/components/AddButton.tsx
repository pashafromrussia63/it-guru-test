import React from 'react';
import type { AddButtonProps } from '../types/product.types';
import { Icon } from '../../../shared/components/Icon';

export const AddButton: React.FC<AddButtonProps> = ({ onClick }) => {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 flex items-center"
        >
            <Icon name="add" size={22}/>
            <span className='ml-3'>Добавить</span>
        </button>
    );
};