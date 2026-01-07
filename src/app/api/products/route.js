// // export async function GET() {
// //   const products = [
// //     { id: 1, name: "Apple iPhone 15", price: 79999, image: "/images/apple.png" },
// //     { id: 2, name: "Samsung S23", price: 69999, image: "/images/samsung.webp" },
// //     { id: 3, name: "Oppo A57", price: 19999, image: "/images/Oppo-A57-4G.png" },
// //     { id: 4, name: "OnePlus 11", price: 55999, image: "/images/apple.png" },
// //     { id: 5, name: "Vivo V29", price: 29999, image: "/images/samsung.webp" },
// //     { id: 6, name: "Realme 11 Pro", price: 24999, image: "/images/Oppo-A57-4G.png" },
// //     { id: 7, name: "Apple iPhone 15", price: 79999, image: "/images/apple.png" },
// //     { id: 8, name: "Samsung S23", price: 69999, image: "/images/samsung.webp" },
// //     { id: 9, name: "Oppo A57", price: 19999, image: "/images/Oppo-A57-4G.png" },
// //     { id: 10, name: "OnePlus 11", price: 55999, image: "/images/apple.png" },
// //     { id: 11, name: "Vivo V29", price: 29999, image: "/images/samsung.webp" },
// //     { id: 12, name: "Realme 11 Pro", price: 24999, image: "/images/Oppo-A57-4G.png" },
// //   ];

// //   return Response.json(products);
// // }

// export async function GET() {
//   const products = [
//     {
//       id: 1,
//       name: "Apple iPhone 15",
//       price: 79999,
//       category: "mobile",
//       image: "/images/apple.png",
//     },
//     {
//       id: 2,
//       name: "Samsung S23",
//       price: 69999,
//       category: "mobile",
//       image: "/images/samsung.webp",
//     },
//     {
//       id: 3,
//       name: "Oppo A57",
//       price: 19999,
//       category: "mobile",
//       image: "/images/Oppo-A57-4G.png",
//     },
//     {
//       id: 4,
//       name: "MacBook Air M1",
//       price: 99999,
//       category: "laptop",
//       image: "/images/macbook.png",
//     },
//     {
//       id: 5,
//       name: "HP Pavilion",
//       price: 74999,
//       category: "laptop",
//       image: "/images/hp.png",
//     },
//     {
//       id: 6,
//       name: "Headphones",
//       price: 2999,
//       category: "accessories",
//       image: "/images/headphone.png",
//     },

//     {
//       id: 1,
//       name: "Apple iPhone 15",
//       price: 79999,
//       category: "mobile",
//       image: "/images/apple.png",
//     },
//     {
//       id: 2,
//       name: "Samsung S23",
//       price: 69999,
//       category: "mobile",
//       image: "/images/samsung.webp",
//     },
//     {
//       id: 3,
//       name: "Oppo A57",
//       price: 19999,
//       category: "mobile",
//       image: "/images/Oppo-A57-4G.png",
//     },
//     {
//       id: 4,
//       name: "MacBook Air M1",
//       price: 99999,
//       category: "laptop",
//       image: "/images/macbook.png",
//     },
//     {
//       id: 5,
//       name: "HP Pavilion",
//       price: 74999,
//       category: "laptop",
//       image: "/images/hp.png",
//     },
//     {
//       id: 6,
//       name: "Headphones",
//       price: 2999,
//       category: "accessories",
//       image: "/images/headphone.png",
//     },

//   ];

//   return Response.json(products);
// }
export async function GET() {
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
      image: "/images/apple.png",
    },
    {
      id: 2,
      name: "Samsung Galaxy S23",
      price: 69999,
      category: "mobile",
      brand: "Samsung",
      ram: "8GB",
      storage: "256GB",
      image: "/images/samsung.webp",
    },
    {
      id: 3,
      name: "Oppo A57",
      price: 19999,
      category: "mobile",
      brand: "Oppo",
      ram: "6GB",
      storage: "128GB",
      image: "/images/Oppo-A57-4G.png",
    },
    {
      id: 4,
      name: "Vivo V29",
      price: 29999,
      category: "mobile",
      brand: "Vivo",
      ram: "8GB",
      storage: "256GB",
      image: "/images/Oppo-A57-4G.png",
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
      image: "/images/macair.jpg",
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
      image: "/images/macair.jpg",
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
      image: "/images/macair.jpg",
    },

    /* ---------------- ACCESSORIES ---------------- */
    {
      id: 8,
      name: "Sony Headphones",
      price: 2999,
      category: "accessories",
      brand: "Sony",
      type: "Headphone",
      image: "/images/headphone.jpg",
    },
    {
      id: 9,
      name: "Boat Earbuds",
      price: 1999,
      category: "accessories",
      brand: "Boat",
      type: "Earbuds",
      image: "/images/headphone.jpg",
    },
  ];

  return Response.json(products);
}
