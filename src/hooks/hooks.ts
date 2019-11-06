import { useState, useEffect } from "react";
import { useWeb3Context } from "web3-react";

import { isAddress } from "../helpers/helpers";

export function useENSName(address: string | null | undefined) {
  const { library } = useWeb3Context();

  const [ENSName, setENSName] = useState();

  useEffect(() => {
    let stale = false;
    const lookupAddress = async () => {
      if (!isAddress(address)) {
        // Returning from this async function
        // This isn't the `useEffect` return
        return;
      }
      try {
        const name: string = await library.lookupAddress(address);
        if (stale) {
          return;
        }
        if (name) {
          setENSName(name);
          return;
        }

        setENSName(null);
      } catch {
        // This hook was originally based off of a similar
        // hook used in the Uniswap front end
        // Note that by using async/await style, the catch
        // here is catching something that wasn't caught
        // in the Uniswap codebase that used promises
        setENSName(null);
      }
    };
    lookupAddress();

    // Cleanup function that will be called on
    // 1. Unmount
    // 2. Dependency Array Change
    return () => {
      stale = true;
      // @ts-ignore: Expected 1 arguments, but got 0.
      setENSName();
    };
    // Potentially include setENSName below in the array
  }, [library, address]);

  return ENSName;
}
