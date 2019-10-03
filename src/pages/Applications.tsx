import React from "react";

import ProjectsWrapper from "../components/stateful/ProjectsWrapper";

export default function Applications({ match }: any) {
  const category = "applications";
  return <ProjectsWrapper category={category} />;
}
