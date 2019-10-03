import React from "react";
import everestPerson from "../EverestPerson.svg";

import { Box, Flex, Text, Link, Card, Image } from "rebass";

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
              <Link variant="link" href={`/applications`}>
                Applications
              </Link>
            </h3>
            {applicationTypes.map((name, index) => {
              const filter = name.toLowerCase().replace(/\s/g, "-");
              return (
                <p key={name}>
                  <Link variant="link" href={`/applications?type=${filter}`}>
                    {name}
                  </Link>
                </p>
              );
            })}
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]}>
          <Text p={1} color="background" bg="muted">
            <h3>
              <Link variant="link" href={`/infrastructure`}>
                Infrastructure
              </Link>
            </h3>
            {infrastructureTypes.map((name, index) => {
              const filter = name.toLowerCase().replace(/\s/g, "-");
              return (
                <p key={name}>
                  <Link variant="link" href={`/infrastructure?type=${filter}`}>
                    {name}
                  </Link>
                </p>
              );
            })}
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]}>
          <Text p={1} color="background" bg="muted">
            <h3>
              <Link variant="link" href={`/services`}>
                Services
              </Link>
            </h3>
            {serviceTypes.map((name, index) => {
              const filter = name.toLowerCase().replace(/\s/g, "-");
              return (
                <p key={name}>
                  <Link variant="link" href={`/services?type=${filter}`}>
                    {name}
                  </Link>
                </p>
              );
            })}
          </Text>
        </Box>
        <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]}>
          <Text p={1} color="background" bg="muted">
            <h3>
              <Link variant="link" href={`/content`}>
                Content
              </Link>{" "}
            </h3>
            {contentTypes.map((name, index) => {
              const filter = name.toLowerCase().replace(/\s/g, "-");
              return (
                <p key={name}>
                  <Link variant="link" href={`/content?type=${filter}`}>
                    {name}
                  </Link>
                </p>
              );
            })}
          </Text>
        </Box>
      </Flex>
    </div>
  );
}
