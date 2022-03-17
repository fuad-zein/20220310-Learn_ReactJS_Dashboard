import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Summary from "./pages/summary/Summary.jsx";
import Transaction from "./pages/transaction/Transaction.jsx";
import Statistics from "./pages/statistics/Statistics.jsx";
import Product from "./pages/product/Product.jsx";
import Catagory from "./pages/catagory/Catagory.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/summary" element={<Summary />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/statistic" element={<Statistics />} />
        <Route path="/product" element={<Product />} />
        <Route path="/catagory" element={<Catagory />} />
        <Route path="*" element={<Navigate to={"/summary"} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
