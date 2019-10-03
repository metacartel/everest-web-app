import React from "react";

import ProjectsWrapper from "../components/stateful/ProjectsWrapper";

export default function Infrastructure({ match }: any) {
  const category = "infrastructure";
  return <ProjectsWrapper category={category} />;
}
