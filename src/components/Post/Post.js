import React from "react";
import "./Post.css";
import Content from "./PostLorumIpsum";

function Post() {
  var PostInfo = Content.posts;

  return (
    <>
      {PostInfo.map((post) => (
        <div className="post" key={post.postID}>
          <div className="timestamp">
            <strong>[{post.timestamp}]</strong>
          </div>

          <div className="postTitle">
            <strong>{post.postTitle}</strong> by <u>{post.author}</u>
          </div>

          <div className="socialMedia">
            <p className="highlightColor">
              <a href="#">
                <strong>{post.socialMedia.comments} </strong>
                <i className="fas fa-comment-dots" title="Comment"></i>
              </a>
            </p>
            <p className="highlightColor">
              <a href="#">
                <strong>{post.socialMedia.likes} </strong>
                <i className="fas fa-heart" title="Like"></i>
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fas fa-share" title="Share"></i>
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fas fa-check-circle" title="Save"></i>
              </a>
            </p>
            <p>
              <a href="#">
                <i className="fas fa-times-circle" title="Hide"></i>
              </a>
            </p>
          </div>
          <div className="postText">
            <p>{post.postText}</p>
          </div>
        </div>
      ))}
    </>
  );
}

export default Post;
