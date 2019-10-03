import React from "react";

import ProjectsWrapper from "../components/stateful/ProjectsWrapper";

export default function Content({ match }: any) {
  const category = "content";
  return <ProjectsWrapper category={category} />;
}
