import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { getOpenProposals } from "../../helpers/functions";

import InlineStyledLink from "../presentational/InlineStyledLink";

const EXCHANGE_RATES = gql`
  {
    domains(first: 10) {
      name
    }
  }
`;

export default function TheGraphFetch() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;

  return (
    <div>
      {getOpenProposals().map(({ name, status, tagline, type, index }) => {
        return (
          <p key={index}>
            {status === "voting" ? "voting" : "queued"}
            <InlineStyledLink to={`/proposals/${index}`}>
              {name}
            </InlineStyledLink>
            ({type}) {tagline}
          </p>
        );
      })}
      {/* {data.domains.map(({ name }: any) => (
        <div key={name}>
          <p>{name}</p>
        </div>
      ))} */}
    </div>
  );
}
