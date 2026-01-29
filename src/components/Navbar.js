"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useCart } from "@/components/CartContext";
import { useWishlist } from "@/components/WishlistContext";
import { User, Heart, ShoppingBag, Search } from "lucide-react";

export default function Navbar() {
  const { cart } = useCart();
  const { wishlist } = useWishlist();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [search, setSearch] = useState("");
  const [mounted, setMounted] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const timeoutRef = useRef(null);

  // Check Auth State on Mount
  useEffect(() => {
    setMounted(true);
    setSearch(searchParams.get("search") || "");
    checkUser();
  }, [searchParams]);

  const checkUser = async () => {
    try {
      const res = await fetch("/api/auth/me");
      if (res.ok) {
        const data = await res.json();
        setUser(data.user);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error("Failed to fetch user", error);
      setUser(null);
    }
  };

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 200);
  };

  const handleLogout = async () => {
    try {
      await fetch("/api/auth/logout", { method: "POST" });
      setUser(null);
      router.push("/login");
      router.refresh();
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  // ENTER → redirect to products page
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      const query = search.trim();
      router.push(
        query
          ? `/products?search=${encodeURIComponent(query)}`
          : "/products"
      );
    }
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <span className="text-3xl font-extrabold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent">
            MyShop
          </span>
        </Link>

        {/* CATEGORIES */}
        <div className="hidden md:flex gap-8 font-bold text-sm text-gray-700 uppercase tracking-wide">
          <Link href="/products/mobile" className="hover:border-b-4 hover:border-pink-500 py-4">
            Mobile
          </Link>
          <Link href="/products/laptop" className="hover:border-b-4 hover:border-pink-500 py-4">
            Laptop
          </Link>
          <Link href="/products/accessories" className="hover:border-b-4 hover:border-pink-500 py-4">
            Accessories
          </Link>
        </div>

        {/* SEARCH */}
        <div className="hidden md:flex items-center bg-gray-100 rounded-md px-4 py-2 w-[400px]">
          <Search className="w-4 h-4 text-gray-500 mr-3" />
          <input
            type="text"
            placeholder="Search for products, brands and more"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={handleKeyDown}
            className="bg-transparent outline-none w-full text-sm"
          />
        </div>

        {/* RIGHT ICONS */}
        <div className="flex items-center gap-6">

          {/* PROFILE */}
          <div
            className="relative cursor-pointer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex flex-col items-center gap-1">
              <User className={`w-5 h-5 ${user ? "text-pink-600" : "text-gray-700"}`} />
              <span className={`text-xs font-bold ${user ? "text-pink-600" : ""}`}>
                {user ? "Profile" : "Login"}
              </span>
            </div>

            {dropdownOpen && (
              <div className="absolute right-0 top-full mt-1 w-[280px] bg-white shadow-xl border border-gray-100 z-50 rounded-sm overflow-hidden">
                {user ? (
                  <>
                    <div className="p-4 border-b bg-gray-50">
                      <p className="text-sm font-bold text-gray-900">Hello, {user.name || "User"}</p>
                      <p className="text-xs text-gray-500 mt-1">{user.email}</p>
                    </div>
                    <ul className="py-2 text-sm text-gray-600">
                      <li>
                        <Link href="/orders" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Link href="/wishlist" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">
                          Wishlist
                        </Link>
                      </li>
                      <li>
                        <Link href="/contact" className="block px-4 py-2 hover:bg-pink-50 hover:text-pink-600">
                          Contact Us
                        </Link>
                      </li>
                      <li className="border-t my-1"></li>
                      <li>
                        <button
                          onClick={handleLogout}
                          className="w-full text-left px-4 py-2 hover:bg-pink-50 hover:text-pink-600 text-red-500 font-medium"
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </>
                ) : (
                  <div className="p-4 flex flex-col gap-3">
                    <p className="text-sm text-gray-600 mb-1">Access your account</p>
                    <Link href="/login">
                      <button className="w-full bg-pink-600 text-white font-bold py-2 rounded-sm text-sm hover:bg-pink-700 transition-colors">
                        Login
                      </button>
                    </Link>
                    <div className="text-xs text-center text-gray-500">
                      New here? <Link href="/signup" className="text-pink-600 font-bold hover:underline">Sign up</Link>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* ❤️ WISHLIST */}
          <Link href="/wishlist" className="flex flex-col items-center gap-1 relative group">
            <Heart className="w-5 h-5 text-gray-700 group-hover:text-pink-500" />
            <span className="text-xs font-bold group-hover:text-pink-500">
              Wishlist
            </span>

            {mounted && wishlist.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {wishlist.length}
              </span>
            )}
          </Link>

          {/* 🛒 CART */}
          <Link href="/cart" className="flex flex-col items-center gap-1 relative group">
            <ShoppingBag className="w-5 h-5 text-gray-700 group-hover:text-pink-500" />
            <span className="text-xs font-bold group-hover:text-pink-500">
              Bag
            </span>

            {mounted && cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-pink-500 text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                {cart.length}
              </span>
            )}
          </Link>

        </div>
      </div>
    </nav>
  );
}
