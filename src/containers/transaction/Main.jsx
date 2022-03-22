import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Trash from "../../components/Trash";
import Edit from "../../components/Edit";
import { getListTransaction } from "../../actions/TransactionAction.js";
import "../../pages/Summary.css";

export default function Main(index) {
  const dispatch = useDispatch();

  const {
    listTransactionResult,
    listTransactionLoading,
    listTransactionError,
  } = useSelector((state) => state.TransactionReducer);

  useEffect(() => {
    dispatch(getListTransaction());
  }, [index, dispatch]);

  return (
    <div className="main">
      <div className="pt-10 px-10 w-full">
        <div className="flex mb-10">
          <h1 className="font-extrabold text-2xl w-full">
            Transaction Dashboard
          </h1>
        </div>
        <div className="font-bold mb-5">
          {/* {listTransactionResult.map((transaction) => {
            return console.log(transaction);
          })} */}
          <p>Total Customer = ... orang</p>
          <p>Total Income = ... rupiah</p>
          <p>Total Sold Out = ... barang</p>
        </div>
        <div>
          <table className="table-fixed border-collapse border-4 border-slate-500 text-lg">
            <thead className="bg-amber-200">
              <tr>
                <th className="border-4 border-slate-600 w-96">CUSTOMERS</th>
                <th className="border-4 border-slate-600 w-40">INCOME</th>
                <th className="border-4 border-slate-600 w-40">SOLD OUT</th>
                <th className="border-4 border-slate-600">DESCRIPTION</th>
              </tr>
            </thead>
            <tbody>
              {listTransactionResult ? (
                listTransactionResult.map((transaction) => {
                  // console.log(transaction, "transaction");
                  return (
                    <tr>
                      <td className="border-4 border-slate-600 pl-2">
                        {transaction.customer}
                      </td>
                      <td className="border-4 border-slate-600 text-center">
                        {transaction.income}
                      </td>
                      <td className="border-4 border-slate-600 text-center">
                        {transaction.sold}
                      </td>
                      <td className="border-4 border-slate-600 text-center">
                        <button className="mr-4">
                          <Edit />
                        </button>
                        <button>
                          <Trash />
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : listTransactionLoading ? (
                <div className="text-center">Loading...</div>
              ) : listTransactionError ? (
                <div className="text-center">
                  {listTransactionError + "..."}
                </div>
              ) : (
                <div className="text-center">Data Kosong</div>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
