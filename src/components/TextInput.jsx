import React from "react";

export default function TextInput({ title, nilai }) {
  // const { title, nilai } = props;
  return (
    <>
      <div className="bg-violet-400  rounded-xl shadow-lg p-5 text-white">
        <h2 className="font-bold text-lg">{title}</h2>
        <input
          placeholder="value"
          className="text-sm w-full bg-violet-400 text-white outline-none placeholder:text-gray-300"
        >
          {nilai}
        </input>
      </div>
    </>
  );
}
