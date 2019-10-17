import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import About from "./pages/About";
import Home from "./pages/Home";
import CreateListing from "./pages/CreateListing";

import Proposal from "./pages/Proposal";
import Proposals from "./pages/Proposals";

import Application from "./pages/Project/Application";
import Service from "./pages/Project/Service";
import InfrastructureSingle from "./pages/Project/InfrastructureSingle";
import ContentSingle from "./pages/Project/ContentSingle";

import Applications from "./pages/Projects/Applications";
import Services from "./pages/Projects/Services";
import Infrastructure from "./pages/Projects/Infrastructure";
import Content from "./pages/Projects/Content";

import ENS from "./pages/ENS";

import StyledLink from "./components/presentational/StyledLink";

import { ApolloProvider } from "@apollo/react-hooks";
import ApolloClient from "apollo-boost";

import { ThemeProvider } from "emotion-theming";
import theme from "./theme";

import { Box, Flex } from "rebass";

const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/ensdomains/ens"
});

function AppRouter() {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <Router>
          <div>
            {/* TODO: Extract nav bar into component */}
            <Flex
              flexWrap="wrap"
              px={2}
              color="white"
              bg="black"
              alignItems="center"
            >
              {/* TODO: Handle look when text wraps to two lines
              or prevent that from happening */}
              <Box width={[1, 1 / 5, 1 / 6]}>
                <StyledLink to="/">Everest</StyledLink>
              </Box>
              <Box mx="auto" />
              <Box width={[1, 1 / 5, 1 / 6]}>
                <StyledLink to="/create-listing">Create a listing</StyledLink>
              </Box>
              <Box width={[1, 1 / 5, 1 / 6]}>
                <StyledLink to="/proposals">View proposals</StyledLink>
              </Box>
              <Box width={[1, 1 / 5, 1 / 6]}>
                <StyledLink to="/about">About</StyledLink>
              </Box>
              <Box width={[1, 1 / 5, 1 / 6]}>
                <StyledLink to="/ens">ENS names</StyledLink>
              </Box>
            </Flex>
            <header>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/create-listing/" component={CreateListing} />
                {/* Note: Proposal must be before proposals */}
                <Route path="/proposals/:slug" component={Proposal} />
                <Route path="/proposals/" component={Proposals} />
                {/* Note: Application must be before applications */}
                <Route path="/applications/:slug" component={Application} />
                <Route path="/applications/" component={Applications} />
                <Route path="/services/:slug" component={Service} />
                <Route path="/services/" component={Services} />
                <Route
                  path="/infrastructure/:slug"
                  component={InfrastructureSingle}
                />
                <Route path="/infrastructure/" component={Infrastructure} />
                <Route path="/content/:slug" component={ContentSingle} />
                <Route path="/content/" component={Content} />
                <Route path="/about/" component={About} />
                <Route path="/ens/" component={ENS} />
              </Switch>
            </header>
          </div>
        </Router>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default AppRouter;
