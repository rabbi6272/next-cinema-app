"use client";
import { useRouter } from "next/navigation";
import { CldImage } from "next-cloudinary";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import { motion } from "framer-motion";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-inter",
});

const spaceGrotesk = localFont({
  src: "../fonts/Space_Grotesk/SpaceGrotesk-VariableFont_wght.ttf",
  display: "swap",
  weight: "500",
});

export function ProductCard({ product }) {
  const router = useRouter();

  if (!product) return null;

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="w-full h-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700 hover:drop-shadow-xl cursor-pointer"
    >
      <div
        className="relative h-[250px] md:h-[300px] w-full"
        onClick={() => router.push(`/products/${product?._id}`)}
      >
        <CldImage
          fill
          sizes="100%"
          src={product?.image_id}
          alt="product image"
          className="rounded-t-lg aspect[4/3] object-cover relative"
        />
      </div>
      <div className="px-3 pb-4">
        <h5
          className={`${spaceGrotesk.className} text-base md:text-lg py-2 font-base text-gray-900 dark:text-white`}
        >
          {product?.name}
        </h5>
        <div className="flex items-center justify-between">
          <span
            className={`${inter.className} font-bold text-xl text-[#4CAF50]`}
          >
            {product?.price}$
          </span>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, duration: 0.3 }}
            className="text-white bg-[#4caf4fcc] hover:bg-[#4caf4f] font-medium rounded-full text-lg px-6 py-1.5 text-center "
            onClick={() => {
              console.log(`Added to cart ${product?._id}`);
            }}
          >
            <i className="fa-solid fa-cart-shopping"></i>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
}
