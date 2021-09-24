import React from "react";

function PostsItem(props) {
  const { image } = props;
  return (
    <div className="col-4 mb-4">
      <img src={image} alt="" />
    </div>
  );
}

export default PostsItem;
