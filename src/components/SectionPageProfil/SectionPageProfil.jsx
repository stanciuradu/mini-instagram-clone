import React, { Component } from "react";
import "../SectionPageProfil/SectionPageProfil.css";
import postari from "../../assets/images/postari.png";
import video from "../../assets/images/video.png";
import salvate from "../../assets/images/salvate.png";
import etichetele from "../../assets/images/etichetele.png";

export class SectionPageProfil extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="sectiune">
          <div className="section-buttons">
            <div className="button-post">
              <img src={postari} alt="Postari" />
              <button type="button">POSTĂRI</button>
            </div>
            <div className="button-video">
              <img src={video} alt="Video" />
              <button type="button">IGTV</button>
            </div>
            <div className="button-salvate">
              <img src={salvate} alt="Video" />
              <button type="button">SALVATE</button>
            </div>
            <div className="button-etichete">
              <img src={etichetele} alt="Etichete" />
              <button type="button">ETICHETE</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SectionPageProfil;
