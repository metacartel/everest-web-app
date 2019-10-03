import React from "react";
import { useParams } from "react-router-dom";

import Project from "../components/presentational/Project";
import { services } from "../constants/projects";

export default function Service() {
  const { slug } = useParams();
  console.log({ slug });
  const indexString = slug ? slug : "0";
  const arrayIndex = parseInt(indexString);
  console.log({ arrayIndex });
  const service = services[arrayIndex];
  console.log(service);
  return (
    <Project
      name={service.name}
      tagline={service.tagline}
      website={service.website}
      twitter={service.twitter}
      description={service.description}
      type={service.type}
    />
  );
}
