import React from "react";
import { Link } from "react-router-dom";

function PostsItem(props) {
  const { image } = props;
  return (
    <div className="col-4 mb-4">
      <Link to="/conectare">
        <img src={image} alt="" />
      </Link>
    </div>
  );
}

export default PostsItem;
