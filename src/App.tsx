import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import About from "./pages/About";
import Home from "./pages/Home";
import CreateListing from "./pages/CreateListing";
// ---
import Proposal from "./pages/Proposal";
import Application from "./pages/Project/Application";
import Service from "./pages/Project/Service";
import InfrastructureSingle from "./pages/Project/InfrastructureSingle";
import ContentSingle from "./pages/Project/ContentSingle";
// ---
import Proposals from "./pages/Proposals";
import Applications from "./pages/Projects/Applications";
import Services from "./pages/Projects/Services";
import Infrastructure from "./pages/Projects/Infrastructure";
import Content from "./pages/Projects/Content";

// Components
import NavBar from "./components/presentational/NavBar";

// Providers
import { ApolloProvider } from "@apollo/react-hooks";
import { ThemeProvider } from "emotion-theming";
import Web3Provider from "web3-react";

// Connectors
import InjectedConnector from "./web3-connectors/InjectedConnector";

// Other
import ApolloClient from "apollo-boost";
import theme from "./theme";

// Finally using all of the above imports
const client = new ApolloClient({
  uri: "https://api.thegraph.com/subgraphs/name/ensdomains/ens"
});

if (!process.env.REACT_APP_NETWORK_ID) {
  console.log(`Network ID is NOT in .env file`);
} else {
  console.log(`Using network ID from .env file`);
}

if (!process.env.REACT_APP_NETWORK_URL) {
  console.log(`Network URL is NOT in .env file`);
} else {
  console.log(`Using network URL from .env file`);
}

const Injected = new InjectedConnector({
  supportedNetworks: [Number(process.env.REACT_APP_NETWORK_ID || "1")]
});

const connectors = { Injected };

// function ContextProviders({ children }) {
//   // TODO: Add any contexts the app needs here:
//   return { children };
// }

// Note: Unlike some other dapps, explicitly making the choice not to set
// up a web3 connection until the users needs it.
// So it's established in the pages/components themselves
// But since it's available via a React context, the needed info is still
// available anywhere it's needed

function AppRouter() {
  // TODO: Put ContextProviders between Web3Provider and ApolloProvider
  // once we start using it
  return (
    // Note: Wrapping the whole app in Web3Provider even though we don't set
    // it up on the home page so that all pages and components can have access
    // to the context as needed
    // setConnector that activates the web3 connection isn't done here
    <Web3Provider connectors={connectors} libraryName="ethers.js">
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
    </Web3Provider>
  );
}

export default AppRouter;
