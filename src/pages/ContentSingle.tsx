import React from "react";
import { useParams } from "react-router-dom";

import Project from "../components/presentational/Project";
import { content } from "../constants/projects";

export default function ContentSingle() {
  const { slug } = useParams();
  console.log({ slug });
  const indexString = slug ? slug : "0";
  const arrayIndex = parseInt(indexString);
  console.log({ arrayIndex });
  const contentSingle = content[arrayIndex];
  console.log(contentSingle);
  return (
    <Project
      name={contentSingle.name}
      tagline={contentSingle.tagline}
      website={contentSingle.website}
      twitter={contentSingle.twitter}
      description={contentSingle.description}
      type={contentSingle.type}
    />
  );
}
