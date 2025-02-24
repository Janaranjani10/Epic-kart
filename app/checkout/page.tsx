"use client";

import React, { useState, useEffect } from "react";
import { useCart } from "@/context/CartContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function CheckoutPage() {
  const { cart, clearCart } = useCart();
  const router = useRouter();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("credit_card");
  const [agreeTerms, setAgreeTerms] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // 🎨 Adaptive styling
  const bgColor = theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black";
  const cardBg = theme === "dark" ? "bg-gray-800" : "bg-gray-100";
  const borderColor = theme === "dark" ? "border-gray-700" : "border-gray-300";
  const inputBg = theme === "dark" ? "bg-gray-700 text-white" : "bg-white text-black";
  const btnColor = "bg-green-500 hover:bg-green-600";
  const disabledBtn = "bg-gray-400 cursor-not-allowed";

  // Calculate total amount
  const totalAmount = cart.reduce((total, product) => total + product.price * product.quantity, 0);

  return (
    <div className={`min-h-screen flex flex-col items-center mt-20 px-6 py-10 ${bgColor}`}>
      <h1 className="text-3xl font-bold text-center mb-6">Checkout</h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-80 w-full">
          <Image src="/empty-cart.png" alt="Empty Cart" width={180} height={180} />
          <p className="text-gray-500 mt-4">Your cart is empty</p>
          <button
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600"
            onClick={() => router.push("/")}
          >
            Continue Shopping
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-3 mt-20 gap-6 w-full max-w-7xl">
          {/* Left Section - Address Form */}
          <div className={`lg:col-span-2 p-6 rounded-md border ${borderColor} ${cardBg}`}>
            <h2 className="text-lg font-semibold mb-4">Delivery Address</h2>
            <div className="grid grid-cols-2 gap-4">
              <input type="text" placeholder="First Name" className={`border p-2 rounded w-full ${inputBg}`} />
              <input type="text" placeholder="Last Name" className={`border p-2 rounded w-full ${inputBg}`} />
              <input type="text" placeholder="Street/Locality" className={`border p-2 rounded w-full col-span-2 ${inputBg}`} />
              <input type="text" placeholder="City" className={`border p-2 rounded w-full ${inputBg}`} />
              <input type="text" placeholder="State" className={`border p-2 rounded w-full ${inputBg}`} />
              <input type="text" placeholder="Pincode" className={`border p-2 rounded w-full ${inputBg}`} />
              <input type="text" placeholder="Contact No" className={`border p-2 rounded w-full ${inputBg}`} />
            </div>
          </div>

          {/* Right Section - Payment & Order Summary */}
          <div className={`p-6 rounded-md border ${borderColor} ${cardBg}`}>
            <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
            <select
              className={`border p-2 rounded w-full ${inputBg}`}
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <option value="credit_card">Credit / Debit Card</option>
              <option value="upi">UPI (Google Pay, PhonePe, Paytm)</option>
              <option value="netbanking">Net Banking</option>
              <option value="cod">Cash on Delivery</option>
              <option value="wallet">E-Wallets (Paytm, Amazon Pay)</option>
            </select>

            {/* Dynamic Payment Inputs */}
            <div className="mt-4">
              {paymentMethod === "credit_card" && (
                <div className="space-y-2">
                  <input type="text" placeholder="Card Number" className={`border p-2 rounded w-full ${inputBg}`} />
                  <input type="text" placeholder="Card Holder Name" className={`border p-2 rounded w-full ${inputBg}`} />
                  <div className="flex space-x-2">
                    <input type="text" placeholder="Expiry Date (MM/YY)" className={`border p-2 rounded w-full ${inputBg}`} />
                    <input type="text" placeholder="CVV" className={`border p-2 rounded w-1/3 ${inputBg}`} />
                  </div>
                </div>
              )}
              {paymentMethod === "upi" && (
                <input type="text" placeholder="Enter UPI ID" className={`border p-2 rounded w-full ${inputBg}`} />
              )}
              {paymentMethod === "netbanking" && (
                <select className={`border p-2 rounded w-full ${inputBg}`}>
                  <option>Select Your Bank</option>
                  <option>HDFC Bank</option>
                  <option>SBI Bank</option>
                  <option>ICICI Bank</option>
                  <option>Axis Bank</option>
                </select>
              )}
              {paymentMethod === "wallet" && (
                <select className={`border p-2 rounded w-full ${inputBg}`}>
                  <option>Select E-Wallet</option>
                  <option>Paytm</option>
                  <option>Amazon Pay</option>
                  <option>Google Pay</option>
                </select>
              )}
              {paymentMethod === "cod" && <p className="text-green-500">Cash on Delivery is available.</p>}
            </div>

            {/* Order Summary */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
              <ul className="space-y-2 max-h-40 overflow-y-auto">
                {cart.map((product) => (
                  <li
                    key={product.id}
                    className={`flex justify-between items-center p-2 border rounded-md ${borderColor}`}
                  >
                    <div className="flex items-center space-x-4">
                      <Image src={product.image} alt={product.name} width={50} height={50} />
                      <div>
                        <h3 className="text-sm font-semibold">{product.name}</h3>
                        <p className="text-gray-500">
                          ₹{product.price} x {product.quantity}
                        </p>
                      </div>
                    </div>
                    <p className="font-semibold">₹{product.price * product.quantity}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Total Amount */}
            <div className="mt-4 text-lg font-semibold">
              Total Amount: ₹{totalAmount}
            </div>

            {/* Terms & Conditions */}
            <label className="flex items-center space-x-2 mt-6">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={() => setAgreeTerms(!agreeTerms)}
              />
              <span>
                I agree to the{" "}
                <a href="/terms" className="text-blue-500">
                  Terms & Conditions
                </a>
              </span>
            </label>

            {/* Place Order Button */}
            <button
              className={`w-full mt-4 text-white py-3 rounded-md ${
                agreeTerms ? btnColor : disabledBtn
              }`}
              disabled={!agreeTerms}
              onClick={() => {
                alert("Order placed successfully!");
                clearCart();
                router.push("/");
              }}
            >
              Place Order
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
