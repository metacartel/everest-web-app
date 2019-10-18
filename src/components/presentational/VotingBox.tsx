import React from "react";

import { Box, Flex } from "rebass";

import Emoji from "../presentational/Emoji";

const DIM_OPACITY = 0.3;
const FULL_OPACITY = 1.0;

const VotingBox: React.FC<{
  expirationDatetime: number;
  tokensCommitted: number;
  tokensToVoteWith: number;
  status: string;
}> = props => {
  const {
    expirationDatetime,
    tokensCommitted,
    // handleYes,
    // handleNo,
    // onTokenChange,
    tokensToVoteWith,
    status
  } = props;
  return (
    <Flex flexWrap="wrap" py={40} px={2} height="40%">
      <Box width={[1, 1 / 3, 1 / 3]}>
        <p>
          {/* TODO: Use moment, luxon, etc. to format time remaining */}
          <b>Voting ends:</b> {expirationDatetime}
        </p>
        <p>
          <b># of tokens committed so far:</b> {tokensCommitted}
        </p>
      </Box>
      <Box width={[1, 1 / 3, 1 / 3]}>
        <Flex justifyContent="center">
          <p>
            <b>Select your position:</b>{" "}
          </p>
        </Flex>
        <Flex justifyContent="center">
          <Box mx={4}>
            <Box
              p={2}
              opacity={status === "voting" ? FULL_OPACITY : DIM_OPACITY}
              bg={"white"}
            >
              <Emoji symbol="👎" label="thumbs-down" />
            </Box>
          </Box>
          <Box mx={4}>
            <Box
              p={2}
              opacity={status === "voting" ? FULL_OPACITY : DIM_OPACITY}
              bg={status === "voting" ? "primary" : "dimmed"}
            >
              {/* TODO: Center the emoji in the box,  */}
              {/* perhaps by putting a fixed padding/margin */}
              {/* around it rather than trying to center it in a box */}
              <Emoji symbol="🤩" label="sheep" />
            </Box>
          </Box>
        </Flex>
      </Box>
      <Box width={[1, 1 / 3, 1 / 3]}>
        <p>
          <b>Commit tokens for your vote:</b>{" "}
        </p>
        {/* <TokenInput /> */}/ {tokensToVoteWith} tokens
      </Box>
    </Flex>
  );
};

export default VotingBox;
