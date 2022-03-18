import React, { useState, useEffect } from "react";
import Trash from "../../assets/trash.svg";
import Edit from "../../assets/edit.svg";
import axios from "axios";
// import TextInput from "../../components/TextInput.jsx";
import "../../pages/Summary.css";

export default function Main() {
  const [customers, setCustomers] = useState([]);
  const [totalCustomers, setTotalCustomers] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalSold, setTotalSold] = useState(0);

  useEffect(() => {
    axios
      // .get("https://6229a392be12fc4538a38c09.mockapi.io/customer")
      .get("http://localhost:4000/order")
      .then(function (response) {
        setCustomers(response.data);
        const customers = response.data;
        console.log(response.data);
        // console.log(customers, "data");
        // console.log(response.data[3].?customer);
        let inc = 0;
        let sol = 0;
        const customer = customers.length;
        for (let i = 0; i < customers.length; i++) {
          // console.log(customers[i].income);
          inc += customers[i].income;
          sol += customers[i].sold;
        }
        // console.log(inc);
        // console.log(sol);
        // setCustomers(response.data);
        setTotalCustomers(customer);
        setTotalIncome(inc);
        setTotalSold(sol);
      })
      .catch(function (error) {
        throw error;
      });
  }, []);

  // console.log(customers);
  return (
    <div className="main">
      <div className="pt-10 px-10 w-full">
        <div className="flex mb-10">
          <h1 className="font-extrabold text-2xl w-full">
            Transaction Dashboard
          </h1>
        </div>
        {/* <div className="grid grid-cols-3 gap-3 mb-5">
          <TextInput title="customer" />
          <TextInput title="income" />
          <TextInput title="sold" />
        </div> */}

        <div className="">
          <button className="rounded-lg mb-4 w-32 text-white text-lg font-bold bg-sky-600 hover:bg-sky-700">
            Create
          </button>
        </div>

        <div>
          <table className="table-fixed border-collapse border-4 border-slate-500 text-lg">
            <thead className="bg-amber-200">
              <tr>
                <th className="border-4 border-slate-600 w-96">CUSTOMERS</th>
                <th className="border-4 border-slate-600 w-40">INCOME</th>
                <th className="border-4 border-slate-600 w-40">SOLD OUT</th>
                <th className="border-4 border-slate-600 ">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {customers.map((items, index) => {
                // console.log(customers);
                // console.log(items, "items");
                return (
                  <tr>
                    <td key={index} className="border-4 border-slate-600">
                      {items.customer}
                    </td>
                    <td
                      key={index}
                      className="border-4 border-slate-600 text-center"
                    >
                      {items.income}
                    </td>
                    <td
                      key={index}
                      className="border-4 border-slate-600 text-center"
                    >
                      {items.sold}
                    </td>
                    <td className="border-4 border-slate-600 text-center">
                      <button>
                        <img src={Edit} alt="edit" className="mr-4" />
                      </button>
                      <button>
                        <img src={Trash} alt="trash" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="mt-10">
            <p>
              <b>Total Customer</b> = {totalCustomers} orang
            </p>
            <p>
              <b>Total Income</b> = {totalIncome} rupiah
            </p>
            <p>
              <b>Total Sold Out</b> = {totalSold} barang
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
