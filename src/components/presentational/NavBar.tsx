import React from "react";

import StyledLink from "./StyledLink";

import { Box, Flex } from "rebass";

const widths = [1, 1 / 4, 1 / 8];
const verticalSpacing = 2;

// The idea is we only want a lot of final vertical space
// after the last one when each one is its own row on mobile
const widthsFinalElement = [1, 0, 0];

// Hacky:
const widthsFinalElementLargeScreen = [0, 1, 1];

const WrappedLink: React.FC<{ url: string; label: string }> = ({
  url,
  label
}) => {
  return (
    <Box width={widths} pt={verticalSpacing}>
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
      <Box width={widthsFinalElement} mt={verticalSpacing}></Box>
      {/* Hacky: */}
      <Box width={widthsFinalElementLargeScreen} mt={verticalSpacing / 2}></Box>
    </Flex>
  );
}
