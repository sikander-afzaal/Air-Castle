import React from "react";
import "./Header.css";
import logo from "../../Assets/logo.svg";
function Header() {
  return (
    <div className="header">
      <img src={logo} alt="" className="logo" />
      <button className="touch">Get in touch</button>
    </div>
  );
}

export default Header;
