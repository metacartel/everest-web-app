import React from "react";

import TheGraphFetch from "../components/stateful/TheGraphFetch";

export default function Proposals({ match }: any) {
  return (
    <div>
      <h1>Proposals</h1>
      <TheGraphFetch />
    </div>
  );
}
