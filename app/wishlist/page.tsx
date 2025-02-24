"use client";

import React from "react";
import { useWishlist } from "@/context/WishlistContext";
import { Trash } from "lucide-react";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlist();

  return (
    <div className="container mx-auto mt-40 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">No items in your wishlist.</p>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-black p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg relative"
            >
              <img src={product.image} alt={product.name} className="w-full h-48 object-contain mb-2" />
              <h3 className="text-md font-bold">{product.name}</h3>
              <p className="text-gray-500">{product.brand} - {product.resolution}</p>
              <p className="text-lg font-semibold mt-2">₹{product.price}</p>

              {/* Remove from Wishlist */}
              <div className="absolute top-2 right-2 cursor-pointer" onClick={() => removeFromWishlist(product.id)}>
                <Trash className="w-6 h-6 text-red-500 hover:text-gray-500" />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
