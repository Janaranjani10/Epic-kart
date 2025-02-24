"use client";

import React, { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const { cart, removeFromCart, updateQuantity } = useCart();
  const router = useRouter();
  const [selectedItems, setSelectedItems] = useState<Set<number>>(new Set());

  const toggleSelectItem = (id: number) => {
    setSelectedItems((prev) => {
      const newSelection = new Set(prev);
      newSelection.has(id) ? newSelection.delete(id) : newSelection.add(id);
      return newSelection;
    });
  };

  return (
    <div className="mt-20 p-6">
      <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="space-y-4">
          {cart.map((product) => (
            <div key={product.id} className="flex items-center justify-between p-4 border rounded-md shadow-md">
              <div className="flex items-center gap-4">
                <input
                  type="checkbox"
                  checked={selectedItems.has(product.id)}
                  onChange={() => toggleSelectItem(product.id)}
                  className="w-5 h-5"
                />
                <img src={product.image} alt={product.name} className="w-16 h-16 object-contain" />
                <div>
                  <h3 className="text-lg font-semibold">{product.name}</h3>
                  <p className="text-gray-500">₹{product.price}</p>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => updateQuantity(product.id, product.quantity - 1)}
                      className="px-3 py-1  rounded-md hover:bg-gray-400"
                      disabled={product.quantity <= 1}
                    >
                      -
                    </button>
                    <span>{product.quantity}</span>
                    <button
                      onClick={() => updateQuantity(product.id, product.quantity + 1)}
                      className="px-3 py-1  rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => router.push(`/product/${product.id}`)}
                  className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                >
                  View Product
                </button>
                <button
                  onClick={() => removeFromCart(product.id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
       <button
       onClick={() => router.push("/checkout")}
       className="mt-6 px-6 py-3 bg-green-500 text-white rounded-md hover:bg-green-600"
       disabled={selectedItems.size === 0}
     >
       Buy Now ({selectedItems.size} items)
     </button>
      )}
    </div>
  );
}
