"use client";

import React, { useState } from "react";
import smartwatches from "@/data/smartwatchs"; // Change to smartwatch data
import Pagination from "@/components/products/Pagination";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
const ITEMS_PER_PAGE = 6;

export default function SmartwatchesPage() {
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  const [selectedDisplay, setSelectedDisplay] = useState<string | null>(null);
  const [selectedBattery, setSelectedBattery] = useState<string | null>(null);
  const [selectedFeatures, setSelectedFeatures] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Extract unique values for filters
  const brands = Array.from(new Set(smartwatches.map((product) => product.brand)));
  const displays = Array.from(new Set(smartwatches.map((product) => product.displayType)));
  const batteries = Array.from(new Set(smartwatches.map((product) => product.batteryLife)));
  const features = Array.from(new Set(smartwatches.flatMap((product) => product.features)));

  // Handle dropdown filters
  const handleDropdownChange = (setFilter: React.Dispatch<React.SetStateAction<string | null>>, value: string) => {
    setFilter(value === "All" ? null : value);
    setCurrentPage(1);
  };

  // Filter products
  const filteredProducts = smartwatches.filter((product) => {
    return (
      (selectedBrands.size === 0 || selectedBrands.has(product.brand)) &&
      (!selectedDisplay || product.displayType === selectedDisplay) &&
      (!selectedBattery || product.batteryLife === selectedBattery) &&
      (selectedFeatures.size === 0 || product.features.some((f) => selectedFeatures.has(f)))
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

        {/* Brand Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Brand</h3>
          <select
            value={selectedBrands.size > 0 ? Array.from(selectedBrands)[0] : "All"}
            onChange={(e) => setSelectedBrands(new Set(e.target.value === "All" ? [] : [e.target.value]))}
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

        {/* Display Type Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Display Type</h3>
          <select
            value={selectedDisplay || "All"}
            onChange={(e) => handleDropdownChange(setSelectedDisplay, e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-black"
          >
            <option>All</option>
            {displays.map((display) => (
              <option key={display} value={display}>
                {display}
              </option>
            ))}
          </select>
        </div>

        {/* Battery Life Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Battery Life</h3>
          <select
            value={selectedBattery || "All"}
            onChange={(e) => handleDropdownChange(setSelectedBattery, e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-black"
          >
            <option>All</option>
            {batteries.map((battery) => (
              <option key={battery} value={battery}>
                {battery}
              </option>
            ))}
          </select>
        </div>

        {/* Features Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Features</h3>
          <select
            value={selectedFeatures.size > 0 ? Array.from(selectedFeatures)[0] : "All"}
            onChange={(e) => setSelectedFeatures(new Set(e.target.value === "All" ? [] : [e.target.value]))}
            className="w-full p-2 border rounded-md dark:bg-black"
          >
            <option>All</option>
            {features.map((feature) => (
              <option key={feature} value={feature}>
                {feature}
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
                  isInWishlist(product.id) ? removeFromWishlist(product.id) : addToWishlist(product)
                }>
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
              <p className="text-gray-500">
                {product.brand} - {product.displayType}
              </p>
              <p className="text-gray-500">
                Battery: {product.batteryLife}
              </p>
              <p className="text-gray-500">Features: {product.features.join(", ")}</p>
              <p className="text-lg font-semibold mt-2">₹{product.price}</p>

              {/* Cart Icon */}
              <div className="absolute bottom-2 right-2 cursor-pointer" onClick={() => addToCart(product)}>
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
