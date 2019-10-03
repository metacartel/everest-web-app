import React from "react";
import { useParams } from "react-router-dom";

import Project from "../components/presentational/Project";
import { infrastructure } from "../constants/projects";

export default function InfrastructureSingle() {
  const { slug } = useParams();
  console.log({ slug });
  const indexString = slug ? slug : "0";
  const arrayIndex = parseInt(indexString);
  console.log({ arrayIndex });
  const infrastructureSingle = infrastructure[arrayIndex];
  console.log(infrastructureSingle);
  return (
    <Project
      name={infrastructureSingle.name}
      tagline={infrastructureSingle.tagline}
      website={infrastructureSingle.website}
      twitter={infrastructureSingle.twitter}
      description={infrastructureSingle.description}
      type={infrastructureSingle.type}
    />
  );
}
