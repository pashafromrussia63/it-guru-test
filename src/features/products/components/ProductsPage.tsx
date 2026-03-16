import { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { AddProductModal } from './AddProductModal';
import { SearchBar } from './SearchBar';
import { ProductsTable } from './ProductsTable';
import { Pagination } from './Pagination';
import { LoadingState } from './LoadingState';
import { ErrorState } from './ErrorState';
import { AddButton } from './AddButton';
import { RefreshButton } from './RefreshButton';
import { useProducts } from '../hooks/useProducts';

export const ProductsPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const {
        products,
        totalProducts,
        loading,
        searchQuery,
        searching,
        error,
        currentPage,
        totalPages,
        setSearchQuery,
        handleSort,
        goToPage,
        getSortIcon,
        refresh,
  } = useProducts();

  if (error) {
        return <ErrorState message={error} />;
  }

  return (
        <div className="w-full px-6">
            <Toaster />

            <div className="mt-6 flex items-end gap-4">
                <h3 className="text-2xl font-bold">Товары</h3>
                <div className="flex-1">
                <SearchBar
                    searchQuery={searchQuery}
                    searching={searching}
                    onSearchChange={setSearchQuery}
                />
            </div>
        </div>

        <div className="mt-6 mb-6 flex justify-end gap-2">
            <RefreshButton onClick={refresh} />
            <AddButton onClick={() => setIsModalOpen(true)} />
        </div>

        {loading ? (
            <LoadingState />
        ) : (
            <ProductsTable
                products={products}
                onSort={handleSort}
                getSortIcon={getSortIcon}
            />
        )}

        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            totalProducts={totalProducts}
            displayedProducts={products.length}
            searchQuery={searchQuery}
            onPageChange={goToPage}
        />

        <AddProductModal
            isOpen={isModalOpen}
            onClose={() => setIsModalOpen(false)}
        />
    </div>
  );
};