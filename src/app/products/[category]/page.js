"use client";

import { useEffect, useState, useMemo } from "react";
import { useParams, useSearchParams } from "next/navigation";
import ProductCard from "@/components/productCard";
import Link from "next/link";
import FilterSidebar from "@/components/FilterSidebar";
import Breadcrumb from "@/components/Breadcrumb";
import SortBy from "@/components/SortBy";
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

  // 🔥 Sorting
  const [sortBy, setSortBy] = useState("popularity");

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
    let result = allProducts.filter((product) => {
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

    // 3️⃣ Sorting Logic
    if (sortBy === "price_low_high") {
      result.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price_high_low") {
      result.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      result.sort((a, b) => b.id - a.id); // Assuming higher ID is newer
    }
    // "popularity" is default (array order or explicit popularity field if existed)

    return result;
  }, [allProducts, category, selectedFilters, sortBy]);

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
      <Breadcrumb category={category} />

      <div className="flex flex-col md:flex-row items-baseline justify-between mb-6">
        <h1 className="text-3xl font-bold capitalize">
          {category} Products
          <span className="text-base font-normal text-muted-foreground ml-2">
            (Showing {pagination.pageIndex * pagination.pageSize + 1} - {Math.min((pagination.pageIndex + 1) * pagination.pageSize, filteredProducts.length)} of {filteredProducts.length} products)
          </span>
        </h1>

        <SortBy currentSort={sortBy} onSortChange={setSortBy} />
      </div>

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
