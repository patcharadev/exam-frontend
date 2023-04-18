import React from "react";
import logo from "./assets/images/logo.png";
import Homepage from "./components/HomePage";

const App = () => {
  return (
    <div className="app">
      <img src={logo} className="logo"></img>
      <div className="container">
        <Homepage></Homepage>
      </div>
    </div>
  );
};

export default App;
