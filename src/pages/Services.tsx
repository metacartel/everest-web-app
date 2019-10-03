import React from "react";
import StyledLink from "../components/presentational/StyledLink";
import { serviceTypes, services } from "../constants/projects";

// TODO: Generalize this component to work for services, infrastructure, and content too, and just pass a type prop in

export default function Services({ match }: any) {
  return (
    <div>
      <h2>Services</h2>
      {services.map(({ name }, index) => {
        return (
          <p key={index}>
            <StyledLink to={`/services/${index}`} label={name} />
          </p>
        );
      })}
      <h3>Filters</h3>
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
