import React from "react";
import everestPerson from "../EverestPerson.svg";

import { Box, Flex, Text, Image } from "rebass";
import StyledLink from "../components/presentational/StyledLink";

// TODO: Try using StyledLink from React Router again to see if it fixes 404

import {
  applicationTypes,
  infrastructureTypes,
  serviceTypes,
  contentTypes
} from "../constants/projects";

export default function Home() {
  return (
    <div>
      <h2>Everest</h2>
      <Image
        src={everestPerson}
        sx={{
          width: ["90%", "40%", "10%"],
          borderRadius: 8
        }}
      />
      {/* TODO: Maybe DRY these four sections up with a map */}
      <Flex flexWrap="wrap" mx={-2}>
        <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]}>
          <Text p={1} color="background" bg="muted">
            <h3>
              <StyledLink to={`/applications`}>Applications</StyledLink>
            </h3>
            {applicationTypes.map((name, index) => {
              const filter = name.toLowerCase().replace(/\s/g, "-");
              return (
                <p key={name}>
                  <StyledLink to={`/applications?type=${filter}`}>
                    {name}
                  </StyledLink>
                </p>
              );
            })}
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]}>
          <Text p={1} color="background" bg="muted">
            <h3>
              <StyledLink to={`/infrastructure`}>Infrastructure</StyledLink>
            </h3>
            {infrastructureTypes.map((name, index) => {
              const filter = name.toLowerCase().replace(/\s/g, "-");
              return (
                <p key={name}>
                  <StyledLink to={`/infrastructure?type=${filter}`}>
                    {name}
                  </StyledLink>
                </p>
              );
            })}
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]}>
          <Text p={1} color="background" bg="muted">
            <h3>
              <StyledLink to={`/services`}>Services</StyledLink>
            </h3>
            {serviceTypes.map((name, index) => {
              const filter = name.toLowerCase().replace(/\s/g, "-");
              return (
                <p key={name}>
                  <StyledLink to={`/services?type=${filter}`}>
                    {name}
                  </StyledLink>
                </p>
              );
            })}
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]}>
          <Text p={1} color="background" bg="muted">
            <h3>
              <StyledLink to={`/content`}>Content</StyledLink>{" "}
            </h3>
            {contentTypes.map((name, index) => {
              const filter = name.toLowerCase().replace(/\s/g, "-");
              return (
                <p key={name}>
                  <StyledLink to={`/content?type=${filter}`}>{name}</StyledLink>
                </p>
              );
            })}
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
