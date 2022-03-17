import React from "react";

export default function BoxSide({ image }) {
  return (
    <>
      <div className="bg-violet-custom  rounded-xl shadow-lg w-10 h-10 text-white flex-center">
        <img src={image} alt="image" className="w-6 h-6" />
      </div>
    </>
  );
}
