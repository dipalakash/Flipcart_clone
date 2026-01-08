"use client";

import { useEffect, useState } from "react";
import ProductCard from "@/components/productCard";
import HeroCarousel from "@/components/HeroCarousel";
import CategorySection from "@/components/CategorySection";
import PromoBanner from "@/components/PromoBanner";
import OffersCarousel from "@/components/OffersCarousel";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadProducts() {
      try {
        const res = await fetch("/api/products");
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        setLoading(false);
      }
    }
    loadProducts();
  }, []);

  return (
    <div className="flex flex-col min-h-screen pb-16">
      {/* 1. Hero Banner Carousel */}
      <HeroCarousel />

      {/* 2. Category Images Section */}
      <CategorySection />

      {/* 3. Ad / Promotion Banner */}
      <PromoBanner />

      <main className="container py-12 space-y-8">
        {/* 4. Product Image Grid Header */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Best Selling Products</h2>
            <p className="text-muted-foreground text-sm">Top picks for you updated daily.</p>
          </div>
          <Link href="/products">
            <Button variant="ghost" className="group text-primary">
              View All
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
          </Link>
        </div>

        {/* Product Grid Content */}
        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="h-[400px] rounded-xl bg-muted animate-pulse" />
            ))}
          </div>
        ) : products.length === 0 ? (
          <p className="text-center text-muted-foreground py-12">No products found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.slice(0, 8).map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </main>

      {/* 5. Secondary Carousel (Offers) */}
      <OffersCarousel />
    </div>
  );
}
