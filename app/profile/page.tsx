"use client";

import { useState } from "react";

const ProfilePage = () => {
  const [selectedTab, setSelectedTab] = useState("profile");
  const [profileImage, setProfileImage] = useState("/path/to/default-profile.jpg");
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
    age: "",
  });
  const [editMode, setEditMode] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const renderContent = () => {
    switch (selectedTab) {
      case "profile":
        return (
          <div>
            <h2 className="text-xl font-semibold mb-4">Profile Settings</h2>
            <div className="flex items-center space-x-4">
              <img
                src={profileImage}
                className="rounded-full w-24 h-24 border-4 border-gray-300 dark:border-gray-700"
              />
              <input
                type="file"
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setProfileImage(URL.createObjectURL(e.target.files[0]));
                  }
                }}
                className="text-sm text-gray-600 dark:text-gray-300"
              />
            </div>
            <div className="mt-4">
              {editMode ? (
                <div className="space-y-2">
                  <input
                    type="text"
                    name="name"
                    value={userData.name}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="email"
                    name="email"
                    value={userData.email}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="text"
                    name="phone"
                    value={userData.phone}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                  <input
                    type="number"
                    name="age"
                    value={userData.age}
                    onChange={handleInputChange}
                    className="w-full p-2 border rounded"
                  />
                  <button
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    onClick={() => setEditMode(false)}
                  >
                    Save
                  </button>
                </div>
              ) : (
                <div>
                  <p><strong>Name:</strong> {userData.name}</p>
                  <p><strong>Email:</strong> {userData.email}</p>
                  <p><strong>Phone:</strong> {userData.phone}</p>
                  <p><strong>Age:</strong> {userData.age}</p>
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded mt-2"
                    onClick={() => setEditMode(true)}
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </div>
        );
      case "cart":
        return <div><h2 className="text-xl font-semibold">Cart Items</h2><p>Your cart items will be displayed here.</p></div>;
      case "wishlist":
        return <div><h2 className="text-xl font-semibold">Wishlist</h2><p>Your saved wishlist items will appear here.</p></div>;
      case "orders":
        return <div><h2 className="text-xl font-semibold">Order History</h2><p>Your past orders will be listed here.</p></div>;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 pt-24 flex flex-col mt-20 lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-1/4 bg-gray-200 dark:bg-gray-800 p-6 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 mb-6 lg:mb-0">
        <div className="flex flex-col items-center">
          <img src={profileImage} alt="Profile" className="rounded-full w-24 h-24 mb-4 border-4 border-gray-300 dark:border-gray-700" />
          <h2 className="text-md font-semibold text-gray-800 dark:text-white">{userData.name}</h2>
          <div className="flex flex-col space-y-2 mt-4 w-full">
            <button onClick={() => setSelectedTab("profile")} className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700">Profile Settings</button>
            <button onClick={() => setSelectedTab("cart")} className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700">Cart</button>
            <button onClick={() => setSelectedTab("wishlist")} className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700">Wishlist</button>
            <button onClick={() => setSelectedTab("orders")} className="w-full text-left p-3 rounded bg-gray-300 dark:bg-gray-700">Orders</button>
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="w-full lg:w-3/4 p-6">
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;