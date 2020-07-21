import React from "react";
import PostContainer from "../Post/PostContainer";

import Communities from "../Communities/Communities";
import Trending from "../Trending/Trending";

function FrontPage() {
  return (
    <div className="postContainer">
      <Communities />
      <PostContainer />
      <Trending />
    </div>
  );
}

export default FrontPage;
