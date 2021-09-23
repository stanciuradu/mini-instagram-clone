import React from "react";
import "../../components/Main/Main.css";
import { ReactComponent as Verification } from "../../assets/icons/verification.svg";

function Main() {
  return (
    <div className="main">
      <img src="https://i.imgur.com/N7YnAMy.jpg" alt="Logo" />
      <div className="content-main">
        <div className="title-content-main">
          <p>mozzila</p>
          <Verification />
          <button type="button" className="btn btn-primary">
            Urmarește
          </button>
        </div>
        <div className="details-content-main">
          <p>
            <span className="details">190</span>postări
          </p>
          <p>
            <span className="details">20,6 mii</span>de urmăritori
          </p>
          <p>
            <span className="details">49</span>de urmăriri
          </p>
        </div>
        <h1>Mozilla</h1>
        <p className="subtitle">Organizație caritabilă</p>
        <p>
          We work to ensure the internet remains a public resource that is open
          and accessible to all.
        </p>
        <p>
          The nonprofit behind{" "}
          <span className="firefox">@Firefox. #BlackLivesMatter</span> ✊🏽✊🏾✊🏿
        </p>
        <div className="border"></div>
      </div>
    </div>
  );
}

export default Main;
