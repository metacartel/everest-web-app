import React from "react";

import ProjectsWrapper from "../components/stateful/ProjectsWrapper";

export default function Services({ match }: any) {
  const category = "services";
  return <ProjectsWrapper category={category} />;
}
