import React from "react";
import PostsItem from "./PostsItem";

function PostList(props) {
  const { posts } = props;
  return (
    <div className="container">
      <div className="row">
        {posts.map((post, index) => {
          return <PostsItem image={post.image} key={index} />;
        })}
      </div>
    </div>
  );
}

export default PostList;
