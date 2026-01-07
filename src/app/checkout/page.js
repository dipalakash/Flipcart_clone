"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function CheckoutPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    localStorage.setItem("checkout-address", JSON.stringify(form));
    router.push("/payment");
  };

  return (
    <>
      <div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-md rounded-xl">
        <h1 className="text-3xl font-bold mb-6">Shipping Address</h1>

        <div className="space-y-4">
          {["name", "address", "phone", "email"].map((field) => (
            <input
              key={field}
              name={field}
              placeholder={field.toUpperCase()}
              onChange={handleChange}
              className="w-full p-3 border rounded-lg"
            />
          ))}

          <button
            onClick={handleNext}
            className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition"
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </>
  );
}
