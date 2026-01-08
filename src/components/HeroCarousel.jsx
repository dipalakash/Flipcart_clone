"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const SLIDES = [
    {
        id: 1,
        image: "https://images.unsplash.com/photo-1598331668826-20cecc596b86?q=80&w=2070&auto=format&fit=crop",
        title: "Premium Refurbished Mobiles",
        subtitle: "Flagship performance. Budget-friendly prices.",
        color: "from-blue-900/80 to-black/30",
    },
    {
        id: 2,
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=2071&auto=format&fit=crop",
        title: "Powerful Laptops",
        subtitle: "Work, play, and create with top-tier machines.",
        color: "from-purple-900/80 to-black/30",
    },
    {
        id: 3,
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=2070&auto=format&fit=crop",
        title: "Immersive Audio",
        subtitle: "Experience sound like never before.",
        color: "from-amber-900/80 to-black/30",
    },
];

export default function HeroCarousel() {
    const [current, setCurrent] = useState(0);

    // Auto-slide logic
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
        }, 3000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrent((prev) => (prev === SLIDES.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrent((prev) => (prev === 0 ? SLIDES.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-[300px] md:h-[400px] lg:h-[500px] overflow-hidden bg-gray-900">
            <AnimatePresence mode="wait">
                <motion.div
                    key={current}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.7 }}
                    className="absolute inset-0"
                >
                    {/* Background Image */}
                    <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${SLIDES[current].image})` }}
                    />

                    {/* Gradient Overlay */}
                    <div
                        className={`absolute inset-0 bg-gradient-to-r ${SLIDES[current].color}`}
                    />

                    {/* Content */}
                    <div className="absolute inset-0 container flex flex-col justify-center items-start text-white p-8 md:p-16">
                        <motion.h2
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 max-w-2xl drop-shadow-lg leading-tight"
                        >
                            {SLIDES[current].title}
                        </motion.h2>

                        <motion.p
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="text-base md:text-xl lg:text-2xl mb-8 text-gray-100 max-w-xl drop-shadow-md"
                        >
                            {SLIDES[current].subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                        >
                            <Button
                                size="lg"
                                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg rounded-full shadow-xl transition-all hover:scale-105"
                            >
                                Shop Now
                            </Button>
                        </motion.div>
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all border border-white/10 hidden md:block"
            >
                <ChevronLeft size={32} />
            </button>

            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/20 hover:bg-black/50 text-white p-3 rounded-full backdrop-blur-sm transition-all border border-white/10 hidden md:block"
            >
                <ChevronRight size={32} />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3">
                {SLIDES.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrent(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 shadow-lg ${index === current
                                ? "bg-white w-8"
                                : "bg-white/50 hover:bg-white/80"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}
