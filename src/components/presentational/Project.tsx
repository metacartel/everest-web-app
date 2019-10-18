// TODO: Decide whether to fetch data for this project at a higher level and pass into this component, or whehter to fetch it here
// For now assuming it will be a prop already here

import React from "react";
import { ProjectInterface } from "../../types/ProjectInterface";

import { Link } from "rebass";

const Project: React.FC<ProjectInterface> = props => {
  const { twitter, website, name, status, description } = props;
  const twitterUrl = `https://twitter.com/${twitter}`;
  const twitterHandleDisplay = twitter ? `@${twitter}` : "";
  return (
    <div>
      <h2>{name === "Everest" ? "About Everest" : name}</h2>
      {status === "voting" || status === "queued" ? <h4>{status}</h4> : ""}
      <p>
        <b>Description:</b> {description}
      </p>
      <p>
        <b>Website:</b>{" "}
        {name === "Everest" ? (
          "You're on it dummy"
        ) : (
          <Link variant="nav" target="_blank" href={website}>
            {website.replace("https://", "").replace("www.", "")}
          </Link>
        )}
      </p>
      <p>
        <b>Twitter:</b>{" "}
        <Link variant="nav" target="_blank" href={twitterUrl}>
          {twitterHandleDisplay}
        </Link>
      </p>
    </div>
  );
};

export default Project;
