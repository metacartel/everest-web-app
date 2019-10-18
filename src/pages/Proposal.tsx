import React from "react";
import { useParams } from "react-router-dom";

import { Box, Flex } from "rebass";

import Project from "../components/presentational/Project";
import VotingBox from "../components/presentational/VotingBox";

import { getProjectByIndex } from "../helpers/functions";

export default function Proposal() {
  const { slug } = useParams();
  console.log({ slug });
  const indexString = slug ? slug : "0";

  const proposal = getProjectByIndex(indexString);
  console.log(proposal);
  return (
    <Flex flexWrap="wrap" px={2} alignItems="stretch">
      {/* TODO: Handle look when text wraps to two lines
              or prevent that from happening */}
      <Box width={[1]}>
        <Project
          name={proposal.name}
          category={proposal.category}
          tagline={proposal.tagline}
          website={proposal.website}
          twitter={proposal.twitter}
          description={proposal.description}
          type={proposal.type}
          status={proposal.status}
          index={proposal.index}
        />
      </Box>
      <Box width={[1]} bg="muted">
        <VotingBox
          expirationDatetime={1000000024}
          tokensCommitted={24}
          tokensToVoteWith={20}
          status={proposal.status}
        />
      </Box>
    </Flex>
  );
}
