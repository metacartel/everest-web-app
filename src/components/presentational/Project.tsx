// TODO: Decide whether to fetch data for this project at a higher level and pass into this component, or whehter to fetch it here
// For now assuming it will be a prop already here

import React from "react";
import { ProjectInterface } from "../../types/ProjectInterface";

const Project: React.FC<ProjectInterface> = props => {
  // TODO: Use type or tagline?
  const { twitter, website, name, description } = props;
  const twitterUrl = `https://twitter.com/${twitter}`;
  const twitterHandleDisplay = `@${twitter}`;
  return (
    <div>
      <h2>{name === "Everest" ? "About" : name}</h2>
      <p>
        <b>Description:</b> {description}
      </p>
      <p>
        <b>Website:</b>{" "}
        {name === "Everest" ? (
          "You're on it dummy"
        ) : (
          <a
            className="App-link"
            href={website}
            target="_blank"
            rel="noopener noreferrer"
          >
            {website}
          </a>
        )}
      </p>
      <p>
        <b>Twitter:</b>{" "}
        <a
          className="App-link"
          href={twitterUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          {twitterHandleDisplay}
        </a>
      </p>
    </div>
  );
};

export default Project;
