import React from "react";
import { infrastructureTypes, infrastructure } from "../constants/projects";

import StyledLink from "../components/presentational/StyledLink";
// TODO: Generalize this component to work for services, infrastructure, and content too, and just pass a type prop in

export default function Infrastructure({ match }: any) {
  return (
    <div>
      <h2>Infrastructure</h2>
      {infrastructure.map(({ name }, index) => {
        return (
          <p key={index}>
            <StyledLink to={`/infrastructure/${index}`}>{name}</StyledLink>
          </p>
        );
      })}
      <h3>Filters</h3>
      {/* TODO: Maybe DRY this up with the mapping from the home page */}
      {infrastructureTypes.map((name, index) => {
        const filter = name.toLowerCase().replace(/\s/g, "-");
        return (
          <p key={name}>
            <StyledLink to={`/infrastructure?type=${filter}`}>
              {name}
            </StyledLink>
          </p>
        );
      })}
    </div>
  );
}
