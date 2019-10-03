import React from "react";
import StyledLink from "../components/presentational/StyledLink";
import { infrastructureTypes, infrastructure } from "../constants/projects";

// TODO: Generalize this component to work for services, infrastructure, and content too, and just pass a type prop in

export default function Infrastructure({ match }: any) {
  return (
    <div>
      <h2>Infrastructure</h2>
      {infrastructure.map(({ name }, index) => {
        return (
          <p key={index}>
            <StyledLink to={`/infrastructure/${index}`} label={name} />
          </p>
        );
      })}
      <h3>Filters</h3>
      {/* TODO: Maybe DRY this up with the mapping from the home page */}
      {infrastructureTypes.map((name, index) => {
        const filter = name.toLowerCase();
        return (
          <p key={name}>
            <StyledLink to={`/infrastructure?type=${filter}`} label={name} />
          </p>
        );
      })}
    </div>
  );
}
