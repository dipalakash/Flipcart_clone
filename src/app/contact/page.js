"use client";

import Navbar from "@/components/Navbar";

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-16 text-center">
                <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
                <p className="text-muted-foreground">
                    For any queries, please reach out to us at support@myshop.com
                </p>
            </div>
        </>
    );
}
