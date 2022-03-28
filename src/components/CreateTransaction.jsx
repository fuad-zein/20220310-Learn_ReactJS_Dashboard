import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addTransaction,
  getListTransaction,
  updateTransaction,
} from "../actions/TransactionAction.js";

export default function CreateTransaction({ setTampung }) {
  const [customer, setCustomer] = useState("");
  const [income, setIncome] = useState("");
  const [sold, setSold] = useState("");
  const [id, setId] = useState("");
  const dispatch = useDispatch();
  const {
    // listTransactionResult,
    detailTransactionResult,
    updateTransactionResult,
  } = useSelector((state) => state.TransactionReducer);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      // update
      dispatch(
        updateTransaction({
          id: id,
          customer: customer,
          income: income,
          sold: sold,
        })
      );
    } else {
      // add
      dispatch(
        addTransaction({
          customer: customer,
          income: income,
          sold: sold,
        })
      );
      setCustomer("");
      setIncome("");
      setSold("");
    }
  };

  // useEffect(() => {
  //   if (handleSubmit) {
  //     dispatch(getListTransaction());
  //     setCustomer("");
  //     setIncome("");
  //     setSold("");
  //   }
  //   console.log("useEffect");
  // }, [dispatch]);

  useEffect(() => {
    if (detailTransactionResult) {
      setId(detailTransactionResult.id);
      setCustomer(detailTransactionResult.customer);
      setIncome(detailTransactionResult.income);
      setSold(detailTransactionResult.sold);
    }
  }, [detailTransactionResult, dispatch]);

  useEffect(() => {
    if (updateTransactionResult) {
      dispatch(getListTransaction());
      setCustomer("");
      setIncome("");
      setSold("");
      setId("");
    }
  }, [updateTransactionResult, dispatch]);

  return (
    <div className="antialiased">
      <p>coba</p>
      <p className="font-bold text-base mb-3">
        {id ? "Edit Transaction" : "Create Transaction"}
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          className="form-input block w-max outline-none p-1 my-1 border"
          placeholder="name customer"
          type="text"
          name="customer"
          value={customer}
          onChange={(e) => setCustomer(e.target.value)}
        />
        <input
          className="form-input block w-max outline-none p-1 my-1 border"
          placeholder="Income"
          type="number"
          name="income"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
        <input
          className="form-input block w-max outline-none p-1 my-1 border"
          placeholder="Sold Out"
          type="number"
          name="sold"
          value={sold}
          onChange={(e) => setSold(e.target.value)}
        />
        <button
          type="submit"
          className="rounded-lg my-4 w-32 text-white text-lg font-bold bg-sky-600 hover:bg-sky-700"
        >
          {id ? "Update" : "Create"}
        </button>
      </form>
    </div>
  );
}
