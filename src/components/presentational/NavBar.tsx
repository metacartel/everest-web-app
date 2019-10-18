import React from "react";

import StyledLink from "./StyledLink";

import { Box, Flex } from "rebass";

const widths = [1, 1 / 4, 1 / 8];

// The idea is we only want final vertical space
// after the last one when each one is its own row on mobile
const widthsFinalElement = [1, 0, 0];

const WrappedLink: React.FC<{ url: string; label: string }> = ({
  url,
  label
}) => {
  return (
    <Box width={widths} pt={2}>
      <StyledLink to={url}>{label}</StyledLink>
    </Box>
  );
};

export default function NavBar(props: any) {
  return (
    <Flex flexWrap="wrap" px={2} color="white" bg="black" alignItems="center">
      {/* TODO: Handle look when text wraps to two lines */}
      {/* or prevent that from happening */}
      {/* For now we're preventing it from happening */}
      {/* by carefully choosing wording and width on each screen size */}
      <WrappedLink label="Everest" url="/" />
      <Box mx="auto" />
      <WrappedLink label="New listing" url="/create-listing" />
      <WrappedLink label="Proposals" url="/proposals" />
      <WrappedLink label="About" url="/about" />
      <Box width={widthsFinalElement} mt={2}></Box>
    </Flex>
  );
}
