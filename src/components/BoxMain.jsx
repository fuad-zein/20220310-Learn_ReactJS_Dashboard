import React from "react";

export default function BoxMain({ title, nilai }) {
  // const { title, nilai } = props;
  return (
    <>
      <div className="bg-violet-400  rounded-xl shadow-lg p-5 text-white">
        <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm">{nilai}</p>
      </div>
    </>
  );
}
