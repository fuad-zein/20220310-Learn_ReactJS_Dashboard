import React from "react";
import Profile from "../../assets/profile-1-40.webp";

export default function Messages() {
  return (
    <div className="py-4 px-6 bg-white rounded-xl shadow-lg grid justify-center">
      <div className="flex justify-center">
        <img className="h-14 w-14" src={Profile} alt="Kucing" />
      </div>
      <p className="text-lg text-blue-custom font-semibold">Kitty Icon</p>
      <button className="px-4 py-1 text-xs text-pink-custom font-semibold rounded-full border border-purple-200 hover:bg-pink-low hover:border-transparent focus:outline-none focus:ring-2 focus:ring-pink-low">
        UPGRADE
      </button>
    </div>
  );
}
