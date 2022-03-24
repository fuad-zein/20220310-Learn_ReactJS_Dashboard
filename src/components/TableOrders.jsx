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
      <div className="">
        {getListSummaryResult ? (
          getListSummaryResult.map((data) => {
            return (
              <table className="table-fixed text-sm">
                <tbody>
                  <tr className="border">
                    <td className="p-2 text-center border-4 border-slate-300">
                      {data.id}
                    </td>
                    <td className="text-center border-4 border-slate-300">
                      {data.goodsname}
                    </td>
                    <td className="text-center border-4 border-slate-300">
                      {/* {data.date} */}
                      {new Intl.DateTimeFormat("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "2-digit",
                      }).format(new Date(data.date))}
                    </td>
                    <td className="text-center border-4 border-slate-300">
                      {data.price}
                    </td>
                    <td className="text-center border-4 border-slate-300">
                      {data.status}
                    </td>
                  </tr>
                </tbody>
              </table>
            );
          })
        ) : getListSummaryLoading ? (
          <p>Loading...</p>
        ) : (
          <p>{getListSummaryError ? getListSummaryError : "Data Kosong"}</p>
        )}
      </div>
    </div>
  );
}
