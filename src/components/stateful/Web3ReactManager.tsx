import React from "react";

// Note: The purpose of this component is to wrap the whole app with
// web3 capabilities wherever they may be needed

// Make sure the UI handles these important MetaMask-related
// errors:
// - UNSUPPORTED_NETWORK: Thrown if a supportedNetworks array is provided, and the user is not on one of those networks.
// - ETHEREUM_ACCESS_DENIED: Thrown when a user denies permission for your dApp to access their account.
// - LEGACY_PROVIDER: Thrown when no global ethereum object is available, only the deprecated web3 object.
// - NO_WEB3: Thrown when visiting from a non-web3 browser.
// - UNLOCK_REQUIRED: Thrown when a user's account is locked.

import { Connectors } from "web3-react";
import { ethers } from "ethers";

// Hooks
import { useState, useEffect } from "react";
import { useWeb3Context } from "web3-react";

import { isMobile } from "react-device-detect";

// Styling
import styled from "@emotion/styled";
// import { useTheme } from "emotion-theming";
// TODO: Don't use theme import directly
import theme from "../../theme";

// Types
import { ErrorWithCode } from "../../types/ErrorWithCode";
import { Ethereum } from "../../types/Ethereum";

// Components
import Spinner from "../presentational/Spinner";
import Circle from "../../images/circle.svg";

// TODO: Extract window typing from this component
declare global {
  interface Window {
    ethereum?: Ethereum;
    web3?: any;
  }
}

const { Connector } = Connectors;

const MessageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20rem;
`;

// TODO: Figure out how to use theme as a prop
// with emotion given that the theme file
// is rebass-style
const Message = styled.h2`
  color: ${() => theme.colors.gray};
`;

// TODO: Figure out how to use theme as a prop
// with emotion given that the theme file
// is rebass-style
const SpinnerWrapper = styled(Spinner)`
  font-size: 4rem;

  svg {
    path {
      color: ${() => theme.colors.primary};
    }
  }
`;

function tryToSetConnector(setConnector: any, setError: any) {
  const tryToSetConnectorAsync = async () => {
    try {
      console.log("[tryToSetConnector] Trying to set connector to injected");
      await setConnector("Injected", { suppressAndThrowErrors: true });
    } catch (error) {
      console.log(
        "[tryToSetConnector] Setting connector to injected didn't work",
        error
      );
      setError(error);
    }
  };

  tryToSetConnectorAsync();
}

const Web3ReactManager: React.FC<{ children: any }> = ({ children }) => {
  const {
    active,
    error,
    setConnector,
    setError
  }: {
    active: boolean;
    error?: ErrorWithCode | null;
    setConnector: any;
    setError: any;
  } = useWeb3Context();
  // control whether or not we render the error, after parsing
  const shouldPreventRender =
    error &&
    error.code &&
    error.code === Connector.errorCodes.UNSUPPORTED_NETWORK;

  async function connectToMetaMask() {
    // Note: This function is written using a returning early style
    // rather than a deeply nested if/else style
    // Won't execute code below once any conditional is true
    // These early returns are NOT
    // the `useEffect` return that serves as a cleanup function

    // If MetaMask is already active or there was already an error
    // trying to activate MetaMask
    if (active || error) {
      // This function is a no-op in this case
      return;
    }

    // If there's no injected provider present in the user's browser
    if (!window.ethereum && !window.web3) {
      // setError of no web3 directly here or let that error bubble up
      // naturally by calling tryToSetConnector
      console.log("No web3 injection detected");
      // TODO: Set this error properly
      setError(new Error("No web3 injected"));

      return;
    }

    // The idea here is that on mobile, there definitely won't be MetaMask
    // injected, even if there is an injected web3 provider
    if (isMobile) {
      // setError directly here rather than even doing tryToSetConnector
      // If we want to support mobile web3-browser-wallet-apps in the future
      // we can do tryToSetConnector here instead

      console.log("On mobile, so no web3 connection will be established");
      // TODO: Subclass Error or set an error code explicitly here
      setError(new Error("Mobile env"));

      return;
    }

    console.log("About to instantiate ethers.js provider in Web3ReactManager");
    console.log("window.ethereum", window.ethereum);

    if (!window.ethereum) {
      // Handle legacy case where it's called web3 rather than ethereum
      console.log("window.web3", window.web3);
    }

    // TODO: Wrap this use of ethers in a try/catch
    // while handling the variable declaration of library and typing properly
    const library = new ethers.providers.Web3Provider(
      window.ethereum || window.web3
    );

    // console.log({ library });

    console.log("Just instantiated ethers.js provider in Web3ReactManager");
    const accounts = await library.listAccounts();

    console.log("Number of accounts", accounts.length);

    if (accounts.length >= 1) {
      console.log("At least one account, so trying to connect");
      tryToSetConnector(setConnector, setError);
      return;
    }

    // Handle final case:
    // ethereum or web3 already defined on window (web3 injected)
    // Not mobile.
    // But length of accounts was zero which is strange for MetaMask.

    console.log("Hmm, there wasn't a single account. Weird.");

    // TODO: Subclass Error or set an error code explicitly here
    // TODO: Only set error for no accounts if the user
    // has enabled MetaMask
    // setError(new Error("No accounts"));
  }

  useEffect(() => {
    // There's no returned function used
    // for cleaning up this effect
    // so the entire contents of this function
    // can be the async function below
    // TODO: Cancel web3 connection effect on rerender
    // except for certain prop changes that don't warrant cancelation
    connectToMetaMask();
  });

  // parse the error
  useEffect(() => {
    const unsetForWrongNetwork = async () => {
      if (error) {
        console.log("unsetForWrongNetwork", error);
        // if the user changes to the wrong network, unset the connector

        const { errorCodes } = Connector;
        const { UNSUPPORTED_NETWORK } = errorCodes;
        if (error.code !== UNSUPPORTED_NETWORK) {
          console.log("Other error code");
          return; // returning early
        }
        setError(new Error("Unsupported network"));
      }
    };
    // There's no returned function used
    // for cleaning up this effect
    // so the entire contents of this function
    // can be the async function below
    // TODO: Cancel web3 connection effect on rerender
    // except for certain prop changes that don't warrant cancelation
    unsetForWrongNetwork();
  });

  const [showLoader, setShowLoader] = useState(false);

  // TODO: Do something less hacky than showing a loader for a fixed
  // amount of time
  useEffect(() => {
    const timeout = setTimeout(() => {
      setShowLoader(true);
    }, 600);
    return () => {
      clearTimeout(timeout);
    };
  }, []);

  if (shouldPreventRender) {
    return null;
  } else if (error) {
    return (
      <MessageWrapper>
        <Message>{"Unknown error"}</Message>
      </MessageWrapper>
    );
    // TODO: Decide whether it made sense
    // to disable this active check
    // } else if (!active) {
    //   return showLoader ? (
    //     <MessageWrapper>
    //       <SpinnerWrapper src={Circle} />
    //     </MessageWrapper>
    //   ) : null;
  } else {
    return children;
  }
};

export default Web3ReactManager;
