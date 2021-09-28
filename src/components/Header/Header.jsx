import React from "react";
import '../Header/Header.scss';
import logo from "../../assets/images/logo.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <img src={logo} alt="Logo" />
      <input type="search" placeholder="Caută" className="form-control" />
      <div className="header-buttons">
        <Link to="/conectare">
          <button type="button" className="btn btn-primary">
            Conectare
          </button>
        </Link>
        <Link to="/înscrie-te">
          <button type="button" className="sign-up">
            Înscrie-te
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Header;
