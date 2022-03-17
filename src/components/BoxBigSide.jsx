import React from "react";

export default function BoxBigSide({ image, title, value }) {
  return (
    <>
      <div className="bg-yellow-300 rounded-xl shadow-lg">
        <img src={image} alt="gambar" className="w-6 h-6 ml-6" />
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </>
  );
}
