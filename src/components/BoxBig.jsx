import React from "react";

export default function BoxBig({ title, nilai, text, tanggal }) {
  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-5">
        <h2 className="font-bold text-lg">{title}</h2>
        <h2 className="font-bold text-lg">{nilai}</h2>
        <p className="text-sm">{text}</p>
        <p className="text-sm">{tanggal}</p>
      </div>
    </>
  );
}
