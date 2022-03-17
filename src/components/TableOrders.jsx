import React from "react";

export default function TableOrders({ data }) {
  // console.log(data);
  return (
    <div className="bg-yellow-200 grid">
      <table class="table-fixed text-xs border-collapse border border-slate-400">
        <tbody>
          <tr className="border">
            <td className="text-center border border-slate-300">{data.id}</td>
            <td className="text-center border border-slate-300">
              {data.goodsname}
            </td>
            <td className="text-center border border-slate-300">{data.date}</td>
            <td className="text-center border border-slate-300">
              {data.price}
            </td>
            <td className="text-center border border-slate-300">
              {data.status}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
