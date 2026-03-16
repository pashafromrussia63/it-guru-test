import React, { useState } from 'react';
import toast from 'react-hot-toast';
import type { AddProductModalProps } from '../types/product.types';

export const AddProductModal: React.FC<AddProductModalProps> = ({ 
    isOpen, 
    onClose
}) => {
    const [formData, setFormData] = useState({
        title: '',
        brand: '',
        price: '',
        sku: ''
    });

    if (!isOpen) return null;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        toast.success('Товар успешно добавлен!', {
            duration: 3000,
            position: 'top-right',
            style: {
                background: '#10b981',
                color: '#fff',
                padding: '16px',
                borderRadius: '8px',
            }
        });

        setFormData({ title: '', price: '', brand: '', sku: '' });
        onClose();
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
        <div className="bg-white rounded-lg p-6 w-full max-w-md">
            <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Добавить товар</h2>
            <button
                onClick={onClose}
                className="text-gray-500 hover:text-gray-700"
            >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Наименование
                    </label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите наименование"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Цена
                    </label>
                    <input
                        type="number"
                        name="price"
                        value={formData.price}
                        onChange={handleChange}
                        required
                        min="0"
                        step="0.01"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите цену"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Вендор
                    </label>
                    <input
                        type="text"
                        name="brand"
                        value={formData.brand}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите название вендора"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Артикул
                    </label>
                    <input
                        type="text"
                        name="sku"
                        value={formData.sku}
                        onChange={handleChange}
                        required
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Введите артикул"
                    />
                </div>

                <div className="flex justify-end space-x-2 pt-4">
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 border border-gray-300 rounded text-gray-700 hover:bg-gray-50"
                    >
                        Отменить
                    </button>
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                    >
                        Создать товар
                    </button>
                </div>
            </form>
        </div>
        </div>
    );
};