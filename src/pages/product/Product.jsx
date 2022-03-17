// import SideBar from "../../containers/summary/SideBar.jsx";
import Nav from "../../containers/summary/Nav.jsx";
import Main from "../../containers/product/Main.jsx";
import "../Summary.css";

function App() {
  return (
    <div className="pages">
      <Nav />
      <Main />
      {/* <SideBar /> */}
    </div>
  );
}

export default App;
