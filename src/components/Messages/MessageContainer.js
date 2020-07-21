import React, { Component } from "react";
import "./Message.css";
import MessageInfo from "./MessagesInfo";
import Message from "./Message";

class PostContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var Messages = MessageInfo.messages;

    return (
      <>
        {Messages.map((message) => (
          <>
            <Message message={message} />
          </>
        ))}
      </>
    );
  }
}

export default PostContainer;
