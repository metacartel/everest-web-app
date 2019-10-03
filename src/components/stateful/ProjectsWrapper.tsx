import React, { useReducer } from "react";
import { projectTypes, projects } from "../../constants/projects";

import { Flex, Box } from "rebass";
import StyledLink from "../presentational/StyledLink";

import { Category } from "../../types/Category";

// TODO: Generalize this component to work for services, infrastructure, and content too, and just pass a type prop in

// TODO: Make dynamic
interface ApplicationFilterState {
  DAOs: boolean;
  DeFi: boolean;
  games: boolean;
  social: boolean;
  DEX: boolean;
  collectibles: boolean;
}

interface ContentFilterState {
  podcasts: boolean;
  wikis: boolean;
  events: boolean;
  forums: boolean;
  news: boolean;
}

interface ServicesFilterState {
  audits: boolean;
  development: boolean;
  legal: boolean;
  design: boolean;
  accounting: boolean;
  PR: boolean;
}

interface InfrastructureFilterState {
  developmentframework: boolean;
  sidechains: boolean;
  userauthentication: boolean;
  statechannels: boolean;
  onboarding: boolean;
  testing: boolean;
}

const initialStateApplications: ApplicationFilterState = {
  DeFi: true,
  DAOs: true,
  games: true,
  social: true,
  DEX: true,
  collectibles: true
};

const initialStateInfrastructure: InfrastructureFilterState = {
  developmentframework: true,
  sidechains: true,
  userauthentication: true,
  statechannels: true,
  onboarding: true,
  testing: true
};

const initialStateServices: ServicesFilterState = {
  audits: true,
  development: true,
  legal: true,
  design: true,
  accounting: true,
  PR: true
};

const initialStateContent: ContentFilterState = {
  podcasts: true,
  wikis: true,
  events: true,
  forums: true,
  news: true
};

const initialState: any = {
  applications: initialStateApplications,
  infrastructure: initialStateInfrastructure,
  services: initialStateServices,
  content: initialStateContent
};

function reducer(state: any, action: any) {
  console.log(action.type);
  return {
    ...state,
    ...{
      [action.type]: !state[action.type]
    }
  };
}

export default function ProjectsWrapper(props: any) {
  const category: Category = props.category;
  const [state, dispatch] = useReducer(reducer, initialState[category]);
  return (
    <Flex flexWrap="wrap">
      <Box px={2} py={2} width={[1, 1 / 2, 3 / 4]}>
        <h1>{category}</h1>
        {projects[category].map(({ name }, index) => {
          return (
            <p key={index}>
              <StyledLink to={`/${category}/${index}`}>{name}</StyledLink>
            </p>
          );
        })}
      </Box>
      <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]} bg="muted">
        <h3>Filters</h3>

        <form>
          {projectTypes[category].map((projectType, index) => (
            <label key={index}>
              {projectType}
              <input
                name={projectType}
                type="checkbox"
                // TODO: Make checked use state
                checked={state[projectType]}
                onChange={e => {
                  console.log(e.target);
                  // Note: Right now the regex doesn't do anything
                  // since the input is always forced to be one word
                  // This may change if we want to handle spaces differently
                  const actionName = `${projectType}`.replace(/\s/g, "-");
                  dispatch({ type: actionName });
                  // setEnabledTypes(e.target.value);
                }}
              />
            </label>
          ))}
        </form>
      </Box>
    </Flex>
  );
}
