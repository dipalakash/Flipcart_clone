"use client";

import Navbar from "@/components/Navbar";
import { useCart } from "@/components/CartContext";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function PaymentPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // Fake payment success
  const handleFakePayment = () => {
    const address = JSON.parse(localStorage.getItem("checkout-address"));

    const order = {
      id: Date.now(),
      items: cart,
      total: totalPrice,
      address,
      paymentMethod: "Fake Payment",
      date: new Date().toLocaleString(),
    };

    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    storedOrders.push(order);
    localStorage.setItem("orders", JSON.stringify(storedOrders));

    clearCart();
    router.push("/order-confirmation");
  };

  return (
    <>
      <div className="max-w-3xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
        <h1 className="text-3xl font-bold mb-6">Payment</h1>

        <p className="text-xl font-semibold mb-4">
          Total Amount: <span className="text-green-600">₹{totalPrice}</span>
        </p>

        <button
          onClick={handleFakePayment}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 mb-5"
        >
          Pay Using Fake Payment
        </button>

        {/* Razorpay Real Payment */}
        <button
          onClick={() => alert("Razorpay integration coming next!")}
          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800"
        >
          Pay Using Razorpay
        </button>
      </div>
    </>
  );
}
