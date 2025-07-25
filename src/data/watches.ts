export interface Watch {
  id: number;
  name: string;
  price: number;
  image: string;
  category: "men" | "women";
  description: string;
  features: string[];
  inStock: boolean;
}

import mensWatch1 from "@/assets/mens-watch-1.jpg";
import mensWatch2 from "@/assets/mens-watch-2.jpg";
import mensWatch3 from "@/assets/mens-watch-3.jpg";
import womensWatch1 from "@/assets/womens-watch-1.jpg";
import womensWatch2 from "@/assets/womens-watch-2.jpg";
import heroWatch from "@/assets/hero-watch.jpg";

export const watches: Watch[] = [
  {
    id: 1,
    name: "Chronograph Elite",
    price: 2499,
    image: heroWatch,
    category: "men",
    description: "A sophisticated chronograph featuring a precision movement and premium leather strap. Perfect for the modern gentleman who values both style and functionality.",
    features: [
      "Swiss movement",
      "Chronograph function",
      "Genuine leather strap",
      "Water resistant 100m",
      "Sapphire crystal glass"
    ],
    inStock: true
  },
  {
    id: 2,
    name: "Minimalist Black",
    price: 1299,
    image: mensWatch1,
    category: "men",
    description: "Clean lines and contemporary design make this timepiece perfect for both business and casual wear. Features a sleek mesh bracelet and minimalist dial.",
    features: [
      "Quartz movement",
      "Stainless steel mesh bracelet",
      "Minimalist design",
      "Water resistant 50m",
      "Scratch resistant"
    ],
    inStock: true
  },
  {
    id: 3,
    name: "Ocean Explorer",
    price: 3299,
    image: mensWatch2,
    category: "men",
    description: "Built for adventure with robust construction and diving capabilities. This sports watch combines durability with elegant design.",
    features: [
      "Automatic movement",
      "Diving bezel",
      "Steel bracelet",
      "Water resistant 300m",
      "Luminous hands"
    ],
    inStock: true
  },
  {
    id: 4,
    name: "Classic Heritage",
    price: 1899,
    image: mensWatch3,
    category: "men",
    description: "Timeless elegance with traditional craftsmanship. This dress watch features a classic design that never goes out of style.",
    features: [
      "Mechanical movement",
      "Leather strap",
      "Gold-plated case",
      "Water resistant 30m",
      "Classic Roman numerals"
    ],
    inStock: true
  },
  {
    id: 5,
    name: "Diamond Elegance",
    price: 4299,
    image: womensWatch1,
    category: "women",
    description: "Exquisite craftsmanship meets feminine elegance. Features genuine diamonds and a mother-of-pearl dial for the sophisticated woman.",
    features: [
      "Swiss quartz movement",
      "Diamond markers",
      "Mother-of-pearl dial",
      "Gold-plated case",
      "Water resistant 30m"
    ],
    inStock: true
  },
  {
    id: 6,
    name: "Rose Gold Beauty",
    price: 1799,
    image: womensWatch2,
    category: "women",
    description: "Romantic rose gold finish with delicate details. Perfect for adding a touch of elegance to any outfit.",
    features: [
      "Quartz movement",
      "Rose gold plating",
      "Leather strap",
      "Crystal markers",
      "Water resistant 30m"
    ],
    inStock: true
  }
];