import { apiClient } from '../../../shared/api/api';
import type { Product, ProductsResponse } from '../types/product.types';

export const productsApi = {
    getAll: async (limit: number = 30, skip: number = 0, sortBy?: string, order: 'asc' | 'desc' = 'asc') => {
        let url = `/products?limit=${limit}&skip=${skip}`;
        if (sortBy) {
            url += `&sortBy=${sortBy}&order=${order}`;
        }
        const response = await apiClient.get<ProductsResponse>(url);
        return response.data;
    },

    getById: async (id: number) => {
        const response = await apiClient.get<Product>(`/products/${id}`);
        return response.data;
    },

    search: async (query: string, limit: number = 30, skip: number = 0) => {
        const response = await apiClient.get<ProductsResponse>(
            `/products/search?q=${query}&limit=${limit}&skip=${skip}`
        );
        return response.data;
    },

    getByCategory: async (category: string) => {
        const response = await apiClient.get<ProductsResponse>(`/products/category/${category}`);
        return response.data;
    },

    getCategories: async () => {
        const response = await apiClient.get<string[]>('/products/categories');
        return response.data;
    },

    getSorted: async (sortBy: string, order: 'asc' | 'desc' = 'asc') => {
        const response = await apiClient.get<ProductsResponse>(
            `/products?sortBy=${sortBy}&order=${order}&limit=30`
        );
        return response.data;
    }
};