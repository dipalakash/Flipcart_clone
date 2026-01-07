"use client";
import Link from "next/link";

import Navbar from "@/components/Navbar";
import { useCart } from "@/components/CartContext";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function CartPage() {
  const { cart, removeFromCart, clearCart } = useCart();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <>
        <Navbar />
        <div className="max-w-6xl mx-auto p-6">
          <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>
          <p className="text-gray-400">Loading...</p>
        </div>
      </>
    );
  }

  const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <>
      <div className="max-w-6xl mx-auto p-6">
        <h1 className="text-3xl font-extrabold mb-8 flex items-center gap-2">
          🛍️ Your Cart
        </h1>

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-xl text-gray-500">Your cart is empty 😔</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* LEFT LIST OF PRODUCTS */}
            <div className="lg:col-span-2 space-y-6">
              {cart.map((item, i) => (
                <div
                  key={i}
                  className="bg-white shadow-md rounded-xl p-4 flex items-center gap-4 border hover:shadow-lg transition"
                >
                  <Image
                    src={item.image}
                    width={110}
                    height={110}
                    alt={item.name}
                    className="rounded-lg object-contain bg-gray-50 p-2"
                  />

                  <div className="flex-1">
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-orange-600 font-bold text-sm mt-1">
                      ₹{item.price}
                    </p>
                  </div>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-600 font-medium hover:text-red-800"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* RIGHT PRICE SUMMARY CARD */}
            <div className="bg-white shadow-md rounded-xl p-6 border h-fit">
              <h2 className="text-xl font-bold mb-4">Price Summary</h2>
              <div className="flex justify-between mb-3">
                <span className="text-gray-600">Items:</span>
                <span className="font-semibold">{cart.length}</span>
              </div>
              <div className="flex justify-between mb-3">
                <span className="text-gray-600">Total Price:</span>
                <span className="font-semibold">₹{totalPrice}</span>
              </div>
              <div className="flex justify-between mb-6">
                <span className="text-gray-600">Delivery:</span>
                <span className="text-green-600 font-semibold">Free</span>
              </div>

              <Link href="/checkout">
                <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition">
                  Proceed to Checkout
                </button>
              </Link>
              <button
                onClick={clearCart}
                className="w-full mt-4 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
