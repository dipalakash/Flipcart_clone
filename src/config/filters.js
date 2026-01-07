// export const FILTER_CONFIG = {
//   mobile: {
//     Brand: ["Apple", "Samsung", "Oppo", "Vivo"],
//     RAM: ["4 GB", "6 GB", "8 GB", "12 GB"],
//     Storage: ["64 GB", "128 GB", "256 GB"],
//     Price: ["Under 20000", "20000 - 50000", "Above 50000"],
//   },

//   laptop: {
//     Brand: ["HP", "Dell", "Apple", "Lenovo"],
//     Processor: ["i3", "i5", "i7", "Ryzen 5"],
//     RAM: ["8 GB", "16 GB", "32 GB"],
//     Screen: ["13 inch", "14 inch", "15.6 inch"],
//   },

//   clothing: {
//     Brand: ["Nike", "Puma", "H&M"],
//     Size: ["S", "M", "L", "XL"],
//     Color: ["Black", "White", "Blue"],
//     Price: ["Under 1000", "1000 - 3000", "Above 3000"],
//   },
// };
// // new category added if needed



// src/config/filters.js

export const FILTER_CONFIG = {
  mobile: {
    brand: ["Apple", "Samsung", "Oppo", "Vivo"],
    ram: ["4GB", "6GB", "8GB", "12GB"],
    storage: ["64GB", "128GB", "256GB"],
    price: ["UNDER_20000", "20000_50000", "ABOVE_50000"],
  },

  laptop: {
    brand: ["Apple", "HP", "Dell"],
    ram: ["8GB", "16GB"],
    processor: ["M1", "i5", "i7"],
  },

  accessories: {
    brand: ["Sony", "Boat"],
    type: ["Headphone", "Earbuds"],
  },
};
