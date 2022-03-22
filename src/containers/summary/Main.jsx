import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
import axios from "axios";
// import BoxMain from "../../components/BoxMain.jsx";
import BoxSmall from "../../components/BoxSmall.jsx";
import BoxBig from "../../components/BoxBig.jsx";
import Search from "../../assets/search.svg";
import Inventory from "../../assets/inventory.svg";
import TableOrders from "../../components/TableOrders.jsx";
// import { getListSummary } from "../../actions/SummaryAction";
import "../../pages/Summary.css";

export default function Main() {
  // const dispatch = useDispatch();
  const [data, setData] = useState([]);
  // const [count, setCount] = useState(0);
  // const [minus, setMinus] = useState(10);

  // Fetch API
  // const [customers, setCustomers] = useState([]);
  // const [totalCustomers, setTotalCustomers] = useState(0);
  // const [totalIncome, setTotalIncome] = useState(0);
  // const [totalSold, setTotalSold] = useState(0);

  // Contoh useEffect for props or state values:
  // useEffect(() => {
  //   console.log("changes render");
  // }, [minus]);

  // Contoh useEffect an empty array & destroy:
  // useEffect(() => {
  //   console.log("first render");

  //   return () => {
  //     console.log("cleenup");
  //   };
  // }, []);

  // useEffect(() => {
  //   axios
  //     // .get("https://6229a392be12fc4538a38c09.mockapi.io/customer")
  //     .get("http://localhost:4000/order")
  //     .then(function (response) {
  //       const customers = response.data;
  //       // console.log(customers, "data");
  //       // console.log(response.data[3].?customer);
  //       let inc = 0;
  //       let sol = 0;
  //       const customer = customers.length;
  //       for (let i = 0; i < customers.length; i++) {
  //         console.log(customers[i].income);
  //         inc += customers[i].income;
  //         sol += customers[i].sold;
  //       }
  //       // console.log(inc);
  //       // console.log(sol);
  //       // setCustomers(response.data);
  //       setTotalCustomers(customer);
  //       setTotalIncome(inc);
  //       setTotalSold(sol);
  //     })
  //     .catch(function (error) {
  //       throw error;
  //     });
  // }, []);

  useEffect(() => {
    axios
      .get("http://localhost:4000/dashboard")
      .then(function (response) {
        setData(response.data);
      })
      .catch(function (error) {
        throw error;
      });
  }, []);

  // Example function for props or state values:
  // const handleClick = () => {
  //   setCount(count + 1);
  // };

  // const handleMinus = () => {
  //   setMinus(minus - 1);
  // };

  // console.log(customers);
  return (
    <div className="main">
      <div className="pt-10 px-10 w-full">
        <div className="flex mb-10">
          <h1 className="font-extrabold text-2xl w-full">Business Dashboard</h1>
          <div className="grid grid-cols-2 gap-5">
            {/* Contoh */}
            {/* <button onClick={handleClick}>
              <BoxSmall image={Search} />
            </button> */}
            {/* <h1>{count}</h1>
            <button onClick={handleMinus}>Minus</button>
            <h1>{minus}</h1> */}

            <BoxSmall image={Search} />
            <BoxSmall image={Inventory} />
          </div>
        </div>

        {/* Contoh mapping */}
        {/* <div>
          {customers.map((items, index) => {
            return (
              <p key={index}>
                {items.customer} : {items.income}
              </p>
            );
          })}
        </div> */}

        <div className="grid grid-cols-3 gap-3 mb-5">
          {/* <BoxMain title="CUSTOMERS" boxTotalValue={totalCustomers} />
          <BoxMain title="INCOME" boxTotalValue={totalIncome} />
          <BoxMain title="PRODUCTS SOLD" boxTotalValue={totalSold} /> */}
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
            {data.map((item) => {
              return <TableOrders data={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
