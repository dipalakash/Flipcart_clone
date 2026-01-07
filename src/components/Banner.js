"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Banner() {
  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        <Image
          src="/images/banner.jpg"
          alt="Shop Banner"
          fill
          className="object-cover brightness-[0.6]"
          priority
        />
      </motion.div>

      {/* Text Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4 container mx-auto">
        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight drop-shadow-lg"
        >
          Big Season Sale 🎉
        </motion.h1>

        <motion.p
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-lg md:text-2xl opacity-90 max-w-2xl font-light"
        >
          Up to <span className="font-bold text-yellow-400">50% OFF</span> on
          all premium products. Upgrade your lifestyle today.
        </motion.p>

        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8"
        >
          <Link href="/products">
            <Button size="lg" className="text-lg px-8 py-6 rounded-full shadow-xl hover:scale-105 transition-transform">
              Shop Now
            </Button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
