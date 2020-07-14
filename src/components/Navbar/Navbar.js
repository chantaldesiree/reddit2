import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <div className="navStyle">
      <ul>
        <li className="logo">
          <strong>boondoggle</strong>
        </li>
        <li className="userInterface">
          <a href="#">
            <i className="fa fa-pencil-square fa-fw" aria-hidden="true"></i>
            Create a Post
          </a>
        </li>
        <li className="userInterface">
          <a href="#">
            <i className="fa fa-envelope fa-fw" aria-hidden="true"></i>
            Messages
          </a>
        </li>

        <li className="userInterface">
          <a href="#">
            <i className="fa fa-user fa-fw" aria-hidden="true"></i>
            chantaldesiree
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
