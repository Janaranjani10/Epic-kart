"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";
import { inflate } from "node:zlib";

const CustomPCPage = () => {
  const [budget, setBudget] = useState("");
  const [recommendedBuild, setRecommendedBuild] = useState(null);
  const [hovered, setHovered] = useState(false);
  
  const categories = ["CPU", "GPU", "PSU", "RAM", "Storage", "Motherboard", "Cooler","Cabinat","KeyBoard","Mouse","Monitor","Speaker"];
  const [selections, setSelections] = useState<Record<string, { brand: string; price: string }>>(
    categories.reduce((acc, category) => {
      acc[category] = { brand: "", price: "" };
      return acc;
    }, {} as Record<string, { brand: string; price: string }>)
  );
  

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.jotfor.ms/s/umd/latest/for-embedded-agent.js";
    script.async = true;
    document.body.appendChild(script);
  
    script.onload = () => {
      if (window && "AgentInitializer" in window) {
        (window as any).AgentInitializer.init({
          rootId: "JotformAgent-01952194fc217445a0e2aa91099e97601b00",
          formID: "01952194fc217445a0e2aa91099e97601b00",
          queryParams: ["skipWelcome=1", "maximizable=1"],
          domain: "https://www.jotform.com",
          isInitialOpen: false,
          isDraggable: false,
          background: "linear-gradient(180deg, #C8CEED 0%, #C8CEED 100%)",
          buttonBackgroundColor: "#0a1551",
          buttonIconColor: "#fff",
          variant: false,
          customizations: {
            greeting: "Yes",
            greetingMessage: "Hi! How can I assist you?",
            pulse: "Yes",
            position: "right"
          }
        });
      }
    };
  }, []);
  
  const handleBudgetChange = (event) => {
    setBudget(event.target.value);
  };

  const handleSelectionChange = (category, field, value) => {
    setSelections((prev) => ({
      ...prev,
      [category]: { ...prev[category], [field]: value },
    }));
  };

  const fetchRecommendedBuild = async () => {
    try {
      const response = await fetch("/api/get-best-pc", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ budget: parseInt(budget, 10) }),
      });
      const data = await response.json();
      setRecommendedBuild(data);
    } catch (error) {
      console.error("Error fetching recommended build:", error);
    }
  };

  const handleProceedToCart = () => {
    const cartItems = Object.entries(selections)
      .map(([category, { brand, price }]) => ({ category, brand, price }))
      .filter(item => item.brand && item.price);
    
    console.log("Cart Items:", cartItems);
    // Logic to update cart state can be added here
  };

  return (
    
    <div className="container mx-auto mt-40 p-6 grid grid-cols-4 gap-6">
      {categories.map((category) => (
        <div key={category} className="p-4 border rounded bg-gray-100 dark:bg-black dark:text-white">
          <h3 className="font-medium">{category}</h3>
          <input
            type="text"
            placeholder="Brand Name"
            value={selections[category].brand}
            onChange={(e) => handleSelectionChange(category, "brand", e.target.value)}
            className="p-2  rounded w-full mb-2 "
          />
          <input
            type="number"
            placeholder="Price"
            value={selections[category].price}
            onChange={(e) => handleSelectionChange(category, "price", e.target.value)}
            className="p-2  rounded w-full"
          />
        </div>
      ))}
      
      <button className="rounded  h-20  bg-blue-500 text-black dark:text-white text-center cursor-pointer hover:bg-red-500" onClick={handleProceedToCart}>
        Proceed to Cart
      </button>
      
      <div className="col-span-4 p-4 border rounded shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Customize Your PC</h1>
        <label htmlFor="budget" className="font-medium">Enter your budget:</label>
        <input
          type="number"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
          className="p-2 border rounded w-full mb-4"
          placeholder="Enter your budget in Rupees"
        />
        <button
          onClick={fetchRecommendedBuild}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 w-full"
        >
          Get Best Build
        </button>
      </div>

      {recommendedBuild && (
        <div className="col-span-4 mt-6 p-4 border rounded shadow-lg">
          <h2 className="text-xl font-semibold">Recommended Build</h2>
          <p><strong>Product:</strong> {recommendedBuild.productName}</p>
          <p><strong>CPU:</strong> {recommendedBuild.cpu}</p>
          <p><strong>GPU:</strong> {recommendedBuild.gpu}</p>
          <p><strong>Memory Type:</strong> {recommendedBuild.memoryType}</p>
          <p><strong>Price:</strong> ₹{recommendedBuild.price}</p>
        </div>
      )}

      <motion.div 
        className="col-span-4 mt-6 p-4 border rounded shadow-lg text-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness:100 }}
      >
        <h2 className="text-xl font-semibold mb-2">AI Assistant</h2>
        {hovered ? <IoChatbubbles className="text-5xl text-blue-600 mx-auto mb-2 animate-bounce" /> : <FaRobot className="text-5xl text-blue-600 mx-auto mb-2" />}
        <textarea className="w-full p-2 border rounded" placeholder="Enter your message..."></textarea>
        <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700 mt-2 w-full">
          Send
        </button>
      </motion.div>
    </div>
  );
};

export default CustomPCPage;
