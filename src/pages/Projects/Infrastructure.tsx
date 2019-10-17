import React from "react";

import ProjectsWrapper from "../../components/stateful/ManyProjectsWrapper";

import { Category } from "../../types/Category";

export default function Infrastructure({ location }: any) {
  let params = new URLSearchParams(location.search);
  const projectSubtype: string | null = params.get("projectSubtype");
  const category: Category = Category.infrastructure;

  return projectSubtype ? (
    <ProjectsWrapper category={category} projectSubtype={projectSubtype} />
  ) : (
    <ProjectsWrapper category={category} />
  );
}
