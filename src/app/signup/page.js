"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function SignupPage() {
    const [mobileNumber, setMobileNumber] = useState("");

    return (
        <div className="min-h-screen bg-pink-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full bg-white shadow-lg rounded-sm overflow-hidden">

                {/* Top Image Banner */}
                <div className="relative h-40 w-full bg-pink-100">
                    {/* Replace with actual image if available, using a placeholder for now that looks like the screenshot */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-pink-300 text-6xl opacity-50 font-bold">SALE</span>
                    </div>
                    {/* You can use a real image here like: 
           <Image src="/path/to/banner.jpg" alt="Login Banner" fill className="object-cover" /> 
           */}
                    <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-2 py-1 rounded text-xs font-bold text-gray-700">
                        UP TO ₹200 OFF
                    </div>
                </div>

                {/* Content Section */}
                <div className="p-8">
                    <h2 className="text-xl font-bold text-gray-900 mb-1">
                        Login <span className="text-gray-500 font-normal text-sm">or</span> Signup
                    </h2>

                    <div className="mt-8">
                        <div className="relative border border-gray-300 rounded-sm px-3 py-2 focus-within:border-gray-900 transition-colors">
                            <span className="absolute top-2.5 left-3 text-gray-500 text-sm font-medium">+91</span>
                            <span className="absolute top-2.5 left-10 text-gray-300 text-sm">|</span>
                            <input
                                type="tel"
                                className="w-full pl-10 outline-none text-gray-900 placeholder-gray-400 text-sm font-medium"
                                placeholder="Mobile Number*"
                                value={mobileNumber}
                                onChange={(e) => setMobileNumber(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mt-6 flex items-start gap-2">
                        <p className="text-[11px] text-gray-500 leading-tight">
                            By continuing, I agree to the <Link href="/terms" className="text-pink-600 font-bold">Terms of Use</Link> & <Link href="/privacy" className="text-pink-600 font-bold">Privacy Policy</Link>
                        </p>
                    </div>

                    <button className="mt-6 w-full bg-pink-600 text-white font-bold py-3 rounded-sm text-sm tracking-wide hover:bg-pink-700 transition-colors uppercase">
                        Continue
                    </button>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-gray-500">
                            Have trouble logging in? <Link href="/help" className="text-pink-600 font-bold">Get help</Link>
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
}
