import React from "react";

class PostContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: this.props.message,
    };
  }

  render() {
    var message = this.state.message;
    return (
      <>
        <div className="messageContainer" key={message.messageID}>
          <div>
            Sender:
            {" " + message.senderName + " - " + message.senderID}
            {" || "}
            Receipient:
            {" " + message.receipientName + " - " + message.receipientID}
            {" || "}
            Sent:
            {" " + message.messageDate}
          </div>
          <div>{message.messageContent}</div>
        </div>
      </>
    );
  }
}

export default PostContent;
