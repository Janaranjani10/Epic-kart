"use client";
import React, { useState } from "react";
import pcComponents from "@/data/pc";
import Pagination from "@/components/products/Pagination";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
const ITEMS_PER_PAGE = 6;

export default function PCComponentsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedPriceRange, setSelectedPriceRange] = useState<number | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Extract unique values for filters
  const categories = Array.from(new Set(pcComponents.map((product) => product.category)));
  const brands = Array.from(new Set(pcComponents.map((product) => product.brand)));

  // Handle dropdown filters
  const handleDropdownChange = (
    setFilter: React.Dispatch<React.SetStateAction<string | null>>,
    value: string
  ) => {
    setFilter(value === "All" ? null : value);
    setCurrentPage(1);
  };

  // Filter products
  const filteredProducts = pcComponents.filter((product) => {
    return (
      (!selectedCategory || product.category === selectedCategory) &&
      (!selectedBrand || product.brand === selectedBrand) &&
      (!selectedPriceRange || product.price <= selectedPriceRange)
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

        {/* Category Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Category</h3>
          <select
            value={selectedCategory || "All"}
            onChange={(e) => handleDropdownChange(setSelectedCategory, e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-black"
          >
            <option>All</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
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

        {/* Price Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Max Price</h3>
          <input
            type="range"
            min="1000"
            max="50000"
            step="500"
            value={selectedPriceRange || 50000}
            onChange={(e) => setSelectedPriceRange(Number(e.target.value))}
            className="w-full"
          />
          <p className="text-gray-500">Up to ₹{selectedPriceRange || 50000}</p>
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
              <p className="text-gray-500">{product.brand} - {product.category}</p>
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
