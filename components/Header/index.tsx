"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggler from "./ThemeToggler";
import menuData from "@/components/Header/menuData"; 
import { useContext } from "react";

import { CartContext } from "@/context/CartContext"; // Ensure correct import path


const Header = () => {
  const { cartCount } = useContext(CartContext);
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);

  const [sticky, setSticky] = useState(false);
  const handleStickyNavbar = () => {
    setSticky(window.scrollY >= 80);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  const [openIndex, setOpenIndex] = useState(-1);
  const handleSubmenu = (index: number) => setOpenIndex(openIndex === index ? -1 : index);

  const [searchOpen, setSearchOpen] = useState(false);
  const toggleSearch = () => setSearchOpen(!searchOpen);
  
  const pathname = usePathname(); // Correct variable name

  return (
    <header
  className={`header left-0 top-0 z-40 w-full ${
    sticky
      ? "fixed dark:bg-black bg-white shadow-md backdrop-blur-sm"
      : "absolute bg-transparent"
  } transition`}
>
  <div className="container mx-auto px-4">
    {/* Top Navbar */}
    <div className="flex justify-between items-center py-2">
      {/* Logo */}
      <div className="flex items-center flex-shrink-0">
        <Link href="/" className="block w-32">
          <Image
            src="/images/logo/WHITE.png"
            alt="logo"
            width={120}
            height={40}
            className="w-full dark:hidden"
          />
          <Image
            src="/images/logo/BLACK.png"
            alt="logo"
            width={120}
            height={40}
            className="hidden w-full dark:block"
          />
        </Link>
      </div>

      {/* Search Input Box and Icons */}
      <div className="flex-1 flex items-center justify-between space-x-6">
        {/* Search Box */}
        <div className="relative flex-1">
          <div
            className={`absolute top-1/2 right-0 transform -translate-y-1/2 transition-all duration-[1.5s] ease-in-out ${
              searchOpen ? "w-[50%] max-w-[600px] border-b-2 border-gray-700 dark:border-white" : "w-0 border-b-0"
            } overflow-hidden`}
          >
            {searchOpen && (
              <input
                type="text"
                className="w-full px-4 py-2 rounded-lg bg-transparent  dark:text-white focus:outline-none"
                placeholder="Search for products, categories, or brands..."
              />
            )}
          </div>
        </div>

        {/* Icons: Search, Login, Theme */}
        <div className="flex items-center space-x-6">
          {/* Search Icon */}
          <button
            onClick={toggleSearch}
            className="text-gray-700 dark:text-white text-xl z-10"
          >
            {searchOpen ? "🔙" : "🔍"}
          </button>

          {/* Login Icon */}
          <Link href="/signin" className="text-gray-700 dark:text-white text-xl">
            👤
          </Link>

          {/* Theme Toggler */}
          <ThemeToggler />
        </div>
      </div>
    </div>

    {/* Bottom Navbar */}
    <div className="flex items-center justify-center py-2 border-t border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-center space-x-6">
        {menuData.map((menuItem, index) => (
          <div key={index} className="group relative flex items-center">
            {menuItem.submenu ? (
              <div>
                <p
                  onClick={() => handleSubmenu(index)}
                  className="flex cursor-pointer items-center py-2 text-base text-dark group-hover:text-primary dark:text-white/70 dark:group-hover:text-white"
                >
                  <span className="text-xl mr-2">{menuItem.icon}</span>
                  {menuItem.title}
                  <span className="pl-3">
                    <svg width="25" height="24" viewBox="0 0 25 24">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M6.29289 8.8427C6.68342 8.45217 7.31658 8.45217 7.70711 8.8427L12 13.1356L16.2929 8.8427C16.6834 8.45217 17.3166 8.45217 17.7071 8.8427C18.0976 9.23322 18.0976 9.86639 17.7071 10.2569L12 15.964L6.29289 10.2569C5.90237 9.86639 5.90237 9.23322 6.29289 8.8427Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </p>
                {menuItem.submenu && menuItem.submenu.length > 0 && (
                  <div
                    className={`submenu absolute left-0 top-full bg-white transition duration-300 group-hover:opacity-100 dark:bg-dark lg:invisible lg:absolute lg:top-[110%] lg:block lg:w-[250px] lg:p-4 lg:opacity-0 lg:shadow-lg lg:group-hover:visible lg:group-hover:top-full ${
                      openIndex === index ? "block" : "hidden"
                    }`}
                  >
                    {menuItem.submenu.map((submenuItem, subIndex) => (
                      <Link
                        key={subIndex}
                        href={submenuItem.path}
                        className={`flex items-center py-2 text-sm ${
                          pathname === submenuItem.path
                            ? "text-primary dark:text-white"
                            : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
                        }`}
                      >
                        <span className="text-xl mr-2">{submenuItem.icon}</span>
                        {submenuItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
  href={menuItem.path}
  className={`relative flex items-center py-2 text-sm ${
    pathname === menuItem.path
      ? "text-primary dark:text-white"
      : "text-dark hover:text-primary dark:text-white/70 dark:hover:text-white"
  }`}
>
  <span className="text-xl mr-2">{menuItem.icon}</span>
  <span className="hidden sm:inline">{menuItem.title}</span>

  {/* Cart Count Badge */}
  {menuItem.showCartBadge && cartCount > 0 && (
    <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full">
      {cartCount}
    </span>
  )}
</Link>

            )}
          </div>
        ))}
      </div>
    </div>
  </div>
</header>


  );
};

export default Header;
