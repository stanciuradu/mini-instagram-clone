import React from "react";
// import "../HeaderPageProfil/HeaderPageProfil.css";
import '../HeaderPageProfil/HeaderPageProfil.scss';
import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.png";
import inbox from "../../assets/images/inbox.png";
import posts from "../../assets/images/posts.png";
import videoclip from "../../assets/images/videoclip.png";
import { Link } from "react-router-dom";
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg";

function HeaderPageProfil() {
  return (
    <div className="header-page-profil">
      <Link to="/">
        <img src={logo} alt="Logo" />
      </Link>
      <input type="search" placeholder="Caută" className="form-control" />
      <div className="icons-page-profile">
        <button type="button">
          <img src={home} alt="Home" />
        </button>
        <button type="button">
          <img src={inbox} alt="Inbox" />
        </button>
        <button type="button">
          <img src={posts} alt="Posts" />
        </button>
        <button type="button">
          <img src={videoclip} alt="Videoclip" />
        </button>
        <button type="button">
          <Favorite />
        </button>
        <img src="https://i.imgur.com/Aak7nsE.jpg" alt="" className="profile" />
      </div>
    </div>
  );
}

export default HeaderPageProfil;
