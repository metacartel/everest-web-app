import React from "react";
import StyledLink from "../components/presentational/StyledLink";
import { applications } from "../constants/projects";

// TODO: Generalize this component to work for services, infrastructure, and content too, and just pass a type prop in

export default function Applications({ match }: any) {
  return (
    <div>
      <h2>Applications</h2>

      {/* TODO: Maybe DRY this up with the mapping from the home page */}
      {applications.map((name, index) => {
        const filter = name.toLowerCase();
        return (
          <p key={name}>
            <StyledLink to={`/applications?type=${filter}`} label={name} />
          </p>
        );
      })}
    </div>
  );
}
