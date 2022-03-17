import React from "react";

export default function BoxSmall({ image }) {
  return (
    <>
      <div className="bg-white  rounded-xl shadow-lg w-10 h-10 text-white flex-center">
        <img src={image} alt="image" className="w-6 h-6" />
      </div>
    </>
  );
}
