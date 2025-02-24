"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMobileAlt,
  faCamera,
  faLaptop,
  faClock,
  faGamepad,
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";

const data = [
  {
    id: 1,
    bgColor: "#4A6CF7",
    icon: faMobileAlt,
    title: "Smartphones",
    desc: "Explore our collection of latest smartphones with cutting-edge technology.",
  },
  {
    id: 2,
    bgColor: "#FBB040",
    icon: faCamera,
    title: "Cameras",
    desc: "Discover high-quality cameras for capturing every moment with clarity.",
  },
  {
    id: 3,
    bgColor: "#4FB58E",
    icon: faLaptop,
    title: "Laptops",
    desc: "Browse through powerful laptops that cater to all your computing needs.",
  },
  {
    id: 4,
    bgColor: "#FF8C42",
    icon: faClock,
    title: "Watches",
    desc: "Find smartwatches that keep you connected and stylish throughout the day.",
  },
  {
    id: 5,
    bgColor: "#A47CA2",
    icon: faGamepad,
    title: "Gaming",
    desc: "Get gaming gadgets and accessories to enhance your gaming experience.",
  },
];

export default function Brands() {
  const [activeSlide, setActiveSlide] = useState(2);

  const next = () => setActiveSlide((prev) => (prev < data.length - 1 ? prev + 1 : prev));
  const prev = () => setActiveSlide((prev) => (prev > 0 ? prev - 1 : prev));

  const getStyles = (index) => {
    const offset = index - activeSlide;
    const baseWidth = 362; 
    const spacing = 60;  
    const depth = 250; 
    const rotationAngle = 25;  
    
    return {
      transform: `perspective(1000px) 
        translateX(${offset * (baseWidth + spacing)}px) 
        translateZ(${-Math.abs(offset) * depth}px) 
        rotateY(${offset * rotationAngle}deg)`,
      zIndex: 10 - Math.abs(offset),
      opacity: Math.abs(offset) > 2 ? 0 : 1,
      transition: "transform 0.5s ease, opacity 0.5s ease",
      filter: offset === 0 ? "brightness(1)" : "brightness(0.6)",
    };
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      {/* Heading and Content at the Top */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-semibold text-gray-900">Explore Our Products</h1>
        <p className="mt-4 text-lg text-gray-600">
          Browse through our wide range of top-notch products, from smartphones to gaming accessories, all designed to enhance your experience.
        </p>
      </div>

      <div className="relative w-[362px] h-[272px] perspective-[1000px]">
        {data.map((item, i) => (
          <div
            key={item.id}
            className="absolute w-[362px] h-[272px] rounded-lg shadow-lg flex flex-col justify-center items-start p-8 text-white transition-transform duration-500 ease-in-out"
            style={{ background: item.bgColor, ...getStyles(i) }}
          >
            <FontAwesomeIcon icon={item.icon} size="3x" />
            <h2 className="text-2xl font-bold mt-4">{item.title}</h2>
            <p className="mt-2">{item.desc}</p>
            {/* Reflection Effect */}
            <div
              className="absolute bottom-[-60px] left-0 w-full h-[60px] rounded-lg opacity-50"
              style={{
                background: `linear-gradient(to bottom, ${item.bgColor}, transparent)`,
              }}
            ></div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex space-x-4 mt-8">
        <button onClick={prev} className="text-white text-3xl bg-gray-800 p-3 rounded-full">
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button onClick={next} className="text-white text-3xl bg-gray-800 p-3 rounded-full">
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
    </div>
  );
}
