"use client";

import React, { useState } from "react";
import headsets from "@/data/headset";
import Pagination from "@/components/products/Pagination";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
const ITEMS_PER_PAGE = 6;

export default function HeadsetsPage() {
  const [selectedType, setSelectedType] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedConnectivity, setSelectedConnectivity] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Extract unique values for filters
  const types = Array.from(new Set(headsets.map((product) => product.type)));
  const brands = Array.from(new Set(headsets.map((product) => product.brand)));
  const connectivities = Array.from(new Set(headsets.map((product) => product.connectivity)));

  // Handle dropdown filters
  const handleDropdownChange = (setFilter: React.Dispatch<React.SetStateAction<string | null>>, value: string) => {
    setFilter(value === "All" ? null : value);
    setCurrentPage(1);
  };

  // Filter products
  const filteredProducts = headsets.filter((product) => {
    return (
      (!selectedType || product.type === selectedType) &&
      (!selectedBrand || product.brand === selectedBrand) &&
      (!selectedConnectivity || product.connectivity === selectedConnectivity)
    );
  });

  // Pagination logic
  const indexOfLastItem = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstItem = indexOfLastItem - ITEMS_PER_PAGE;
  const currentProducts = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="flex gap-6 mt-40">
      {/* Sidebar Filters */}
      <div className="w-1/4 bg-white dark:bg-black p-4 rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Filters</h2>

        {/* Type Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Type</h3>
          <select
            value={selectedType || "All"}
            onChange={(e) => handleDropdownChange(setSelectedType, e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-black"
          >
            <option>All</option>
            {types.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        {/* Brand Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Brand</h3>
          <select
            value={selectedBrand || "All"}
            onChange={(e) => handleDropdownChange(setSelectedBrand, e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-black"
          >
            <option>All</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>

        {/* Connectivity Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Connectivity</h3>
          <select
            value={selectedConnectivity || "All"}
            onChange={(e) => handleDropdownChange(setSelectedConnectivity, e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-black"
          >
            <option>All</option>
            {connectivities.map((connectivity) => (
              <option key={connectivity} value={connectivity}>
                {connectivity}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Product Listing */}
      <div className="w-3/4">
        <div className="grid grid-cols-3 gap-6">
          {currentProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-black p-4 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg relative"
            >
              {/* Wishlist Icon */}
              <div className="absolute top-2 right-2 cursor-pointer"  onClick={() =>
                  isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)}>
                              <Heart className={`w-6 h-6 ${
                                  isInWishlist(product.id) ? "text-red-500 fill-current" : "text-gray-500"
                                }`}/>
                            </div>

              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-contain mb-2"
              />

              <h3 className="text-md font-bold">{product.name}</h3>
              <p className="text-gray-500">{product.brand} - {product.type}</p>
              <p className="text-gray-500">Connectivity: {product.connectivity}</p>
              <p className="text-lg font-semibold mt-2">₹{product.price}</p>

              {/* Cart Icon */}
              <div className="absolute bottom-2 right-2 cursor-pointer">
                <ShoppingCart className="w-6 h-6 text-gray-500 hover:text-blue-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        {filteredProducts.length > ITEMS_PER_PAGE && (
          <Pagination
            totalItems={filteredProducts.length}
            itemsPerPage={ITEMS_PER_PAGE}
            currentPage={currentPage}
            onPageChange={setCurrentPage}
          />
        )}
      </div>
    </div>
  );
}
