import React from 'react';
import { formatCategory } from '../../../shared/utils/formatText';
import type { ProductsTableProps } from '../types/product.types';

export const ProductsTable: React.FC<ProductsTableProps> = ({ 
    products, 
    onSort, 
    getSortIcon 
}) => {
    return (
        <div className="w-full overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 table-fixed">
                <thead>
                    <tr className="bg-gray-100">
                        <th 
                            onClick={() => onSort('title')} 
                            className="cursor-pointer px-4 py-2 text-left text-sm text-gray-600 w-[30%]"
                        >
                            Наименование {getSortIcon('title')}
                        </th>
                        <th 
                            onClick={() => onSort('brand')} 
                            className="cursor-pointer px-4 py-2 text-left text-sm text-gray-600 w-[15%]"
                        >
                            Вендор {getSortIcon('brand')}
                        </th>
                        <th 
                            onClick={() => onSort('sku')} 
                            className="cursor-pointer px-4 py-2 text-left text-sm text-gray-600 w-[15%]"
                        >
                            Артикул {getSortIcon('sku')}
                        </th>
                        <th 
                            onClick={() => onSort('rating')} 
                            className="cursor-pointer px-4 py-2 text-left text-sm text-gray-600 w-[10%]"
                        >
                            Оценка {getSortIcon('rating')}
                        </th>
                        <th 
                            onClick={() => onSort('price')} 
                            className="cursor-pointer px-4 py-2 text-left text-sm text-gray-600 w-[10%]"
                        >
                            Цена {getSortIcon('price')}
                        </th>
                        <th 
                            onClick={() => onSort('stock')} 
                            className="cursor-pointer px-4 py-2 text-left text-sm text-gray-600 w-[10%]"
                        >
                            Количество {getSortIcon('stock')}
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {products.length > 0 ? (
                        products.map((product) => (
                            <tr key={product.id} className="border-t border-gray-200 hover:bg-gray-50">{/* No newline */}
                                <td className="px-4 py-2">
                                    <div className="flex items-start gap-2">
                                        <img 
                                            src={product.thumbnail} 
                                            alt={product.title}
                                            className="w-12 h-12 object-cover rounded flex-shrink-0"
                                            loading="lazy"
                                        />
                                        <div className="flex flex-col min-w-0 flex-1">
                                            <div className="font-medium text-gray-900 truncate">
                                                {product.title}
                                            </div>
                                            <div className="text-sm text-gray-500 truncate">
                                                {formatCategory(product.category)}
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-4 py-2 truncate">{product.brand}</td>
                                <td className="px-4 py-2 truncate">{product.sku}</td>
                                <td className="px-4 py-2">
                                    <span className={product.rating < 3 ? 'text-red-600 font-bold' : ''}>
                                        {product.rating.toFixed(1)}/5
                                    </span>
                                </td>
                                <td className="px-4 py-2">${product.price}</td>
                                <td className="px-4 py-2">{product.stock}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={6} className="px-4 py-8 text-center text-gray-500">
                                No products found
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};