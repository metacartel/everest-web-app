import React from "react";
import { useParams } from "react-router-dom";

import Project from "../components/presentational/Project";

import { getProjectByIndex } from "../helpers/functions";

export default function Proposal() {
  const { slug } = useParams();
  console.log({ slug });
  const indexString = slug ? slug : "0";

  const proposal = getProjectByIndex(indexString);
  console.log(proposal);
  return (
    <Project
      name={proposal.name}
      category={proposal.category}
      tagline={proposal.tagline}
      website={proposal.website}
      twitter={proposal.twitter}
      description={proposal.description}
      type={proposal.type}
      index={proposal.index}
    />
  );
}
