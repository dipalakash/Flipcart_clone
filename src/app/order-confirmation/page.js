"use client";

import Link from "next/link";
import Navbar from "@/components/Navbar";

export default function OrderConfirmation() {
  return (
    <>
      <Navbar />
      <div className="max-w-xl mx-auto mt-20 text-center">
        <h1 className="text-4xl font-bold mb-4">🎉 Order Successful!</h1>
        <p className="text-lg mb-6">Thank you for your purchase!</p>

        <Link
          href="/orders"
          className="px-6 py-3 bg-purple-600 text-white rounded-lg"
        >
          View Order History
        </Link>
      </div>
    </>
  );
}
