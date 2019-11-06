import React, { Suspense } from "react";
import FormProject from "../components/stateful/FormProject";

import Web3ReactManager from "../components/stateful/Web3ReactManager";

// TODO: Upgrade ethers.js back to 4.0.39 (and eventually v5)

export default function CreateListing() {
  return (
    <Suspense fallback={null}>
      <Web3ReactManager>
        <FormProject />
      </Web3ReactManager>
    </Suspense>
  );
}
