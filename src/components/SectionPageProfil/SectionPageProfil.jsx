import React, { Component } from "react";
import "../SectionPageProfil/SectionPageProfil.css";
import postari from "../../assets/images/postari.png";
import video from "../../assets/images/video.png";
import salvate from "../../assets/images/salvate.png";
import etichetele from "../../assets/images/etichetele.png";
import pictures from '../../utils/pictures.json';
import ImagesList from "../ImagesPageProfile/ImagesList";

export class SectionPageProfil extends Component {
  constructor() {
    super();
    this.state = {
      pictures:[]
    };
  }
  componentDidMount(){
    this.setState({pictures:pictures})
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
        <ImagesList pictures={this.state.pictures} />
        {/* <div className='button-page-profile'>
          <button type='button'>Despre</button>
          <button type='button'>Blog</button>
          <button type='button'>Joburi</button>
          <button type='button'>Ajutor</button>
          <button type='button'>API</button>
          <button type='button'>Confidentialitate</button>
          <button type='button'>Conditii de utilizare</button>
          <button type='button'>Top conturi</button>
          <button type='button'>Hastaguri</button>
          <button type='button'>Locatii</button>
          <button type='button'>Instagram Lite</button>
        </div> */}
      </div>
    );
  }
}

export default SectionPageProfil;
