import { useState, useEffect, useCallback } from 'react';
import { productsApi } from '../api/products';
import { useProductStore } from '../store/productStore';
import type { Product, SortField, UseProductsReturn } from '../types/product.types';

const PAGE_SIZE = 20;

export const useProducts = (): UseProductsReturn & { refresh: () => void } => {
    const [products, setProducts] = useState<Product[]>([]);
    const [totalProducts, setTotalProducts] = useState(0);
    const [loading, setLoading] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [searching, setSearching] = useState(false);
    const [error, setError] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const { sortField, sortOrder, setSort, resetSort } = useProductStore();

    const skip = (currentPage - 1) * PAGE_SIZE;

    const fetchProducts = useCallback(async () => {
        setLoading(true);
        setSearching(!!searchQuery);
        
        try {
            let response;
            
            if (searchQuery.trim()) {
                response = await productsApi.search(searchQuery, PAGE_SIZE, skip);
            } else {
                response = await productsApi.getAll(PAGE_SIZE, skip, sortField, sortOrder);
            }
            
            setProducts(response.products);
            setTotalProducts(response.total);
            setTotalPages(Math.ceil(response.total / PAGE_SIZE));
            setError('');
        } catch (err) {
            setError('Failed to load products');
            console.error(err);
        } finally {
            setLoading(false);
            setSearching(false);
        }
    }, [currentPage, sortField, sortOrder, searchQuery, skip]);

    useEffect(() => {
        const timeoutId = setTimeout(fetchProducts, searchQuery ? 500 : 0);
        return () => clearTimeout(timeoutId);
    }, [fetchProducts, searchQuery]);

    useEffect(() => {
        setCurrentPage(1);
    }, [searchQuery, sortField, sortOrder]);

    const refresh = useCallback(() => {
        resetSort();
        setSearchQuery('');
        setCurrentPage(1);
        fetchProducts();
    }, [resetSort, fetchProducts]);

    const handleSort = (field: SortField) => {
        setSort(field);
    };

    const goToPage = (page: number) => {
        if (page >= 1 && page <= totalPages) {
            setCurrentPage(page);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    const getSortIcon = (field: SortField) => {
        if (sortField !== field) return '';
        return sortOrder === 'asc' ? '↑' : '↓';
    };

    return {
        products,
        totalProducts,
        loading,
        searchQuery,
        searching,
        error,
        currentPage,
        totalPages,
        sortField,
        sortOrder,
        setSearchQuery,
        handleSort,
        goToPage,
        getSortIcon,
        refresh,
    };
};