import React from "react";
import SegitigaHijau from "../../assets/segitiga-green.svg";
import SegitigaMerah from "../../assets/segitiga-red.svg";
import Folder from "../../assets/folder.svg";
import Price from "../../assets/price.svg";
import BoxSide from "../../components/BoxSide";
// import BoxBigSide from "../../components/BoxBigSide";
import Hand from "../../assets/hand.svg";
import Foot from "../../assets/foot.svg";
import "../../pages/Summary.css";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="pt-10 px-10">
        <div className="flex mb-10">
          <h1 className="font-extrabold text-2xl">Summary</h1>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-5">
          <div className="flex items-center">
            <h1 className="text-sm">Your Balance</h1>
            <button className="text-md ml-28">:</button>
          </div>
          <div>
            <h1 className="pt-3 text-2xl font-bold">$10 632.00</h1>
          </div>
          <div className="pt-3 grid grid-cols-2">
            <button className="flex">
              <img src={SegitigaHijau} alt="segitiga" className="w-4" />
              <p className="text-xs ml-1 text-gray-custom"> + 10</p>
            </button>
            <button className="flex">
              <img src={SegitigaMerah} alt="segitiga" className="w-4" />
              <p className="text-xs ml-1 text-gray-custom"> - 10</p>
            </button>
          </div>
        </div>

        <div className="pt-10">
          <div className="items-center grid grid-cols-2 border-b-2 border-gray-low">
            <h2 className="font-bold text-lg">Activity</h2>
            <p className="text-sm ml-20 text-violet-custom">SEE ALL</p>
          </div>
          <div className="flex pt-3 items-center">
            <BoxSide image={Folder} />
            <div className="grid ml-3">
              <h2 className="text-xs font-bold">Whitdraw Earning</h2>
              <p className="text-xs text-gray-custom">12:40 am</p>
            </div>
            <h3 className="text-sm font-bold ml-14">$4.120</h3>
          </div>
          <div className="flex pt-3 items-center">
            <BoxSide image={Price} />
            <div className="grid ml-3">
              <h2 className="text-xs font-bold">Paying Website tax</h2>
              <p className="text-xs text-gray-custom">10:20 am</p>
            </div>
            <h3 className="text-sm font-bold ml-14"> -$230 </h3>
          </div>
        </div>

        <div className="pt-10">
          <div>
            <h2 className="font-bold text-lg">Top Categories</h2>
            <p className="text-xs text-gray-custom pt-2">
              Explore your top categories and keep shopping with cashback
            </p>
          </div>
          <div className="grid grid-cols-2 pt-3 gap-3">
            <div className="bg-yellow-200 rounded-xl shadow-lg grid grid-row-3">
              <img src={Foot} alt="foot" className="w-6 h-6 ml-5 mt-3" />
              <h3 className="font-bold text-base ml-5 mt-3">Footwear</h3>
              <p className="text-xs ml-5 mb-2">18.941 units</p>
            </div>
            <div className="bg-green-200 rounded-xl shadow-lg grid grid-row-3">
              <img src={Hand} alt="foot" className="w-6 h-6 ml-5 mt-3" />
              <h3 className="font-bold text-base ml-5 mt-3">Acessories</h3>
              <p className="text-xs ml-5 mb-2">26.061 units</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
