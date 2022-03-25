import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListTransaction } from "../../actions/TransactionAction.js";
import RedTriangle from "../../components/RedTriangle.jsx";
import GreenTriangle from "../../components/GreenTriangle.jsx";
import Folder from "../../assets/folder.svg";
import Price from "../../assets/price.svg";
import BoxSide from "../../components/BoxSide";
// import BoxBigSide from "../../components/BoxBigSide";
import Hand from "../../assets/hand.svg";
import Foot from "../../assets/foot.svg";
import "../../pages/Summary.css";

export default function SideBar() {
  const [total, setTotal] = useState(0);
  const dispatch = useDispatch();

  const { listTransactionResult } = useSelector(
    (state) => state.TransactionReducer
  );

  const handlePlus = () => {
    setTotal((total) => total + 100);
  };

  const handleMinus = () => {
    setTotal((total) => total - 100);
  };

  useEffect(() => {
    dispatch(getListTransaction());
  }, [dispatch]);

  useEffect(() => {
    if (listTransactionResult && listTransactionResult.length > 0) {
      let inc = 0;
      let sol = 0;
      for (let i = 0; i < listTransactionResult.length; i++) {
        inc += +listTransactionResult[i].income;
        sol += +listTransactionResult[i].sold;
      }
      setTotal(inc + sol + listTransactionResult.length);
    }
  }, [listTransactionResult]);
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
            <h1 className="pt-3 text-2xl font-bold">
              {/* format mata uang rupiah */}
              {new Intl.NumberFormat("id-ID", {
                style: "currency",
                currency: "IDR",
              }).format(total)}
              {/* {total} */}
            </h1>
          </div>
          <div className="pt-3 grid grid-cols-2">
            <button className="flex items-center" onClick={handlePlus}>
              <GreenTriangle />
              <p className="text-xs ml-4 text-gray-custom"> + Rp 1.00,00</p>
            </button>
            <button className="flex items-center" onClick={handleMinus}>
              <RedTriangle />
              <p className="text-xs ml-4 text-gray-custom"> - Rp 1.00,00</p>
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
