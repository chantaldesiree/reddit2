import React from "react";
import Post from "../Post/Post";

import Communities from "../Communities/Communities";
import Trending from "../Trending/Trending";

function FrontPage() {
  return (
    <div className="postContainer">
      <Communities />
      <Post />
      <Trending />
    </div>
  );
}

export default FrontPage;
