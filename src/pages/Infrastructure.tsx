import React from "react";
import { infrastructureTypes, infrastructure } from "../constants/projects";

import { Link } from "rebass";
// TODO: Generalize this component to work for services, infrastructure, and content too, and just pass a type prop in

export default function Infrastructure({ match }: any) {
  return (
    <div>
      <h2>Infrastructure</h2>
      {infrastructure.map(({ name }, index) => {
        return (
          <p key={index}>
            <Link variant="link" href={`/infrastructure/${index}`}>
              {name}
            </Link>
          </p>
        );
      })}
      <h3>Filters</h3>
      {/* TODO: Maybe DRY this up with the mapping from the home page */}
      {infrastructureTypes.map((name, index) => {
        const filter = name.toLowerCase().replace(/\s/g, "-");
        return (
          <p key={name}>
            <Link variant="link" href={`/infrastructure?type=${filter}`}>
              {name}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
