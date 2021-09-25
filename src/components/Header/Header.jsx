import React from "react";
import "../../components/Header/Header.css";
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <input type="search" placeholder="Cauta" />
      <div className="header-buttons">
        <Link to='/login'>
          <button type="button" className="btn btn-primary">
            Log In
          </button>
        </Link>
        <Link to='/sign_up'>
          <button type="button" className="sign-up">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
