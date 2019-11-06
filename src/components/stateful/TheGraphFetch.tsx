import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import { getOpenProposals } from "../../helpers/helpers";

import Spinner from "../presentational/Spinner";

import InlineStyledLink from "../presentational/InlineStyledLink";

const DOMAINS = gql`
  {
    domains(first: 10) {
      name
    }
  }
`;

export default function TheGraphFetch() {
  // If we were using the data from The Graph yet,
  // we would use the data variable as well
  // const { loading, error, data } = useQuery(DOMAINS);
  const { loading, error } = useQuery(DOMAINS);

  if (loading) return <Spinner />;
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
