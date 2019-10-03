import React from "react";
import { useParams } from "react-router-dom";

import Project from "../components/presentational/Project";
import { proposals } from "../constants/projects";

export default function Proposal() {
  const { slug } = useParams();
  console.log({ slug });
  const indexString = slug ? slug : "0";
  const arrayIndex = parseInt(indexString);
  console.log({ arrayIndex });
  const proposal = proposals[arrayIndex];
  console.log(proposal);
  return (
    <Project
      name={proposal.name}
      tagline={proposal.tagline}
      website={proposal.website}
      twitter={proposal.twitter}
      description={proposal.description}
      type={proposal.type}
    />
  );
}
