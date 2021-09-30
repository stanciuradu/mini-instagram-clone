import React, { Component } from "react";
import '../Section/Section.scss';
import postari from "../../assets/images/postari.png";
import video from "../../assets/images/video.png";
import etichete from "../../assets/images/etichete.png";
import PostList from "../Posts/PostList";
import posts from "../../utils/posts.json";

export class Section extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    this.setState({ posts: posts });
  }
  render() {
    return (
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
          <div className="button-etichete">
            <img src={etichete} alt="Etichete" />
            <button type="button">ETICHETE</button>
          </div>
        </div>
        <PostList posts={this.state.posts} />
      </div>
    );
  }
}

export default Section;
