import React from "react";
import UserInfo from "../UserProfile/UserInfo";

class PostContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: this.props.content,
      isVisibleContent: this.props.content.isVisibleContent,
    };
  }

  updateContentVisibility(post) {
    this.setState({ isVisibleContent: !this.state.isVisibleContent });
  }

  render() {
    var post = this.state.post;
    var user = UserInfo.users[0];
    return (
      <>
        <div className="postTitle">
          <a
            href="#"
            onClick={() => {
              this.updateContentVisibility(post);
            }}
          >
            <strong>{post.postTitle}</strong>
          </a>{" "}
          by{" "}
          <span style={{ color: "#" + user.userHEXcode }}>
            <u>{post.author}</u>
          </span>
        </div>

        {this.state.isVisibleContent ? (
          <div className="postText">
            <p>{post.postText}</p>
          </div>
        ) : null}
      </>
    );
  }
}

export default PostContent;
