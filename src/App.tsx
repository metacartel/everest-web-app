import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import CreateListing from "./pages/CreateListing";

import Proposal from "./pages/Proposal";
import Application from "./pages/Project/Application";
import Service from "./pages/Project/Service";
import InfrastructureSingle from "./pages/Project/InfrastructureSingle";
import ContentSingle from "./pages/Project/ContentSingle";

import Proposals from "./pages/Proposals";
import Applications from "./pages/Projects/Applications";
import Services from "./pages/Projects/Services";
import Infrastructure from "./pages/Projects/Infrastructure";
import Content from "./pages/Projects/Content";

import NavBar from "./components/presentational/NavBar";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { ThemeProvider } from "emotion-theming";
import theme from "./theme";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/ensdomains/ens"
});

function AppRouter() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            <NavBar />
            <header>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create-listing/" component={CreateListing} />
                <Route path="/about/" component={About} />

                <Route path="/proposals/:slug" component={Proposal} />
                <Route path="/applications/:slug" component={Application} />
                <Route path="/services/:slug" component={Service} />
                <Route
                  path="/infrastructure/:slug"
                  component={InfrastructureSingle}
                />
                <Route path="/content/:slug" component={ContentSingle} />
                {/* Note: Proposal ^ must be before proposals */}
                {/* Note: Application ^ must be before applications */}

                <Route path="/proposals/" component={Proposals} />
                <Route path="/applications/" component={Applications} />
                <Route path="/services/" component={Services} />
                <Route path="/infrastructure/" component={Infrastructure} />
                <Route path="/content/" component={Content} />
              </Switch>
            </header>
          </div>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default AppRouter;
