export default function PromoBanner() {
    return (
        <section className="container py-4">
            <div className="relative w-full h-[200px] md:h-[300px] rounded-2xl overflow-hidden shadow-lg group cursor-pointer">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                        backgroundImage:
                            "url('https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?q=80&w=2070&auto=format&fit=crop')",
                    }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center p-4">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-md">
                        BIG SAVINGS DAY
                    </h2>
                    <p className="text-white/90 text-lg md:text-xl font-medium">
                        Flat 20% Off on all Credit Card payments
                    </p>
                    <button className="mt-6 px-6 py-2 bg-white text-black font-bold rounded-full hover:bg-gray-100 transition-colors">
                        Grab Deal
                    </button>
                </div>
            </div>
        </section>
    );
}
