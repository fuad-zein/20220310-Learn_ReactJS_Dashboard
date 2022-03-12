import React, { Component } from "react";
import SideBar from "./components/sidebar/SideBar";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <div className="app">
          <SideBar />
          <Body />
          <Footer />
        </div>
      </>
    );
  }
}

export default App;
