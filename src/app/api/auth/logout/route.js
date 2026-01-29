import { NextResponse } from "next/server";
import { serialize } from "cookie";

export async function POST() {
    const response = NextResponse.json(
        { message: "Logged out successfully" },
        { status: 200 }
    );

    // Clear the cookie by setting it to expire immediately
    const serializedCookie = serialize("auth_token", "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        expires: new Date(0), // Expire immediately
        path: "/",
    });

    response.headers.set("Set-Cookie", serializedCookie);

    return response;
}
