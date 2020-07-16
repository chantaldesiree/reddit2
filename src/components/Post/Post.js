import React from "react";
import "./Post.css";
import Content from "./PostLorumIpsum";

function Post() {
  var PostInfo = Content.posts;

  return (
    <>
      {PostInfo.map((post) => (
        <div className="post" key={post.postID}>
          <div className="postTitle">
            <strong className="highlightColor title">{post.postTitle}</strong>
            <p style={{ "margin-top": "0px" }}>
              by <u>{post.author}</u> - <strong>[{post.timestamp}]</strong>
            </p>
          </div>

          <div className="postText">
            <p>{post.postText}</p>
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
              <a href="#">
                <i className="fas fa-times-circle" title="Hide"></i>
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

// return (
//   <>
//     {PostInfo.map((post) => (
//       <div className="post" key={post.postID}>
//         <div className="timestamp">
//           <strong>[{post.timestamp}]</strong>
//         </div>

//         <div className="postTitle">
//           <strong>{post.postTitle}</strong> by <u>{post.author}</u>
//         </div>

//         <div className="socialMedia">
//           <p className="highlightColor">
//             <a href="#">
//               <strong>{post.socialMedia.comments} </strong>
//               <i className="fas fa-comment-dots" title="Comment"></i>
//             </a>
//           </p>
//           <p className="highlightColor">
//             <a href="#">
//               <strong>{post.socialMedia.likes} </strong>
//               <i className="fas fa-heart" title="Like"></i>
//             </a>
//           </p>
//           <p>
//             <a href="#">
//               <i className="fas fa-share" title="Share"></i>
//             </a>
//           </p>
//           <p>
//             <a href="#">
//               <i className="fas fa-check-circle" title="Save"></i>
//             </a>
//           </p>
//           <p>
//             <a href="#">
//               <i className="fas fa-times-circle" title="Hide"></i>
//             </a>
//           </p>
//         </div>
//         <div className="postText">
//           <p>{post.postText}</p>
//         </div>
//       </div>
//     ))}
//   </>
// );

export default Post;
