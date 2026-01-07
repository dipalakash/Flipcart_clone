// "use client";

import { useCart } from "./CartContext";
import { useWishlist } from "./WishlistContext";
// import { useWishlist } from "./WishlistContext"; 
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { Heart } from "lucide-react";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { toggleWishlist, isWishlisted } = useWishlist();

  const wished = isWishlisted(product.id);

  return (
    <Card className="group overflow-hidden flex flex-col h-full transition-all hover:shadow-lg relative">

      {/* ❤️ Wishlist Button (hover like Myntra) */}
      <button
        onClick={() => toggleWishlist(product)}
        className="absolute top-3 right-3 z-10
                   opacity-0 group-hover:opacity-100
                   transition bg-white rounded-full p-2 shadow"
      >
        <Heart
          size={18}
          className={
            wished
              ? "fill-pink-500 text-pink-500"
              : "text-gray-600"
          }
        />
      </button>

      {/* Product Image */}
      <Link href={`/product/${product.id}`} className="block relative aspect-square overflow-hidden bg-secondary/20">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition-transform group-hover:scale-105"
        />
      </Link>

      <CardHeader className="p-4">
        <Link href={`/product/${product.id}`}>
          <CardTitle className="line-clamp-1 text-lg hover:text-primary transition-colors">
            {product.name}
          </CardTitle>
        </Link>
      </CardHeader>

      <CardContent className="p-4 pt-0 flex-grow">
        <p className="text-xl font-bold text-primary">
          ₹{product.price}
        </p>
        {product.description && (
          <p className="text-sm text-muted-foreground mt-2 line-clamp-2">
            {product.description}
          </p>
        )}
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={() => addToCart(product)}
          className="w-full"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
