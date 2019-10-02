import React from "react";
import StyledLink from "../components/presentational/StyledLink";
import { serviceTypes } from "../constants/projects";

// TODO: Generalize this component to work for services, infrastructure, and content too, and just pass a type prop in

export default function Services({ match }: any) {
  return (
    <div>
      <h2>Services</h2>

      {/* TODO: Maybe DRY this up with the mapping from the home page */}
      {serviceTypes.map((name, index) => {
        const filter = name.toLowerCase();
        return (
          <p key={name}>
            <StyledLink to={`/services?type=${filter}`} label={name} />
          </p>
        );
      })}
    </div>
  );
}
