import React from "react";
import "../../components/Header/Header.css";
import logo from "../../assets/images/logo.png";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
        <input type="search" placeholder="Cauta" />
      <div className="header-buttons">
        <button type="button" className="log-in">
          Log In
        </button>
        <button type="button" className="sign-up">
          Sign Up
        </button>
      </div>
    </div>
  );
}

export default Header;
