import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Trash from "../../components/Trash";
import Edit from "../../components/Edit";
import CreateTransaction from "../../components/CreateTransaction";
import {
  getListTransaction,
  deleteTransaction,
  detailTransaction,
} from "../../actions/TransactionAction.js";
import "../../pages/Summary.css";

export default function Main() {
  const dispatch = useDispatch();
  const [totalIncomes, setTotalIncomes] = useState(0);
  const [totalSolds, setTotalSolds] = useState(0);
  const [totalCustomers, setTotalCustomers] = useState(0);

  const {
    listTransactionResult,
    listTransactionLoading,
    listTransactionError,
    deleteTransactionResult,
  } = useSelector((state) => state.TransactionReducer);

  useEffect(() => {
    dispatch(getListTransaction());
  }, [dispatch]);

  useEffect(() => {
    if (deleteTransactionResult) {
      dispatch(getListTransaction());
    }
  }, [deleteTransactionResult, dispatch]);

  useEffect(() => {
    if (listTransactionResult && listTransactionResult.length > 0) {
      let inc = 0;
      let sol = 0;
      // const customer = listTransactionResult.length;
      for (let i = 0; i < listTransactionResult.length; i++) {
        inc += +listTransactionResult[i].income;
        sol += +listTransactionResult[i].sold;
        // console.log(+listTransactionResult[i].income);
      }
      setTotalIncomes(inc);
      setTotalSolds(sol);
      setTotalCustomers(listTransactionResult.length);
    }
  }, [listTransactionResult]);

  return (
    <div className="main">
      <div className="pt-10 px-10 w-full">
        <div className="flex mb-8">
          <h1 className="font-extrabold text-2xl w-full">
            Transaction Dashboard
          </h1>
        </div>
        <div className="grid grid-cols-3">
          <div className="col-span-2 border-r-2 border-gray-custom mb-6">
            <CreateTransaction />
          </div>
          <div className="col-span-1 ml-4">
            <div className="font-bold mb-5 text-base">
              <p>Total Customer = {totalCustomers} orang</p>
              <p>Total Income = {totalIncomes} rupiah</p>
              <p>Total Sold Out = {totalSolds} barang</p>
            </div>
          </div>
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
            {listTransactionResult ? (
              listTransactionResult.map((transaction) => {
                return (
                  <tbody>
                    <tr>
                      <td className="border-4 border-slate-600 pl-2">
                        {transaction.customer}
                      </td>
                      <td className="border-4 border-slate-600 text-center">
                        {/* input number */}
                        {transaction.income}
                      </td>
                      <td className="border-4 border-slate-600 text-center">
                        {transaction.sold}
                      </td>
                      <td className="border-4 border-slate-600 text-center">
                        <button
                          className="mr-4"
                          onClick={() =>
                            dispatch(detailTransaction(transaction))
                          }
                        >
                          <Edit />
                        </button>
                        <button
                          onClick={() =>
                            dispatch(deleteTransaction(transaction.id))
                          }
                        >
                          <Trash />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                );
              })
            ) : listTransactionLoading ? (
              <div className="text-center">Loading...</div>
            ) : listTransactionError ? (
              <div className="text-center">{listTransactionError + "..."}</div>
            ) : (
              <div className="text-center">Data Kosong</div>
            )}
          </table>
        </div>
      </div>
    </div>
  );
}
