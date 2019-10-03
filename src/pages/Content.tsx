import React from "react";
import { contentTypes, content } from "../constants/projects";
import { Link } from "rebass";
// TODO: Generalize this component to work for services, infrastructure, and content too, and just pass a type prop in

export default function Content({ match }: any) {
  return (
    <div>
      <h2>Content</h2>
      {content.map(({ name }, index) => {
        return (
          <p key={index}>
            <Link variant="link" href={`/content/${index}`}>
              {name}
            </Link>
          </p>
        );
      })}
      <h3>Filters</h3>
      {/* TODO: Maybe DRY this up with the mapping from the home page */}
      {contentTypes.map((name, index) => {
        const filter = name.toLowerCase().replace(/\s/g, "-");
        return (
          <p key={name}>
            <Link variant="link" href={`/content?type=${filter}`}>
              {name}
            </Link>
          </p>
        );
      })}
    </div>
  );
}
