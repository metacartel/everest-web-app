import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./App.css";

import About from "./components/About";
import Home from "./components/Home";
import CreateListing from "./components/CreateListing";
import Proposal from "./components/Proposal";
import Proposals from "./components/Proposals";

function AppRouter() {
  return (
    <Router>
      <div className="App">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-listing/">Create a listing</Link>
            </li>
            <li>
              <Link to="/proposals">View proposals</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
          </ul>
        </nav>
        <header className="App-header">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/create-listing/" component={CreateListing} />
            <Route path="/proposals/:slug" component={Proposal} />
            <Route path="/proposals/" component={Proposals} />
            <Route path="/about/" component={About} />
          </Switch>
        </header>
      </div>
    </Router>
  );
}

export default AppRouter;
