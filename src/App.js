import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import FrontPage from "./components/FrontPage/FrontPage";

import UserProfile from "./components/UserProfile/UserProfile";
import MessageContainer from "./components/Messages/MessageContainer";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/messages">
              <MessageContainer />
            </Route>
            <Route path="/user">
              <UserProfile />
            </Route>
            <Route path="/">
              <FrontPage />
            </Route>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
