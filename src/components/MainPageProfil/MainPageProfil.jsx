import React from "react";
import optiuni from "../../assets/images/optiuni.png";
import "../MainPageProfil/MainPageProfil.css";

function MainPageProfil() {
  return (
    <div className="main-page-profil">
      <img src="https://i.imgur.com/Aak7nsE.jpg" alt="" />
      <div className="main-page">
        <div className="main-page-profil-content">
          <p>radustanciu841</p>
          <button type="button" className="button">
            Editeaza profilul
          </button>
          <img src={optiuni} alt="Optiuni" className="optiuni" />
        </div>
        <div className="page-profil-details">
          <p>
            <span className="details">3</span>postări
          </p>
          <p>
            <span className="details">51</span>de urmăritori
          </p>
          <p>
            <span className="details">181</span>de urmăriri
          </p>
        </div>
        <h1>Radu Stanciu</h1>
      </div>
    </div>
  );
}

export default MainPageProfil;
