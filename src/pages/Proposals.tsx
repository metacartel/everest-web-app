import React from "react";
import StyledLink from "../components/presentational/StyledLink";
import { proposals } from "../constants/projects";

export default function Proposals({ match }: any) {
  return (
    <div>
      <h1>Proposals</h1>
      {proposals.map(({ name }, index) => {
        return (
          <p key={index}>
            <StyledLink to={`/proposals/${index}`} label={name} />
          </p>
        );
      })}
    </div>
  );
}
