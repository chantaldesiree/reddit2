import React, { Component } from "react";
import "./Post.css";
import PostContent from "./PostContent";

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = { postInfo: this.props.postInfo, isVisiblePost: true };
  }

  updatePostVisibility() {
    this.setState({ isVisiblePost: !this.state.isVisiblePost });
  }

  render() {
    var post = this.state.postInfo;

    return (
      <>
        {this.state.isVisiblePost ? (
          <div className="post" key={post.postID}>
            <div>
              <PostContent content={post} />
            </div>

            <div className="socialMedia">
              <div>
                <a href="#">
                  <strong className="highlightColor">
                    {post.socialMedia.comments}{" "}
                  </strong>
                  <i className="fas fa-comment-dots" title="Comment"></i>
                </a>
              </div>
              <div>
                <a href="#">
                  <strong className="highlightColor">
                    {post.socialMedia.likes}{" "}
                  </strong>
                  <i className="fas fa-heart" title="Like"></i>
                </a>
              </div>
              <div>
                <a href="#">
                  <i className="fas fa-share" title="Share"></i>
                </a>
              </div>

              <div>
                <a href="#">
                  <i className="fa fa-floppy-o" title="Save"></i>
                </a>
              </div>

              <div>
                <a
                  href="#"
                  onClick={() => {
                    this.updatePostVisibility();
                  }}
                >
                  <i className="fas fa-times-circle" title="Hide"></i>
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Post;
