import React from "react";
import { Link } from "react-router-dom";
import Message from "./Message";
import Logo from "../../assets/logo.svg";
import PieChartIcon from "@mui/icons-material/PieChart";
import CompareArrowsIcon from "@mui/icons-material/CompareArrows";
import BarChartIcon from "@mui/icons-material/BarChart";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import CalendarViewMonthIcon from "@mui/icons-material/CalendarViewMonth";
import "../../pages/Summary.css";

export default function Nav() {
  return (
    <div className="navigation border-r-2 border-gray-custom">
      <div className="ml-4 pt-6">
        {/* Logo */}
        <div className="pb-5 flex-center gap-4">
          <div className="bg-white rounded-xl shadow-lg flex-center h-16 w-16">
            <img src={Logo} alt="logo" />
          </div>
          <div className="font-bold flex-wrap">
            <span className="text-sm block">020</span>
            <span className="text-sm block">BRAND</span>
            <span className="text-sm block">PROTECTOR</span>
          </div>
        </div>

        {/* Menu */}
        <div className="ml-6 pt-20 grid gap-6">
          <Link to="/summary" className="list-menu">
            <PieChartIcon />
            SUMMARY
          </Link>
          <Link to="/transaction" className="list-menu">
            <CompareArrowsIcon />
            TRANSACTION
          </Link>
          <Link to="/statistic" className="list-menu">
            <BarChartIcon />
            STATISTICS
          </Link>
          <Link to="/product" className="list-menu">
            <ProductionQuantityLimitsIcon />
            PRODUCT
          </Link>
          <Link to="/catagory" className="list-menu">
            <CalendarViewMonthIcon />
            CATAGORY
          </Link>
        </div>
        <div className="pt-20 mr-4">
          <Message />
        </div>
      </div>
    </div>
  );
}
