import React from "react";
import ENSFetch from "./ENSFetch";
export default function ENS() {
  return (
    <div>
      <h2>ENS names from The Graph</h2>
      <ENSFetch />
    </div>
  );
}
