import React from "react";
import { proposals } from "../constants/projects";
import StyledLink from "../components/presentational/StyledLink";
export default function Proposals({ match }: any) {
  return (
    <div>
      <h1>Proposals</h1>
      {proposals.map(({ name }, index) => {
        return (
          <p key={index}>
            <StyledLink to={`/proposals/${index}`}>{name}</StyledLink>
          </p>
        );
      })}
    </div>
  );
}
