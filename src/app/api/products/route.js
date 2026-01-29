import dbConnect from "@/lib/db";
import Product from "@/models/Product";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await dbConnect();

    // Check if products exist, if not seed them
    const count = await Product.countDocuments();

    if (count === 0) {
      const products = [
        /* ---------------- MOBILE ---------------- */
        {
          id: 1,
          name: "Apple iPhone 15",
          price: 79999,
          category: "mobile",
          brand: "Apple",
          ram: "8GB",
          storage: "128GB",
          image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop", // iPhone Black
        },
        {
          id: 2,
          name: "Samsung Galaxy S23",
          price: 69999,
          category: "mobile",
          brand: "Samsung",
          ram: "8GB",
          storage: "256GB",
          image: "https://images.unsplash.com/photo-1610945265078-d86f3d292e01?q=80&w=800&auto=format&fit=crop", // Black Samsung
        },
        {
          id: 3,
          name: "Oppo A57",
          price: 19999,
          category: "mobile",
          brand: "Oppo",
          ram: "6GB",
          storage: "128GB",
          image: "https://images.unsplash.com/photo-1598331668826-20cecc596b86?q=80&w=800&auto=format&fit=crop", // Greenish/Blue Phone
        },
        {
          id: 4,
          name: "Vivo V29",
          price: 29999,
          category: "mobile",
          brand: "Vivo",
          ram: "8GB",
          storage: "256GB",
          image: "https://images.unsplash.com/photo-1567581935884-3349723552ca?q=80&w=800&auto=format&fit=crop", // Slim Mobile
        },

        /* ---------------- LAPTOP ---------------- */
        {
          id: 5,
          name: "MacBook Air M1",
          price: 99999,
          category: "laptop",
          brand: "Apple",
          ram: "8GB",
          processor: "M1",
          screen: "13 inch",
          image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca4?q=80&w=800&auto=format&fit=crop", // Apple Laptop
        },
        {
          id: 6,
          name: "HP Pavilion",
          price: 74999,
          category: "laptop",
          brand: "HP",
          ram: "16GB",
          processor: "i5",
          screen: "15.6 inch",
          image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=800&auto=format&fit=crop", // Silver Laptop
        },
        {
          id: 7,
          name: "Dell Inspiron",
          price: 68999,
          category: "laptop",
          brand: "Dell",
          ram: "16GB",
          processor: "i7",
          screen: "15.6 inch",
          image: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?q=80&w=800&auto=format&fit=crop", // Dell Screen
        },

        /* ---------------- ACCESSORIES ---------------- */
        {
          id: 8,
          name: "Sony Headphones",
          price: 2999,
          category: "accessories",
          brand: "Sony",
          type: "Headphone",
          image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop", // Classic Headlines
        },
        {
          id: 9,
          name: "Boat Earbuds",
          price: 1999,
          category: "accessories",
          brand: "Boat",
          type: "Earbuds",
          image: "https://images.unsplash.com/photo-1572569028738-411a29639580?q=80&w=800&auto=format&fit=crop", // Earbuds
        },
      ];

      await Product.insertMany(products);
      console.log("Database seeded with initial products");
    }

    const allProducts = await Product.find({});
    return NextResponse.json(allProducts);

  } catch (error) {
    console.error("Product fetch error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}
