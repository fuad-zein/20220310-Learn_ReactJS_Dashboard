import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getListSummary } from "../actions/SummaryAction.js";

export default function TableOrders() {
  const dispatch = useDispatch();
  const { getListSummaryResult, getListSummaryLoading, getListSummaryError } =
    useSelector((state) => state.SummaryReducer);

  useEffect(() => {
    dispatch(getListSummary());
  }, [dispatch]);

  return (
    <div className="mt-3">
      <table class="table-fixed text-sm">
        <tbody className="">
          <div>
            {getListSummaryResult ? (
              getListSummaryResult.map((data) => {
                return (
                  <tr className="border">
                    <td className="p-2 text-center border-4 border-slate-300">
                      {data.id}
                    </td>
                    <td className="text-center border-4 border-slate-300">
                      {data.goodsname}
                    </td>
                    <td className="text-center border-4 border-slate-300">
                      {data.date}
                    </td>
                    <td className="text-center border-4 border-slate-300">
                      {data.price}
                    </td>
                    <td className="text-center border-4 border-slate-300">
                      {data.status}
                    </td>
                  </tr>
                );
              })
            ) : getListSummaryLoading ? (
              <p>Loading...</p>
            ) : (
              <p>{getListSummaryError ? getListSummaryError : "Data Kosong"}</p>
            )}
          </div>
        </tbody>
      </table>
    </div>
  );
}
