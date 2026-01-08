"use client";

import Link from "next/link";
import Image from "next/image";

const CATEGORIES = [
    {
        name: "Mobile",
        image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?q=80&w=100&auto=format&fit=crop",
        link: "/products/mobile",
    },
    {
        name: "Laptop",
        image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=100&auto=format&fit=crop",
        link: "/products/laptop",
    },
    {
        name: "Smartwatch",
        image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=100&auto=format&fit=crop",
        link: "/products/accessories",
    },
    {
        name: "Headphones",
        image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=100&auto=format&fit=crop",
        link: "/products/accessories",
    },
    {
        name: "Gaming",
        image: "https://images.unsplash.com/photo-1534488972407-5a4aa1e47d83?q=80&w=100&auto=format&fit=crop",
        link: "/products/laptop",
    },
    {
        name: "Accessories",
        image: "https://images.unsplash.com/photo-1629367494173-c78a56567877?q=80&w=100&auto=format&fit=crop",
        link: "/products/accessories",
    },
];

export default function CategorySection() {
    return (
        <section className="container py-10">
            <h3 className="text-xl font-bold mb-6 text-foreground/80">Shop by Category</h3>
            <div className="flex gap-6 overflow-x-auto pb-4 scrollbar-hide justify-between">
                {CATEGORIES.map((cat, i) => (
                    <Link
                        key={i}
                        href={cat.link}
                        className="flex flex-col items-center gap-3 min-w-[80px] group cursor-pointer"
                    >
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-2 border-transparent group-hover:border-primary transition-all shadow-md">
                            <Image
                                src={cat.image}
                                alt={cat.name}
                                width={100}
                                height={100}
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                        </div>
                        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                            {cat.name}
                        </span>
                    </Link>
                ))}
            </div>
        </section>
    );
}
