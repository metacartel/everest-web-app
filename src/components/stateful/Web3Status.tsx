import React from "react";

// Note: The purpose of this component is to serve as the clickable
// display of the current web3 status (MetaMask installed and connected
// to this dapp, etc.)

import { Connectors } from "web3-react";

// Hooks
// If we were using the jazzicon, we would need useRef here
// import { useReducer, useEffect, useRef } from "react";
import { useReducer, useEffect } from "react";
import { useWeb3Context } from "web3-react";
import { useENSName } from "../../hooks/hooks";
// import { useAllTransactions } from "../../contexts/Transactions";

// Styling
import styled from "@emotion/styled";

// Types
import { Ethereum } from "../../types/Ethereum";
import { ErrorWithCode } from "../../types/ErrorWithCode";
// TODO: Consider giving this declaration file used for Jazzicon a better name
// import "../../declaration";

// TODO: Upgrade to ethers v5
import { ethers } from "ethers";

// Components
// import Jazzicon from "jazzicon";
import Activity from "../presentational/Activity";
import Web3StatusGeneric from "../presentational/Web3StatusGeneric";

// Helpers
import { shortenAddress } from "../../helpers/helpers";

const { Connector } = Connectors;

// TODO: Add styled versions of the generic web3 status component

// TODO: Make sure this is working with the emotion `styled` API
const Text = styled.p`
  flex: 1 1 auto;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 0.5rem 0 0.25rem;
  font-size: 0.83rem;
`;

const NetworkIcon = styled(Activity)`
  margin-left: 0.25rem;
  margin-right: 0.5rem;
  width: 16px;
  height: 16px;
`;

const web3InitialState = {
  error: undefined
};

const WEB3_ERROR = "WEB3_ERROR";

function web3Reducer(
  state: any,
  { type, payload }: { type: any; payload: any }
) {
  switch (type) {
    case WEB3_ERROR: {
      const { error } = payload;
      return { ...state, error };
    }
    default: {
      throw Error(`Unexpected action type in web3Reducer reducer: '${type}'.`);
    }
  }
}

export default function Web3Status() {
  // TODO: Consider having setError from web3 context settable from here too
  const { active, account, connectorName, setConnector } = useWeb3Context();

  const ENSName = useENSName(account);

  const [{ error: web3Error }, dispatch] = useReducer(
    web3Reducer,
    web3InitialState
  );
  function setError(error?: any) {
    dispatch({ type: WEB3_ERROR, payload: { error } });
  }

  // TODO: Decide if this effect belongs in this component or over
  // in Web3ReactManager component where the other effects
  // related to web3 connection status are
  useEffect(() => {
    // janky logic to detect log{ins,outs}...

    const { ethereum }: { ethereum?: Ethereum | undefined } = window;

    // Note: For connectorName, the global variable used below:
    // - when it's `Injected`, think MetaMask as an example

    if (connectorName === "Injected") {
      // - when it's `Injected`, think MetaMask as an example
      // In this case, we're mostly worried about logouts

      // ...poll to check the accounts array, and if it's ever 0
      // i.e. the user logged out, update the connector

      if (!ethereum) {
        console.log("ethereum not defined on window");
        setError(new Error("Ethereum not defined on window"));
        // Note: Can't return early in this case because
        // we're in the scope of the useEffect, where return has special
        // meaning
      } else {
        const accountPoll = setInterval(() => {
          console.log(
            "Polling number of MetaMask accounts to see if it changed"
          );
          // console.log("ethereum", ethereum);
          const library = new ethers.providers.Web3Provider(ethereum);

          const listAccountsAndHandleWhenZero = async () => {
            const accounts = await library.listAccounts();
            if (accounts.length === 0) {
              console.log("No accounts found");
              // Note: Errors will not be thrown here
              // since we're using the default web3-react error-handling
              // behavior
              // Set error for the context here
              setError(new Error("No accounts found"));
            }
          };

          listAccountsAndHandleWhenZero();
        }, 750);

        return () => {
          clearInterval(accountPoll);
        };
      }
    } else {
      // if the injected connector is not yet active...

      // Although the return-early style rather than having deeply nested
      // if's/else's is nice, given that this `useEffect`
      // uses conditional return of different cleanup functions depending
      // on web3/connector state, it's too dangerous to use that style here
      // and expect future developers not to break it

      if (!ethereum || !ethereum.on || !ethereum.removeListener) {
        // Noting explicitly that for now we don't have a useEffect
        // cleanup function for this case because, well, this case
        // was a no-op already
        console.log(
          "ethereum not defined on window or the API isn't as expected"
        );
      } else {
        // This tryToActivateMetaMask function is defined so we can use
        // await syntax inside of it while still returning a cleanup function
        // for `useEffect` properly

        const tryToActivateMetaMask = async () => {
          console.log(
            "[Web3Status: tryToActivateMetaMask] About to instantiate ethers.js provider"
          );
          // console.log("ethereum", ethereum);

          const library = new ethers.providers.Web3Provider(ethereum);

          console.log("Successfully instantiated it as described above");

          // if calling enable won't pop an approve modal, then try to activate
          // injected...
          const accounts = await library.listAccounts();
          if (accounts.length < 1) {
            console.log("No accounts found");
            // returning early since we're in this async function
            // tryToActivateMetaMask where useEffect won't get confused
            // that we're returning a cleanup function
            return;
          }

          try {
            // Here's the real meat of this component where the connection
            // is established
            await setConnector("Injected", { suppressAndThrowErrors: true });
          } catch (error) {
            const { errorCodes } = Connector;
            const { UNSUPPORTED_NETWORK } = errorCodes;

            if (error.code !== UNSUPPORTED_NETWORK) {
              console.log("Error other than unsupported network");
              // Eating the error in this case rather than setting it to the
              // web3-react context
            } else {
              // We want to display the error in the case where it's an
              // unsupported network
              setError(error);
            }
          }
        };

        ethereum.on("networkChanged", tryToActivateMetaMask);
        ethereum.on("accountsChanged", tryToActivateMetaMask);

        // cleanup function for `useEffect`
        return () => {
          if (ethereum.removeListener) {
            ethereum.removeListener("networkChanged", tryToActivateMetaMask);
            ethereum.removeListener("accountsChanged", tryToActivateMetaMask);
          }
        };
      }
    }
  }, [connectorName, setConnector]);

  function onClick() {
    // TODO: Refactor to handle error states early and potentially to return
    // early from if's rather than having a bunch of else-ifs
    if (web3Error) {
      // If there's already an error state persisted locally, let the
      // user know about that
      // TODO: Handle this better by displaying the error to the user
      // in an actionable way
      // The error was already set on the reducer for this component
      // if we're in this code path, so no setError required here

      console.log({ web3Error });
    } else if (
      connectorName !== "Injected" &&
      (window.ethereum || window.web3)
    ) {
      // Note that when connectorName is defined that connector is active
      // as far as I understand it

      // active: A flag indicating whether web3-react currently has an connector set
      // connectorName: The name of the currently active connector

      // So connectorName not being injected does not mean that that
      // isn't the connector we intend to use - we do intend to use an injected
      // connector
      // Here it just means it isn't active yet.

      // Note: This is the happy case when MetaMask is not yet enabled, but
      // there is an injected web3 present on the window and
      // the user wants to enable MetaMask.
      const setConnectorAsync = async () => {
        try {
          await setConnector("Injected", { suppressAndThrowErrors: true });
        } catch (error) {
          if (error.code === Connector.errorCodes.UNSUPPORTED_NETWORK) {
            setError(error);
          } else {
            console.log("Error wasn't unsupported network");
          }
        }
      };
      setConnectorAsync();
    } else {
      // No previously known error state
      // Browser has MetaMask enabled already
      // OR
      // User doesn't have MetaMask installed yet (far more likely case, given
      // that would mean a normal user state and not developer error)
      console.log("Hit final else case for a click");
      console.log("MetaMask is injected and it's active, or (see below)");
      console.log("OR!");
      console.log("OR there's no injected provider in the first place");
      // TODO: Handle this case better
      // If user doesn't have MetaMask, prompt them to add it
      // Although this may already be happening?
      // TODO: Test this on a browser without MetaMask
    }
  }

  // const ref = useRef();
  // useEffect(() => {
  //   if (ref.current) {
  //     // @ts-ignore: Object is possibly 'undefined'
  //     ref.current.innerHTML = "";
  //     if (account) {
  //       // @ts-ignore: Object is possibly 'undefined'
  //       ref.current.appendChild(
  //         Jazzicon(16, parseInt(account.slice(2, 10), 16))
  //       );
  //     }
  //   }
  // }, [account, web3Error]);

  function getWeb3Status() {
    // For error, connect needed, and connected states, potentially
    // use custom components that style the Web3StatusGeneric component
    if (web3Error) {
      // this is ok because we're guaranteed that the error is a wrong network error
      return (
        // Error
        <Web3StatusGeneric onClick={onClick}>
          <NetworkIcon />
          <Text>Wrong Network</Text>
        </Web3StatusGeneric>
      );
    } else if (!account) {
      return (
        // Connect needed
        <Web3StatusGeneric onClick={onClick}>
          <Text>{"Connect"}</Text>
        </Web3StatusGeneric>
      );
    } else {
      return (
        // Connected - potentially use different component
        <Web3StatusGeneric onClick={onClick}>
          <Text>{ENSName || shortenAddress(account)}</Text>
          {/* TODO: Add Jazzicon if desired */}
        </Web3StatusGeneric>
      );
    }
  }

  return <div>{getWeb3Status()}</div>;
}
