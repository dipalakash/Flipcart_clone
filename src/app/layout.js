//  import "./globals.css";
// import { CartProvider } from "@/components/CartContext";
// import { SearchProvider } from "@/components/SearchContext";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import { WishlistProvider } from "@/components/WishlistContext";

// export const metadata = {
//   title: "MyShop",
//   description: "Simple Ecommerce Store with Tailwind",
// };

// export default function RootLayout({ children }) {
//   return (
//     <html lang="en">
//       <body>
//         <CartProvider>
//           <WishlistProvider/>
//           <SearchProvider>
//             <Navbar /> {/* SHOW ON ALL PAGES */}
//             {children} {/* PAGE CONTENT */}
//             <Footer /> {/* SHOW ON ALL PAGES */}
//           </SearchProvider>
//           <WishlistProvider/>
//         </CartProvider>
//       </body>
//     </html>
//   );
// }



import "./globals.css";

import { CartProvider } from "@/components/CartContext";
import { SearchProvider } from "@/components/SearchContext";
import { WishlistProvider } from "@/components/WishlistContext";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <CartProvider>
          <WishlistProvider>
            <SearchProvider>
              <Navbar />
              {children}
              <Footer />
            </SearchProvider>
          </WishlistProvider>
        </CartProvider>
      </body>
    </html>
  );
}

