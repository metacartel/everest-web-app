import React, { useReducer } from "react";
import StyledLink from "../components/presentational/StyledLink";
import { applicationTypes, applications } from "../constants/projects";

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
    <div>
      <h1>Applications</h1>
      {applications.map(({ name }, index) => {
        return (
          <p key={index}>
            <StyledLink to={`/applications/${index}`} label={name} />
          </p>
        );
      })}
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
    </div>
  );
}
