import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import About from "./pages/About";
import Home from "./pages/Home";
import CreateListing from "./pages/CreateListing";
import Proposal from "./pages/Proposal";
import Proposals from "./pages/Proposals";
import ENS from "./pages/ENS";

import StyledLink from "./components/presentational/StyledLink";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/ensdomains/ens"
});

function AppRouter() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="App">
          <nav>
            <p>
              <StyledLink to="/" label={"Home"} />
            </p>
            <p>
              <StyledLink to="/create-listing/" label={"Create a listing"} />
            </p>
            <p>
              <StyledLink to="/proposals" label={"View proposals"} />
            </p>
            <p>
              <StyledLink to="/about/" label={"About"} />
            </p>
            <p>
              <StyledLink to="/ens/" label={"ENS data from The Graph"} />
            </p>
          </nav>
          <header className="App-header">
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/create-listing/" component={CreateListing} />
              <Route path="/proposals/:slug" component={Proposal} />
              <Route path="/proposals/" component={Proposals} />
              <Route path="/about/" component={About} />
              <Route path="/ens/" component={ENS} />
            </Switch>
          </header>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default AppRouter;
