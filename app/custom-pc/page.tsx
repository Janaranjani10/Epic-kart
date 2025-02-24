"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaRobot } from "react-icons/fa";
import { IoChatbubbles } from "react-icons/io5";

const categories = ["CPU", "GPU", "Motherboard", "RAM", "Storage", "PSU", "Cooler", "Cabinet", "Keyboard", "Mouse", "Monitor", "Speaker"];
const mandatoryCategories = ["CPU", "GPU", "Motherboard", "RAM", "Storage", "PSU"];

const brandOptions: Record<string, { brand: string; price: number }[]> = {
  CPU: [
    { brand: "Intel i5", price: 15000 },
    { brand: "Intel i7", price: 25000 },
    { brand: "AMD Ryzen 5", price: 16000 },
    { brand: "AMD Ryzen 7", price: 27000 },
  ],
  GPU: [
    { brand: "Nvidia RTX 3060", price: 40000 },
    { brand: "Nvidia RTX 3070", price: 60000 },
    { brand: "AMD RX 6700XT", price: 50000 },
  ],
  Motherboard: [
    { brand: "Asus B450", price: 10000 },
    { brand: "MSI B550", price: 15000 },
  ],
  RAM: [
    { brand: "Corsair 16GB", price: 8000 },
    { brand: "Kingston 32GB", price: 15000 },
  ],
  Storage: [
    { brand: "Samsung 1TB SSD", price: 9000 },
    { brand: "WD 2TB HDD", price: 6000 },
  ],
  PSU: [
    { brand: "Corsair 650W", price: 7000 },
    { brand: "Cooler Master 750W", price: 10000 },
  ],
  Cooler: [
    { brand: "Deepcool Air", price: 3000 },
    { brand: "NZXT Liquid", price: 8000 },
  ],
  Cabinet: [
    { brand: "NZXT H510", price: 6000 },
    { brand: "Cooler Master", price: 7000 },
  ],
  Keyboard: [
    { brand: "Logitech G213", price: 4000 },
    { brand: "Razer Cynosa", price: 5000 },
  ],
  Mouse: [
    { brand: "Logitech G502", price: 3500 },
    { brand: "Razer DeathAdder", price: 4000 },
  ],
  Monitor: [
    { brand: "LG 24-inch", price: 12000 },
    { brand: "Dell 27-inch", price: 18000 },
  ],
  Speaker: [
    { brand: "JBL 2.1", price: 5000 },
    { brand: "Bose Companion", price: 10000 },
  ],
};

const CustomPCPage = () => {
  const [budget, setBudget] = useState("");
  const [recommendedBuild, setRecommendedBuild] = useState(null);
  const [hovered, setHovered] = useState(false);
  const [selections, setSelections] = useState<Record<string, { brand: string; price: number }>>(
    categories.reduce((acc, category) => {
      acc[category] = { brand: "", price: 0 };
      return acc;
    }, {} as Record<string, { brand: string; price: number }>)
  );

  const handleBrandChange = (category: string, brand: string) => {
    const selectedOption = brandOptions[category].find((item) => item.brand === brand);
    if (selectedOption) {
      setSelections((prev) => ({
        ...prev,
        [category]: { brand: selectedOption.brand, price: selectedOption.price },
      }));
    }
  };


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

  const handleBudgetChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setBudget(event.target.value);
  };

  const fetchRecommendedBuild = async () => {
    if (!budget || isNaN(Number(budget))) {
      alert("Please enter a valid budget.");
      return;
    }

    try {
      const response = await fetch("/api/get-best-pc", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ budget: parseInt(budget, 10) }),
      });
      const data = await response.json();
      setRecommendedBuild(data);
    } catch (error) {
      console.error("Error fetching recommended build:", error);
    }
  };

  const handleProceedToCart = () => {
    const missingFields = mandatoryCategories.filter((category) => !selections[category].brand);
    if (missingFields.length > 0) {
      alert(`Please fill in the required fields: ${missingFields.join(", ")}`);
      return;
    }

    const cartItems = Object.entries(selections)
      .map(([category, { brand, price }]) => ({ category, brand, price }))
      .filter((item) => item.brand && item.price);

    console.log("Cart Items:", cartItems);
  };

  return (
    <div className="container mx-auto mt-40 p-6 grid grid-cols-4 gap-6">
      <h1 className="col-span-4 text-3xl font-bold text-center mb-6">Customize Your Own PC</h1>

      {categories.map((category) => (
        <div key={category} className="p-4 border rounded bg-gray-100 dark:bg-black dark:text-white">
          <h3 className="font-medium">{category} {mandatoryCategories.includes(category) && <span className="text-red-500">*</span>}</h3>
          <select
            value={selections[category].brand}
            onChange={(e) => handleBrandChange(category, e.target.value)}
            className="p-2 rounded w-full mb-2"
          >
            <option value="">Select {category}</option>
            {brandOptions[category]?.map((item) => (
              <option key={item.brand} value={item.brand}>{item.brand}</option>
            ))}
          </select>
          <input
            type="number"
            value={selections[category].price || ""}
            readOnly
            className="p-2 rounded w-full"
          />
        </div>
      ))}

      <button className="rounded h-20 bg-blue-500 text-black dark:text-white text-center cursor-pointer hover:bg-red-500" onClick={handleProceedToCart}>
        Proceed to Cart
      </button>

      <div className="col-span-4 p-4 border rounded shadow-lg text-center">
        <h1 className="text-2xl font-bold mb-4">Budget-Based Build Recommendation</h1>
        <input type="number" id="budget" value={budget} onChange={handleBudgetChange} className="p-2 border rounded w-full mb-4" placeholder="Enter your budget in Rupees" />
        <button onClick={fetchRecommendedBuild} className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 w-full">
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
      <motion.div className="col-span-4 mt-6 p-4 border rounded shadow-lg text-center" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 100 }}>
        <h2 className="text-xl font-semibold mb-2">AI Assistant</h2>
        {hovered ? <IoChatbubbles className="text-5xl text-blue-600 mx-auto mb-2 animate-bounce" /> : <FaRobot className="text-5xl text-blue-600 mx-auto mb-2" />}
        <textarea className="w-full p-2 border rounded" placeholder="Enter your message..."></textarea>
        <button className="bg-green-600 text-white p-2 rounded hover:bg-green-700 mt-2 w-full">Send</button>
      </motion.div>
    </div>
  );
};

export default CustomPCPage;
