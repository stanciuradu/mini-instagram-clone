import React from "react";
import "../HeaderPageProfil/HeaderPageProfil.css";
import logo from "../../assets/images/logo.png";
import home from "../../assets/images/home.png";
import inbox from "../../assets/images/inbox.png";
import posts from "../../assets/images/posts.png";
import videoclip from "../../assets/images/videoclip.png";
import { ReactComponent as Favorite } from "../../assets/icons/favorite.svg";

function HeaderPageProfil() {
  return (
    <div className="header-page-profil">
      <img src={logo} alt="Logo" />
      <input type="search" placeholder="Caută" className="form-control" />
      <div className="icons-page-profile">
        <img src={home} alt="Home" />
        <img src={inbox} alt="Inbox" />
        <img src={posts} alt="Posts" />
        <img src={videoclip} alt="Videoclip" />
        <Favorite />
        <img src="https://i.imgur.com/Aak7nsE.jpg" alt="" className='profile' />
      </div>
    </div>
  );
}

export default HeaderPageProfil;
