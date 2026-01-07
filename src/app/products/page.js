// // // "use client";

// // // import { useEffect, useState } from "react";
// // // import { useSearchParams } from "next/navigation";
// // // import ProductCard from "@/components/productCard";
// // // import { Button } from "@/components/ui/button";

// // // import {
// // //   useReactTable,
// // //   getCoreRowModel,
// // //   getFilteredRowModel,
// // // } from "@tanstack/react-table";

// // // export default function ProductsPage() {
// // //   const searchParams = useSearchParams();
// // //   const searchQuery = searchParams.get("search") || "";

// // //   const [products, setProducts] = useState([]);
// // //   const [loading, setLoading] = useState(true);

// // //   useEffect(() => {
// // //     async function loadProducts() {
// // //       try {
// // //         const res = await fetch("/api/products");
// // //         const data = await res.json();
// // //         setProducts(data);
// // //       } catch (error) {
// // //         console.error("Failed to load products", error);
// // //       } finally {
// // //         setLoading(false);
// // //       }
// // //     }
// // //     loadProducts();
// // //   }, []);

// // //   // 🔥 TanStack Table using URL search
// // //   const table = useReactTable({
// // //     data: products,
// // //     columns: [
// // //       { accessorKey: "name" },
// // //       { accessorKey: "price" },
// // //     ],
// // //     state: {
// // //       globalFilter: searchQuery,
// // //     },
// // //     getCoreRowModel: getCoreRowModel(),
// // //     getFilteredRowModel: getFilteredRowModel(),
// // //   });

// // //   const rows = table.getRowModel().rows;

// // //   return (
// // //     <div className="container py-8 min-h-screen">
// // //       <h1 className="text-3xl font-bold mb-6">
// // //         Results for "{searchQuery || "All Products"}"
// // //       </h1>

// // //       {loading ? (
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // //           {[...Array(8)].map((_, i) => (
// // //             <div
// // //               key={i}
// // //               className="h-[400px] rounded-xl bg-muted animate-pulse"
// // //             />
// // //           ))}
// // //         </div>
// // //       ) : rows.length === 0 ? (
// // //         <div className="text-center py-12">
// // //           <p className="text-muted-foreground text-lg">
// // //             No products found.
// // //           </p>
// // //           <Button
// // //             variant="link"
// // //             onClick={() => window.location.href = "/products"}
// // //           >
// // //             Clear Search
// // //           </Button>
// // //         </div>
// // //       ) : (
// // //         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// // //           {rows.map((row) => (
// // //             <ProductCard key={row.id} product={row.original} />
// // //           ))}
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }





// // "use client";

// // import { useEffect, useState } from "react";
// // import { useSearchParams } from "next/navigation";
// // import ProductCard from "@/components/productCard";
// // import { Button } from "@/components/ui/button";

// // import {
// //   useReactTable,
// //   getCoreRowModel,
// //   getFilteredRowModel,
// // } from "@tanstack/react-table";

// // export default function ProductsPage() {
// //   const searchParams = useSearchParams();
// //   const searchQuery = searchParams.get("search") || "";

// //   const [products, setProducts] = useState([]);
// //   const [loading, setLoading] = useState(true);

// //   useEffect(() => {
// //     async function loadProducts() {
// //       try {
// //         const res = await fetch("/api/products");
// //         const data = await res.json();
// //         setProducts(data);
// //       } catch (error) {
// //         console.error("Failed to load products", error);
// //       } finally {
// //         setLoading(false);
// //       }
// //     }
// //     loadProducts();
// //   }, []);

// //   // ✅ TanStack table (GLOBAL SEARCH)
// //   const table = useReactTable({
// //     data: products,
// //     columns: [
// //       { accessorKey: "name" },
// //       // { accessorKey: "price" },
// //     ],
// //     state: {
// //       globalFilter: searchQuery,
// //     },
// //     getCoreRowModel: getCoreRowModel(),
// //     getFilteredRowModel: getFilteredRowModel(),
// //   });

// //   const rows = table.getRowModel().rows;

// //   return (
// //     <div className="container py-8 min-h-screen">
// //       <h1 className="text-3xl font-bold mb-6">
// //         {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
// //       </h1>

// //       {loading ? (
// //         <SkeletonGrid />
// //       ) : rows.length === 0 ? (
// //         <EmptyState />
// //       ) : (
// //         <ProductGrid rows={rows} />
// //       )}
// //     </div>
// //   );
// // }

// // /* 🔽 Small reusable UI parts */

// // function SkeletonGrid() {
// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //       {[...Array(8)].map((_, i) => (
// //         <div key={i} className="h-[400px] rounded-xl bg-muted animate-pulse" />
// //       ))}
// //     </div>
// //   );
// // }

// // function EmptyState() {
// //   return (
// //     <div className="text-center py-12">
// //       <p className="text-muted-foreground text-lg">No products found.</p>
// //       <Button variant="link" onClick={() => (window.location.href = "/products")}>
// //         Clear Search
// //       </Button>
// //     </div>
// //   );
// // }

// // function ProductGrid({ rows }) {
// //   return (
// //     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //       {rows.map((row) => (
// //         <ProductCard key={row.id} product={row.original} />
// //       ))}
// //     </div>
// //   );
// // }


// "use client";

// import { useEffect, useState } from "react";
// import { useSearchParams } from "next/navigation";
// import ProductCard from "@/components/productCard";
// import { Button } from "@/components/ui/button";

// import {
//   useReactTable,
//   getCoreRowModel,
//   getFilteredRowModel,
//   getPaginationRowModel,
// } from "@tanstack/react-table";

// export default function ProductsPage() {
//   const searchParams = useSearchParams();
//   const searchQuery = searchParams.get("search") || "";

//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   // 🔥 PAGINATION STATE
//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: 8, // 👈 ek page me 8 products
//   });

//   useEffect(() => {
//     async function loadProducts() {
//       try {
//         const res = await fetch("/api/products");
//         const data = await res.json();
//         setProducts(data);
//       } catch (error) {
//         console.error("Failed to load products", error);
//       } finally {
//         setLoading(false);
//       }
//     }
//     loadProducts();
//   }, []);

//   // 🔥 TANSTACK TABLE WITH PAGINATION
//   const table = useReactTable({
//     data: products,
//     columns: [
//       { accessorKey: "name" },
//       { accessorKey: "price" },
//     ],
//     state: {
//       globalFilter: searchQuery,
//       pagination: pagination,
//     },
//     onPaginationChange: setPagination,
//     getCoreRowModel: getCoreRowModel(),
//     getFilteredRowModel: getFilteredRowModel(),
//     getPaginationRowModel: getPaginationRowModel(),
//   });

//   const rows = table.getRowModel().rows;

//   return (
//     <div className="container py-8 min-h-screen">
//       <h1 className="text-3xl font-bold mb-6">
//         {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
//       </h1>

//       {/* 🔄 LOADING */}
//       {loading ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//           {[...Array(8)].map((_, i) => (
//             <div key={i} className="h-[380px] rounded-xl bg-muted animate-pulse" />
//           ))}
//         </div>
//       ) : rows.length === 0 ? (
//         <div className="text-center py-12">
//           <p className="text-muted-foreground text-lg">
//             No products found.
//           </p>
//           <Button variant="link" onClick={() => (window.location.href = "/products")}>
//             Clear Search
//           </Button>
//         </div>
//       ) : (
//         <>
//           {/* 🧱 PRODUCTS GRID */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {rows.map((row) => (
//               <ProductCard key={row.id} product={row.original} />
//             ))}
//           </div>

//           {/* 🔽 PAGINATION CONTROLS */}
//           <div className="flex items-center justify-center gap-6 mt-10">
//             <button
//               onClick={() => table.previousPage()}
//               disabled={!table.getCanPreviousPage()}
//               className="px-4 py-2 border rounded-lg disabled:opacity-50"
//             >
//               ⬅ Previous
//             </button>

//             <span className="font-medium">
//               Page {table.getState().pagination.pageIndex + 1} of{" "}
//               {table.getPageCount()}
//             </span>

//             <button
//               onClick={() => table.nextPage()}
//               disabled={!table.getCanNextPage()}
//               className="px-4 py-2 border rounded-lg disabled:opacity-50"
//             >
//               Next ➡
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// }

// 



"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductCard from "@/components/productCard";
import { Button } from "@/components/ui/button";

import {
  useReactTable,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";

export default function ProductsPage() {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const [pagination, setPagination] = useState({
    pageIndex: 0,
    pageSize: 4,
  });

  useEffect(() => {
    async function loadProducts() {
      const res = await fetch("/api/products");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    }
    loadProducts();
  }, []);

  const table = useReactTable({
    data: products,
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

  return (
    <div className="container py-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        {searchQuery ? `Results for "${searchQuery}"` : "All Products"}
      </h1>

      {loading ? (
        <GridSkeleton />
      ) : rows.length === 0 ? (
        <div className="text-center py-12">
          <p>No products found.</p>
          <Button
            variant="link"
            onClick={() => (window.location.href = "/products")}
          >
            Clear Search
          </Button>
        </div>
      ) : (
        <>
          <ProductGrid rows={rows} />
          <Pagination table={table} />
        </>
      )}
    </div>
  );
}

/* ---------- reusable UI ---------- */

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
