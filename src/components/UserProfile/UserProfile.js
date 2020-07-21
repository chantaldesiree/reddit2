import React from "react";
import UserInfo from "./UserInfo";
import "./UserProfile.css";

class UserProfile extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var user = UserInfo.users[0];

    return (
      <div className="userProfile">
        <h1 className="username" style={{ color: "#" + user.userHEXcode }}>
          {user.username}
        </h1>
        <p>
          Name:{" "}
          <span style={{ color: "#" + user.userHEXcode }}>
            {user.firstName + " " + user.lastName}
          </span>
        </p>
        <p>
          Date of Birth:{" "}
          <span style={{ color: "#" + user.userHEXcode }}>{user.DOB}</span>
        </p>
        <hr />
        <p>
          Anniversary Date:{" "}
          <span style={{ color: "#" + user.userHEXcode }}>
            {user.signUpDate}
          </span>
        </p>
      </div>
    );
  }
}

export default UserProfile;
