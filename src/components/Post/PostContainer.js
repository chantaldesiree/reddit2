import React, { Component } from "react";
import "./Post.css";
import Content from "./PostLorumIpsum";
import Post from "./Post";

class PostContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { isVisiblePost: true };
  }

  updatePostVisibility() {
    this.setState({ isVisiblePost: !this.state.isVisiblePost });
  }

  render() {
    var PostInfo = Content.posts;

    return (
      <>
        {PostInfo.map((post) => (
          <>
            {console.log(post)}
            <Post postInfo={post} />
          </>
        ))}
      </>
    );
  }
}

export default PostContainer;
