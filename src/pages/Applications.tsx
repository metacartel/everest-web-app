import React from "react";
import StyledLink from "../components/presentational/StyledLink";
import { applicationTypes, applications } from "../constants/projects";

// TODO: Generalize this component to work for services, infrastructure, and content too, and just pass a type prop in

export default function Applications({ match }: any) {
  return (
    <div>
      <h1>Filters</h1>

      {/* TODO: Maybe DRY this up with the mapping from the home page */}
      {applicationTypes.map((name, index) => {
        const filter = name.toLowerCase();
        return (
          <p key={name}>
            <StyledLink to={`/applications?type=${filter}`} label={name} />
          </p>
        );
      })}

      <h1>Applications</h1>
      {applications.map(({ name }, index) => {
        return (
          <p key={index}>
            <StyledLink to={`/applications/${index}`} label={name} />
          </p>
        );
      })}
    </div>
  );
}
