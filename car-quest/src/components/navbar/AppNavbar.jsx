import React from "react";
import "./AppNavbar.css";
import logo from "../../assets/State-Farm-Logo.jpeg";
import Container from "react-bootstrap/Container";

function AppNavbar() {
  return (
    <div className="navbar">
      <img src={logo}></img>
    </div>
  );
}

export default AppNavbar;
