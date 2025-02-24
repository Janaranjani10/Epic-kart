"use client";
import { useState } from "react";

const ProfileContent = ({ profileImage, setProfileImage }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    mobile: "9876543210",
    age: "25",
  });

  const handleEdit = () => setIsEditing(!isEditing);
  const handleChange = (e) => setUserData({ ...userData, [e.target.name]: e.target.value });

  return (
    <div>
      <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Profile Settings</h2>

      {/* Profile Image Upload */}
      <div className="flex items-center space-x-4">
        <img src={profileImage} alt="Profile" className="rounded-full w-24 h-24 border-4 border-gray-300 dark:border-gray-700" />
        <input
          type="file"
          accept="image/*"
          onChange={(e) => {
            if (e.target.files && e.target.files.length > 0) {
              setProfileImage(URL.createObjectURL(e.target.files[0]));
            }
          }}
          className="text-sm text-gray-600 dark:text-gray-300"
        />
      </div>

      {/* Profile Details */}
      <div className="mt-6 space-y-4">
        {["name", "email", "mobile", "age"].map((field) => (
          <div key={field}>
            <label className="text-gray-700 dark:text-gray-300">{field.toUpperCase()}</label>
            <input
              type="text"
              name={field}
              value={userData[field]}
              onChange={handleChange}
              className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
              disabled={!isEditing}
            />
          </div>
        ))}
      </div>

      {/* Edit Button */}
      <button
        onClick={handleEdit}
        className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded transition"
      >
        {isEditing ? "Save" : "Edit"}
      </button>
    </div>
  );
};

export default ProfileContent;
