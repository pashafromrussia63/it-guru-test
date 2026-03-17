import React from 'react';
import type { PaginationProps } from '../types/product.types';

export const Pagination: React.FC<PaginationProps> = ({
    currentPage,
    totalPages,
    totalProducts,
    onPageChange,
}) => {
    if (totalPages <= 1) return null;

    const startRange = (currentPage - 1) * 20 + 1;
    const endRange = Math.min(currentPage * 20, totalProducts);

    const getPageNumbers = () => {
        if (totalPages <= 5) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        
        if (currentPage <= 3) {
            return [1, 2, 3, 4, 5];
        }
        
        if (currentPage >= totalPages - 2) {
            return [
                totalPages - 4,
                totalPages - 3,
                totalPages - 2,
                totalPages - 1,
                totalPages,
            ];
        }
        
        return [
            currentPage - 2,
            currentPage - 1,
            currentPage,
            currentPage + 1,
            currentPage + 2,
        ];
    };

    return (
        <div className="w-full my-6 flex items-center justify-between">
            <p className="text-sm text-gray-600">
                Показано {startRange}-{endRange} из {totalProducts}
            </p>
            
            <div className="flex justify-end items-center space-x-2">
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                    &lt;
                </button>
                
                <div className="flex space-x-1">
                    {getPageNumbers().map((pageNum) => (
                        <button
                            key={pageNum}
                            onClick={() => onPageChange(pageNum)}
                            className={`px-3 py-1 border rounded ${
                                currentPage === pageNum 
                                    ? 'bg-blue-600 text-white' 
                                    : 'hover:bg-gray-50'
                            }`}
                        >
                            {pageNum}
                        </button>
                    ))}
                </div>
                
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="px-3 py-1 border rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};