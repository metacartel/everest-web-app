import React, { useReducer } from "react";
import { applicationTypes, applications } from "../constants/projects";

import { Link, Flex, Box } from "rebass";

// TODO: Generalize this component to work for services, infrastructure, and content too, and just pass a type prop in

// TODO: Make dynamic
interface FilterState {
  DAOs: boolean;
  DeFi: boolean;
  games: boolean;
  social: boolean;
  DEX: boolean;
  collectibles: boolean;
}

const initialState: FilterState = {
  DeFi: true,
  DAOs: true,
  games: true,
  social: true,
  DEX: true,
  collectibles: true
};

function reducer(state: any, action: any) {
  switch (action.type) {
    // TODO: Build these cases programmatically
    case "DeFi":
      return {
        ...state,
        ...{
          DeFi: !state.DeFi
        }
      };
    case "DAOs":
      return {
        ...state,
        ...{
          DAOs: !state.DAOs
        }
      };
    case "games":
      return {
        ...state,
        ...{
          games: !state.games
        }
      };
    case "DEX":
      return {
        ...state,
        ...{
          DEX: !state.DEX
        }
      };
    case "social":
      return {
        ...state,
        ...{
          social: !state.social
        }
      };
    case "collectibles":
      return {
        ...state,
        ...{
          collectibles: !state.collectibles
        }
      };
    default:
      throw new Error();
  }
}

export default function Applications({ match }: any) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Flex flexWrap="wrap">
      <Box px={2} py={2} width={[1, 1 / 2, 3 / 4]}>
        <h1>Applications</h1>
        {applications.map(({ name }, index) => {
          return (
            <p key={index}>
              <Link variant="link" href={`/applications/${index}`}>
                {name}
              </Link>
            </p>
          );
        })}
      </Box>
      <Box px={2} py={2} width={[1, 1 / 2, 1 / 4]} bg="muted">
        <h3>Filters</h3>

        <form>
          {applicationTypes.map((applicationType, index) => (
            <label key={index}>
              {applicationType}
              <input
                name={applicationType}
                type="checkbox"
                // TODO: Make checked use state
                checked={state[applicationType]}
                onChange={e => {
                  console.log(e.target);

                  const action = `${applicationType}`;
                  dispatch({ type: applicationType });
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
