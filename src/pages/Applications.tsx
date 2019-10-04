import React from "react";

import ProjectsWrapper from "../components/stateful/ProjectsWrapper";

import { Category } from "../types/Category";

export default function Applications({ location }: any) {
  let params = new URLSearchParams(location.search);
  const projectSubtype: string | null = params.get("projectSubtype");
  const category: Category = Category.applications;

  return projectSubtype ? (
    <ProjectsWrapper category={category} projectSubtype={projectSubtype} />
  ) : (
    <ProjectsWrapper category={category} />
  );
}
