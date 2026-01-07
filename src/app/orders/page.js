"use client";

import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

export default function OrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(stored);
  }, []);

  return (
    <>
   

      <div className="max-w-4xl mx-auto mt-10 p-4">
        <h1 className="text-3xl font-bold mb-6">Your Orders</h1>

        {orders.length === 0 ? (
          <p>You have no orders.</p>
        ) : (
          orders.map((o) => (
            <div key={o.id} className="border p-4 rounded-xl mb-4 bg-white">
              <h2 className="text-xl font-semibold">Order #{o.id}</h2>
              <p className="text-gray-600">Date: {o.date}</p>
              <p className="font-semibold mt-2">Total: ₹{o.total}</p>

              <div className="mt-3">
                {o.items.map((i) => (
                  <p key={i.id} className="text-sm">
                    • {i.name} — ₹{i.price}
                  </p>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
    </>
  );
}
