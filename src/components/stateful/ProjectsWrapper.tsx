import React, { useReducer } from "react";
import { projectSubtypes, projects } from "../../constants/projects";

import { Flex, Box } from "rebass";
import StyledLink from "../presentational/StyledLink";

import { Category } from "../../types/Category";

// TODO: Generalize this component to work for services, infrastructure, and content too, and just pass a type prop in

// TODO: Make dynamic
interface ApplicationFilterState {
  daos: boolean;
  defi: boolean;
  games: boolean;
  social: boolean;
  dex: boolean;
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
  pr: boolean;
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
  defi: true,
  daos: true,
  games: true,
  social: true,
  dex: true,
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
  pr: true
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

function getNonUserFacingSlug(projectName: string) {
  return projectName.toLowerCase().replace(/\s/g, "");
}

function reducer(state: any, action: any) {
  console.log(action.type);
  let newState;
  // Used for setting all values at once
  // based on query param
  if (action.type.indexOf("single") !== -1) {
    console.log("Special action");
    return state;
  } else {
    // Used when user toggles
    newState = {
      ...state,
      ...{
        [action.type]: !state[action.type]
      }
    };
    console.log(newState);
    return newState;
  }
}

interface Props {
  category: Category;
  projectSubtype?: string;
}

// (No hyphens is more useful internally because it lets you directly use
// the name as the key in an object without the editor getting upset)
function getNonUserFacingSlugFromUserFacing(projectName: string) {
  return projectName.toLowerCase().replace(/-/g, "");
}

export default function ProjectsWrapper({ category, projectSubtype }: Props) {
  console.log({ projectSubtype });
  const initialStateForCategory = initialState[category];
  console.log({ initialStateForCategory });
  const [state, dispatch] = useReducer(reducer, initialStateForCategory);

  // TODO: Use React Router query param to determine initial state
  // Do something like this but with useEffect so it's after
  // the first render:
  // if (!!projectSubtype) {
  //   const projectSubtypeSlug = getNonUserFacingSlugFromUserFacing(
  //     projectSubtype
  //   );
  //   dispatch({ type: `single-projectSubtypeSlug` });
  // }
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
          {projectSubtypes[category].map((projectSubtype, index) => (
            <p key={index}>
              <label>
                {projectSubtype}{" "}
                <input
                  name={projectSubtype}
                  type="checkbox"
                  // TODO: Make checked use state
                  checked={state[getNonUserFacingSlug(projectSubtype)]}
                  onChange={e => {
                    console.log(e.target);
                    // Note: Right now the regex doesn't do anything
                    // since the input is always forced to be one word
                    // This may change if we want to handle spaces differently
                    const actionName = `${getNonUserFacingSlug(
                      projectSubtype
                    )}`;
                    dispatch({ type: actionName });
                    // setEnabledTypes(e.target.value);
                  }}
                />
              </label>
            </p>
          ))}
        </form>
      </Box>
    </Flex>
  );
}
