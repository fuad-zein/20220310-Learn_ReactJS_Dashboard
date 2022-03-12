import React from "react";
import PieChartIcon from "@mui/icons-material/PieChart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import BarChartIcon from "@mui/icons-material/BarChart";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import DiamondIcon from "@mui/icons-material/Diamond";
import "./sidebar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <div>
          <DiamondIcon className="logo" />
          <h4 className="w-1/4 text-3xl pb-5">BRAND PROTECTOR</h4>
        </div>
        <ul>
          <li>
            <a href="#">
              <PieChartIcon />
              <span>SUMMARY</span>
            </a>
          </li>
          <li>
            <a href="#">
              <CompareArrowsIcon />
              <span>TRANSACTION</span>
            </a>
          </li>
          <li>
            <a href="#">
              <BarChartIcon />
              <span>STATISTICS</span>
            </a>
          </li>
          <li>
            <a href="#">
              <ProductionQuantityLimitsIcon />
              <span>PRODUCT</span>
            </a>
          </li>
          <li>
            <a href="#">
              <CalendarViewMonthIcon />
              <span>CATAGORY</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SideBar;
