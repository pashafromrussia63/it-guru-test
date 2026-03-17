export interface Product {
    id: number;
    title: string;
    price: number;
    rating: number;
    stock: number;
    brand: string;
    thumbnail: string;
    category: string;
    sku: string;
}

export interface ProductsResponse {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}

export type SortField = 'title' | 'brand' | 'sku' | 'rating' | 'price' | 'stock';
export type SortOrder = 'asc' | 'desc';

export interface SortConfig {
    field: SortField;
    order: SortOrder;
}

export interface ProductsTableProps {
    products: Product[];
    onSort: (field: SortField) => void;
    getSortIcon: (field: SortField) => string;
}

export interface ErrorStateProps {
    message: string;
}

export interface SearchBarProps {
    searchQuery: string;
    searching: boolean;
    onSearchChange: (value: string) => void;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    totalProducts: number;
    displayedProducts: number;
    searchQuery: string;
    onPageChange: (page: number) => void;
}

export interface RefreshButtonProps {
    onClick: () => void;
}

export interface AddButtonProps {
    onClick: () => void;
}

export interface AddProductModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export interface ProductStore {
    sortField: SortField;
    sortOrder: SortOrder;
    setSort: (field: SortField) => void;
    resetSort: () => void;
}

export interface UseProductsReturn {
    products: Product[];
    totalProducts: number;
    loading: boolean;
    searchQuery: string;
    searching: boolean;
    error: string;
    currentPage: number;
    totalPages: number;
    sortField: SortField;
    sortOrder: SortOrder;
    setSearchQuery: (query: string) => void;
    handleSort: (field: SortField) => void;
    goToPage: (page: number) => void;
    getSortIcon: (field: SortField) => string;
    refresh: () => void;
}