import React from "react";

import StyledLink from "./StyledLink";

import { Box, Flex } from "rebass";

const widths = [1, 1 / 5, 1 / 6];

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
      <WrappedLink label="Everest" url="/" />
      <Box mx="auto" />
      <WrappedLink label="Add listing" url="/create-listing" />
      <WrappedLink label="Proposals" url="/proposals" />
      <WrappedLink label="About" url="/about" />
      <Box width={widths} mt={2}></Box>
    </Flex>
  );
}
