import React from "react";
import { useParams } from "react-router-dom";

import Project from "../presentational/Project";
import { getProjectByIndex } from "../../helpers/functions";

import { Category } from "../../types/Category";
import { ProjectInterface } from "../../types/ProjectInterface";

export default function ProjectWrapper(props: any) {
  const { slug } = useParams();
  console.log({ slug });
  const indexString = slug ? slug : "0";
  const category: Category = props.category;
  // TODO: If we start having an index input
  // that isn't the position of the element
  // in the array, then we'll have to switch to a
  // filter by id option, which will work too

  // TODO: Change from any to a proper type
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
