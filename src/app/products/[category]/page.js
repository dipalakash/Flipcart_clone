"use client";

import { useEffect, useState, useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";
import ProductCard from "@/components/productCard";
import FilterSidebar from "@/components/FilterSidebar";
import { FILTER_CONFIG } from "@/config/filters";
import { Button } from "@/components/ui/button";

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

export default function CategoryProductsPage() {
  const { category } = useParams();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // 🔥 Selected filters from left sidebar
  const [selectedFilters, setSelectedFilters] = useState({});

  // 🔥 Pagination
  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 4,
  });

  /* ---------------- FETCH PRODUCTS ---------------- */
  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setAllProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  /* ---------------- HANDLE FILTER CHANGE ---------------- */
  const handleFilterChange = (filterName, value) => {
    setSelectedFilters((prev) => {
      const current = prev[filterName] || [];
      return {
        ...prev,
        [filterName]: current.includes(value)
          ? current.filter((v) => v !== value)
          : [...current, value],
      };
    });

    // Myntra behaviour: filter change → page 1
    setPagination((p) => ({ ...p, pageIndex: 0 }));
  };

  /* ---------------- ACTUAL FILTERING LOGIC ---------------- */
  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      // 1️⃣ Category filter (mandatory)
      if (product.category?.toLowerCase() !== category.toLowerCase()) {
        return false;
      }

      // 2️⃣ Sidebar filters (brand, ram, storage, etc.)
      for (const [filterName, values] of Object.entries(selectedFilters)) {
        if (!values.length) continue;

        const productValue = product[filterName];
        if (!productValue || !values.includes(productValue)) {
          return false;
        }
      }

      return true;
    });
  }, [allProducts, category, selectedFilters]);

  /* ---------------- TANSTACK TABLE ---------------- */
  const table = useReactTable({
    data: filteredProducts,
    columns: [
      { accessorKey: "name" },
      { accessorKey: "price" },
    ],
    state: {
      globalFilter: searchQuery,
      pagination,
    },
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const rows = table.getRowModel().rows;

  /* ---------------- UI ---------------- */
  return (
    <div className="container py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {category} Products
      </h1>

      <div className="flex gap-8">
        {/* LEFT SIDEBAR */}
        <FilterSidebar
          filters={FILTER_CONFIG[category] || {}}
          selected={selectedFilters}
          onChange={handleFilterChange}
        />

        {/* RIGHT PRODUCTS */}
        <div className="flex-1">
          {loading ? (
            <GridSkeleton />
          ) : rows.length === 0 ? (
            <div className="text-center py-12">
              <p>No products found in {category}.</p>
              <Button
                variant="link"
                onClick={() => (window.location.href = "/products")}
              >
                View All Products
              </Button>
            </div>
          ) : (
            <>
              <ProductGrid rows={rows} />
              <Pagination table={table} />
            </>
          )}
        </div>
      </div>
    </div>
  );
}

/* ---------------- HELPERS ---------------- */

function ProductGrid({ rows }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {rows.map((row) => (
        <ProductCard key={row.id} product={row.original} />
      ))}
    </div>
  );
}

function GridSkeleton() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="h-[380px] bg-muted animate-pulse rounded-xl"
        />
      ))}
    </div>
  );
}

function Pagination({ table }) {
  return (
    <div className="flex justify-center gap-6 mt-10">
      <button
        onClick={() => table.previousPage()}
        disabled={!table.getCanPreviousPage()}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Previous
      </button>

      <span>
        Page {table.getState().pagination.pageIndex + 1} of{" "}
        {table.getPageCount()}
      </span>

      <button
        onClick={() => table.nextPage()}
        disabled={!table.getCanNextPage()}
        className="px-4 py-2 border rounded disabled:opacity-50"
      >
        Next
      </button>
    </div>
  );
}
