"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        setLoading(true);

        try {
            const res = await fetch("/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message || "Invalid credentials");
            }

            // Redirect to Home after successful login
            // The cookie will be set automatically by the API response header
            router.push("/");
            router.refresh(); // Refresh page to update any auth state in components
        } catch (err) {
            console.error(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-lg rounded-sm overflow-hidden">

                {/* Top Image Banner */}
                <div className="relative h-40 w-full bg-pink-100">
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-pink-300 text-6xl opacity-50 font-bold">SALE</span>
                    </div>
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-700">
                        UP TO ₹200 OFF
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-6">
                        Login
                    </h2>

                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="border border-gray-300 rounded-sm px-3 py-2 focus-within:border-gray-900 transition-colors">
                            <input
                                type="email"
                                name="email"
                                required
                                className="w-full outline-none text-gray-900 placeholder-gray-400 text-sm font-medium"
                                placeholder="Email Address"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="border border-gray-300 rounded-sm px-3 py-2 focus-within:border-gray-900 transition-colors">
                            <input
                                type="password"
                                name="password"
                                required
                                className="w-full outline-none text-gray-900 placeholder-gray-400 text-sm font-medium"
                                placeholder="Password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>

                        <div className="flex items-start gap-2">
                            <Link href="/forgot-password" class="text-xs text-pink-600 font-bold">Forgot Password?</Link>
                        </div>

                        <button
                            disabled={loading}
                            type="submit"
                            className="w-full bg-pink-600 text-white font-bold py-3 rounded-sm text-sm tracking-wide hover:bg-pink-700 transition-colors uppercase disabled:opacity-50"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-500">
                            New to Flipcart? <Link href="/signup" className="text-pink-600 font-bold">Create an account</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
