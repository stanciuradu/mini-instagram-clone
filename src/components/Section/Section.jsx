import React, { Component } from "react";
import "../Section/Section.css";
import postari from "../../assets/images/postari.png";
import video from "../../assets/images/video.png";
import etichete from "../../assets/images/etichete.png";

export class Section extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="sectiune">
        <div className="button-post">
          <img src={postari} alt="Postari" />
          <button type="button">POSTĂRI</button>
        </div>
        <div className="button-video">
          <img src={video} alt="Video" />
          <button type="button">IGTV</button>
        </div>
        <div className="button-etichete">
          <img src={etichete} alt="Etichete" />
          <button type="button">ETICHETE</button>
        </div>
      </div>
    );
  }
}

export default Section;
