import React from 'react';
import './Navbar.css';

function Navbar() {
    return (
      <div className="navStyle">
        <ul>
            <li className="logo"><strong>boondoggle</strong></li>
            <li className="userInterface"><i class="fa fa-pencil-square fa-fw" aria-hidden="true"></i>
 Create a Post</li>
            <li className="userInterface"><i class="fa fa-envelope fa-fw" aria-hidden="true"></i>
 Messages</li>
            <li className="userInterface"><i class="fa fa-user fa-fw" aria-hidden="true"></i>
 chantaldesiree</li>
        </ul>
      </div>
    );
  }

  export default Navbar;