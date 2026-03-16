import React from 'react';
import { Icon } from '../../../shared/components/Icon';

interface FormFieldProps {
    id: string;
    name: string;
    type: string;
    label: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    icon: 'user' | 'lock';
    showClear?: boolean;
    onClear?: () => void;
    showToggle?: boolean;
    onToggle?: () => void;
    toggleIcon?: 'eye' | 'eye_closed';
}

export const FormField: React.FC<FormFieldProps> = ({
    id,
    name,
    type,
    label,
    value,
    onChange,
    icon,
    showClear,
    onClear,
    showToggle,
    onToggle,
    toggleIcon,
}) => {
    return (
        <div>
            <label htmlFor={id} className="text-gray-800 text-lg font-medium mb-1">
                {label}
            </label>
            <div className="relative">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                    <Icon name={icon} size={20} />
                </div>
                
                <input
                    id={id}
                    name={name}
                    type={type}
                    value={value}
                    onChange={onChange}
                    className="mt-1 block w-full px-3 py-2 pl-10 border rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 pr-10"
                    placeholder={label}
                />
                
                {showClear && value && onClear && (
                    <button
                        type="button"
                        onClick={onClear}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <Icon name="cross" size={20} />
                    </button>
                )}
                
                {showToggle && onToggle && toggleIcon && (
                    <button
                        type="button"
                        onClick={onToggle}
                        className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                        <Icon name={toggleIcon} size={20} />
                    </button>
                )}
            </div>
        </div>
    );
};