import React from "react";
import { proposals } from "../constants/projects";
import { Link } from "rebass";
export default function Proposals({ match }: any) {
  return (
    <div>
      <h1>Proposals</h1>
      {proposals.map(({ name }, index) => {
        return (
          <p key={index}>
            <Link variant="link" href={`/proposals/${index}`}>
              {name}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
