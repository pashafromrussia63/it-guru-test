import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { ProductStore } from '../types/product.types';

export const useProductStore = create<ProductStore>()(
    persist(
        (set) => ({
            sortField: 'title',
            sortOrder: 'asc',
            
            setSort: (field) => set((state) => {
                if (state.sortField === field) {
                    return {
                        sortField: field,
                        sortOrder: state.sortOrder === 'asc' ? 'desc' : 'asc'
                    };
                }
                return {
                    sortField: field,
                    sortOrder: 'asc'
                };
            }),

            resetSort: () => set({ 
                sortField: 'title', 
                sortOrder: 'asc' 
            }),
        }),
        {
            name: 'product-store',
        }
    )
);