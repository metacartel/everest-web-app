import React from "react";
import { useParams } from "react-router-dom";

import Project from "../presentational/Project";
import { getProjectByIndex } from "../../helpers/helpers";

import { ProjectInterface } from "../../types/ProjectInterface";

export default function ProjectWrapper(props: any) {
  const { slug } = useParams();
  console.log({ slug });
  const indexString = slug ? slug : "0";

  const project: ProjectInterface = getProjectByIndex(indexString);
  console.log(project);
  return (
    <Project
      name={project.name}
      category={project.category}
      tagline={project.tagline}
      website={project.website}
      twitter={project.twitter}
      description={project.description}
      type={project.type}
      index={project.index}
    />
  );
}
