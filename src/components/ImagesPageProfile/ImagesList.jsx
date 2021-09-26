import React from "react";
import ImagesItem from "./ImagesItem";

function ImagesList(props) {
  const { pictures } = props;
  return (
    <div className="container">
      <div className="row">
        {pictures.map((picture, index) => {
          return <ImagesItem image={picture.image} key={index} />;
        })}
      </div>
    </div>
  );
}

export default ImagesList;
