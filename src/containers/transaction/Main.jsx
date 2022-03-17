import React from "react";
import TextInput from "../../components/TextInput.jsx";
import "../../pages/Summary.css";

export default function Main() {
  return (
    <div className="main">
      <div className="pt-10 px-10 w-full">
        <div className="flex mb-10">
          <h1 className="font-extrabold text-2xl w-full">
            Transaction Dashboard
          </h1>
        </div>
        <div className="grid grid-cols-3 gap-3 mb-5">
          <TextInput title="customer" />
          <TextInput title="income" />
          <TextInput title="sold" />
        </div>
      </div>
    </div>
  );
}
