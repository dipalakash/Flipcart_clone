import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET || "flippy_secret_key_change_me";

export async function GET() {
    try {
        const cookieStore = cookies();
        const token = cookieStore.get("auth_token");

        if (!token) {
            return NextResponse.json(
                { message: "Not authenticated" },
                { status: 401 }
            );
        }

        const { value } = token;

        // Verify token
        try {
            const decoded = jwt.verify(value, JWT_SECRET);
            return NextResponse.json({ user: decoded }, { status: 200 });
        } catch (err) {
            return NextResponse.json(
                { message: "Invalid token" },
                { status: 401 }
            );
        }

    } catch (error) {
        console.error("Auth check error:", error);
        return NextResponse.json(
            { message: "Internal server error" },
            { status: 500 }
        );
    }
}
