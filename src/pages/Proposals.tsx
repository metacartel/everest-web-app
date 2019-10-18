import React from "react";
import { getOpenProposals } from "../helpers/functions";

import InlineStyledLink from "../components/presentational/InlineStyledLink";

export default function Proposals({ match }: any) {
  return (
    <div>
      <h1>Proposals</h1>
      {getOpenProposals().map(({ name, status, tagline, type, index }) => {
        return (
          <p key={index}>
            {status === "voting" ? "voting" : "queued"}
            <InlineStyledLink to={`/proposals/${index}`}>
              {name}
            </InlineStyledLink>
            ({type}) {tagline}
          </p>
        );
      })}
    </div>
  );
}
