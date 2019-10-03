import React from "react";
import { useParams } from "react-router-dom";

import Project from "../presentational/Project";
import { projects } from "../../constants/projects";

import { Category } from "../../types/Category";

export default function ProjectWrapper(props: any) {
  const { slug } = useParams();
  console.log({ slug });
  const indexString = slug ? slug : "0";
  const arrayIndex = parseInt(indexString);
  console.log({ arrayIndex });
  const category: Category = props.category;
  const project: any = projects[category][arrayIndex];
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
    />
  );
}
