"use client";

import { useEffect, useState } from "react";

const OFFERS = [
    {
        id: 1,
        title: "IPHONE SALE",
        text: "Refurbished iPhones starting @ ₹15,999",
        image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 2,
        title: "INSTANT CASH",
        text: "Sell your old phone & get instant cash!",
        image: "https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2000&auto=format&fit=crop",
    },
    {
        id: 3,
        title: "WELCOME OFFER",
        text: "Extra ₹500 off for new users. Code: WELCOME500",
        image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=2000&auto=format&fit=crop",
    },
];

export default function OffersCarousel() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev === OFFERS.length - 1 ? 0 : prev + 1));
        }, 4000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="container py-8">
            <h3 className="text-xl font-bold mb-6 text-foreground/80">Exclusive Offers</h3>
            <div className="relative w-full h-[180px] md:h-[220px] rounded-xl overflow-hidden shadow-lg bg-gray-900">

                {OFFERS.map((offer, index) => (
                    <div
                        key={offer.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
                            }`}
                    >
                        {/* Background Image */}
                        <div
                            className={`absolute inset-0 bg-cover bg-center transition-transform duration-1000 ease-linear ${index === current ? "scale-105" : "scale-100"
                                }`}
                            style={{ backgroundImage: `url(${offer.image})` }}
                        />

                        {/* Dark Overlay */}
                        <div className="absolute inset-0 bg-black/60" />

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
                            <span className="text-yellow-400 font-bold tracking-widest text-sm md:text-base mb-2">
                                {offer.title}
                            </span>
                            <h4 className="text-2xl md:text-3xl font-extrabold text-white tracking-wide max-w-2xl drop-shadow-md">
                                {offer.text}
                            </h4>
                            <button className="mt-4 px-5 py-2 border border-white/30 hover:border-white text-white rounded-full text-sm font-medium transition-all hover:bg-white hover:text-black">
                                View Details
                            </button>
                        </div>
                    </div>
                ))}

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                    {OFFERS.map((_, i) => (
                        <div
                            key={i}
                            className={`h-1.5 rounded-full transition-all duration-300 ${i === current ? 'w-6 bg-white' : 'w-2 bg-white/40'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
