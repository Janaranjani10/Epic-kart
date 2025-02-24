"use client";

import React, { useState } from "react";
import smartphones from "@/data/products";
import Pagination from "@/components/products/Pagination";
import { Heart, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
const ITEMS_PER_PAGE = 6;

export default function SmartphonesPage() {
  const [selectedBrands, setSelectedBrands] = useState<Set<string>>(new Set());
  const [selectedRam, setSelectedRam] = useState<string | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [selectedBattery, setSelectedBattery] = useState<string | null>(null);
  const [selectedNetwork, setSelectedNetwork] = useState<Set<string>>(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const { addToCart } = useCart();
  const { wishlist, addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  // Extract unique values for filters
  const brands = Array.from(new Set(smartphones.map((product) => product.brand)));
  const rams = Array.from(new Set(smartphones.map((product) => product.ram)));
  const storages = Array.from(new Set(smartphones.map((product) => product.storage)));
  const batteries = Array.from(new Set(smartphones.map((product) => product.battery)));
  const networks = Array.from(new Set(smartphones.map((product) => product.network)));

  // Handle dropdown filters
  const handleDropdownChange = (setFilter: React.Dispatch<React.SetStateAction<string | null>>, value: string) => {
    setFilter(value === "All" ? null : value);
    setCurrentPage(1);
  };

  // Filter products
  const filteredProducts = smartphones.filter((product) => {
    return (
      (selectedBrands.size === 0 || selectedBrands.has(product.brand)) &&
      (!selectedRam || product.ram === selectedRam) &&
      (!selectedStorage || product.storage === selectedStorage) &&
      (!selectedBattery || product.battery === selectedBattery) &&
      (selectedNetwork.size === 0 || selectedNetwork.has(product.network))
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

        {/* RAM Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">RAM</h3>
          <select
            value={selectedRam || "All"}
            onChange={(e) => handleDropdownChange(setSelectedRam, e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-black"
          >
            <option>All</option>
            {rams.map((ram) => (
              <option key={ram} value={ram}>
                {ram}
              </option>
            ))}
          </select>
        </div>

        {/* Storage Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Storage</h3>
          <select
            value={selectedStorage || "All"}
            onChange={(e) => handleDropdownChange(setSelectedStorage, e.target.value)}
            className="w-full p-2 border rounded-md dark:bg-black"
          >
            <option>All</option>
            {storages.map((storage) => (
              <option key={storage} value={storage}>
                {storage}
              </option>
            ))}
          </select>
        </div>

        {/* Battery Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Battery</h3>
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

        {/* Network Filter */}
        <div className="mb-4">
          <h3 className="font-semibold mb-2">Network</h3>
          <select
            value={selectedNetwork.size > 0 ? Array.from(selectedNetwork)[0] : "All"}
            onChange={(e) => setSelectedNetwork(new Set(e.target.value === "All" ? [] : [e.target.value]))}
            className="w-full p-2 border rounded-md dark:bg-black"
          >
            <option>All</option>
            {networks.map((network) => (
              <option key={network} value={network}>
                {network}
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
        {product.brand} - {product.ram} - {product.storage}
      </p>
      <p className="text-gray-500">
        Battery: {product.battery} | {product.network}
      </p>
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
