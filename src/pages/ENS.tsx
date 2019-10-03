import React from "react";
import ENSFetch from "../components/stateful/ENSFetch";
export default function ENS() {
  return (
    <div>
      <h2>ENS names</h2>
      <ENSFetch />
    </div>
  );
}
