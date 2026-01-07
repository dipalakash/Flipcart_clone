"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingBag, Star, Truck, RefreshCcw } from "lucide-react";
import { useCart } from "@/components/CartContext";
import { useWishlist } from "@/components/WishlistContext";


export default function ProductDetail() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedSize, setSelectedSize] = useState(null);
    const { addToCart } = useCart();
    const { toggleWishlist, isWishlisted } = useWishlist();

    useEffect(() => {
        async function fetchProduct() {
            try {
                // In a real app, you'd fetch a single product by ID
                // For now, we fetch all and find the one we need
                const res = await fetch("/api/products");
                const products = await res.json();
                const found = products.find((p) => p.id === parseInt(id));
                setProduct(found);
            } catch (error) {
                console.error("Error fetching product:", error);
            } finally {
                setLoading(false);
            }
        }
        if (id) {
            fetchProduct();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
            </div>
        );
    }

    if (!product) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center gap-4">
                <h1 className="text-2xl font-bold">Product not found</h1>
                <Button onClick={() => window.history.back()}>Go Back</Button>
            </div>
        );
    }

    const isWished = isWishlisted(product.id);
    const discount = 83; // Mock discount for demo
    const mrp = Math.round(product.price * (100 / (100 - discount)));

    return (
        <>

            <div className="container mx-auto px-4 py-8 mt-16">
                {/* Breadcrumb */}
                <div className="text-sm text-muted-foreground mb-6">
                    Home / {product.category} / {product.brand} / {product.name}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {/* Left Column - Image Gallery */}
                    <div className="flex gap-4">
                        {/* Thumbnails (Hidden on mobile) */}
                        <div className="hidden md:flex flex-col gap-4 w-20">
                            {[...Array(4)].map((_, i) => (
                                <div
                                    key={i}
                                    className={`relative aspect-[3/4] w-full cursor-pointer border-2 ${i === 0 ? 'border-primary' : 'border-transparent hover:border-gray-300'} rounded overflow-hidden`}
                                >
                                    <Image
                                        src={product.image}
                                        alt={`View ${i + 1}`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            ))}
                        </div>

                        {/* Main Image */}
                        <div className="flex-1 relative aspect-[3/4] rounded-lg overflow-hidden bg-secondary/10">
                            <Image
                                src={product.image}
                                alt={product.name}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-500"
                                priority
                            />
                            {/* Rating Badge */}
                            <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded flex items-center gap-1 shadow-sm">
                                <span className="font-bold">4.1</span>
                                <Star className="w-3 h-3 fill-teal-500 text-teal-500" />
                                <span className="text-xs text-muted-foreground border-l border-gray-300 pl-2 ml-1">
                                    2.2k Ratings
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Details */}
                    <div className="flex flex-col">
                        <h1 className="text-2xl font-bold uppercase tracking-wide">{product.brand || "Brand Name"}</h1>
                        <h2 className="text-xl text-muted-foreground mt-1 font-light">{product.name}</h2>

                        {/* Price Section */}
                        <div className="mt-4 flex items-baseline gap-3 border-b pb-6">
                            <span className="text-2xl font-bold">₹{product.price}</span>
                            <span className="text-lg text-muted-foreground line-through">MRP ₹{mrp}</span>
                            <span className="text-lg text-orange-500 font-bold">({discount}% OFF)</span>
                        </div>
                        <p className="text-teal-600 text-sm font-medium mt-2">inclusive of all taxes</p>

                        {/* Size Selection */}
                        <div className="mt-8">
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="font-bold text-sm tracking-wider">SELECT SIZE</h3>
                                <button className="text-primary text-sm font-bold uppercase tracking-wider">Size Chart &gt;</button>
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                {['S', 'M', 'L', 'XL', 'XXL'].map((size) => (
                                    <button
                                        key={size}
                                        onClick={() => setSelectedSize(size)}
                                        className={`w-12 h-12 rounded-full flex items-center justify-center border transition-all
                      ${selectedSize === size
                                                ? 'border-primary text-primary font-bold ring-1 ring-primary'
                                                : 'border-gray-300 hover:border-primary'
                                            }`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-4 mt-8 pb-8 border-b">
                            <Button
                                size="lg"
                                className="flex-1 bg-pink-500 hover:bg-pink-600 text-white font-bold tracking-wide py-6"
                                onClick={() => addToCart(product)}
                            >
                                <ShoppingBag className="mr-2 h-5 w-5" />
                                ADD TO BAG
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="flex-1 font-bold tracking-wide py-6 border-gray-300"
                                onClick={() => toggleWishlist(product)}
                            >
                                <Heart className={`mr-2 h-5 w-5 ${isWished ? "fill-pink-500 text-pink-500" : ""}`} />
                                {isWished ? "WISHLISTED" : "WISHLIST"}
                            </Button>
                        </div>

                        {/* Delivery Options */}
                        <div className="mt-6">
                            <h3 className="font-bold text-sm tracking-wider mb-3">DELIVERY OPTIONS</h3>
                            <div className="flex items-center gap-2 border rounded p-3 max-w-xs">
                                <input
                                    type="text"
                                    placeholder="Enter pincode"
                                    className="flex-1 outline-none bg-transparent text-sm"
                                />
                                <button className="text-pink-500 font-bold text-sm">CHECK</button>
                            </div>
                            <div className="mt-4 space-y-2 text-sm text-gray-600">
                                <div className="flex items-center gap-3">
                                    <Truck className="w-5 h-5" />
                                    <span>Get it by <span className="font-bold text-black">Wed, Oct 18</span></span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RefreshCcw className="w-5 h-5" />
                                    <span>Pay on delivery available</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <RefreshCcw className="w-5 h-5" />
                                    <span>Easy 14 days return & exchange available</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
