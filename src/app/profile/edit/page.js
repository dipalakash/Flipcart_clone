"use client";

import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";

export default function EditProfilePage() {
    return (
        <>
            {/* <Navbar /> */}
            <div className="container mx-auto px-4 py-16 max-w-md">
                <h1 className="text-2xl font-bold mb-6">Edit Profile</h1>
                <div className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium mb-1">Full Name</label>
                        <input
                            type="text"
                            defaultValue="Dipal"
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Mobile Number</label>
                        <input
                            type="text"
                            defaultValue="9428556877"
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium mb-1">Email</label>
                        <input
                            type="email"
                            placeholder="Add Email"
                            className="w-full border rounded p-2"
                        />
                    </div>
                    <Button className="w-full bg-pink-500 hover:bg-pink-600">
                        Save Details
                    </Button>
                </div>
            </div>
        </>
    );
}
