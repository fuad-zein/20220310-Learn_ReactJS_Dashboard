import React from "react";
import BoxSmall from "../../components/BoxSmall.jsx";
import BoxBig from "../../components/BoxBig.jsx";
import BoxMain from "../../components/BoxMain.jsx";
import Search from "../../assets/search.svg";
import Inventory from "../../assets/inventory.svg";
import TableOrders from "../../components/TableOrders.jsx";
import "../../pages/Summary.css";

export default function Main() {
  return (
    <div className="main">
      <div className="pt-10 px-10 w-full">
        <div className="flex mb-10">
          <h1 className="font-extrabold text-2xl w-full">Business Dashboard</h1>
          <div className="grid grid-cols-2 gap-5">
            <BoxSmall image={Search} />
            <BoxSmall image={Inventory} />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          <BoxMain title="CUSTOMERS" boxTotalValue="24" />
          <BoxMain title="INCOME" boxTotalValue="50" />
          <BoxMain title="PRODUCTS SOLD" boxTotalValue="34" />
        </div>

        <div className="pt-5">
          <h2 className="font-bold text-lg">Marketplace</h2>
          {/* <button onClick={this.handleClick()}>Klik</button> */}
          <div className="grid gap-3">
            {/* grid grid-rows-4 grid-flow-col gap-x-6 pt-5 bg-yellow-100 */}
            <div className="col-span-2">
              <BoxBig
                title="Data Analytics Overview"
                text="See how your account grow and how you can boost it."
              />
            </div>
            <div className="col-span-2">
              <BoxBig
                title="Finance Flow"
                nilai="2.530"
                tanggal="September 2021"
              />
            </div>
            <div className="row-span-3">
              <BoxBig
                title="UPGRADE TO PRO"
                nilai="29 p/m"
                text="100% insurence for your goods"
              />
            </div>
          </div>
        </div>

        <div className="pt-8">
          <h2 className="font-bold text-lg">Recent Orders</h2>
          <div>
            <TableOrders />
          </div>
        </div>
      </div>
    </div>
  );
}
