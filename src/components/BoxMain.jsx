import React from "react";

export default function BoxMain({ title, boxTotalValue }) {
  // const { title, nilai } = props;
  // console.log(value);
  return (
    <>
      <div className="bg-violet-400  rounded-xl shadow-lg p-5 text-white">
        {/* <h2 className="font-bold text-lg">{title}</h2>
        <p className="text-sm">{nilai}</p> */}
        <h2 className="font-bold text-sm">{title}</h2>
        <p className="text-xs mt-2">{boxTotalValue}</p>
      </div>
    </>
  );
}
