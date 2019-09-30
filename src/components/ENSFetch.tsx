import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

const EXCHANGE_RATES = gql`
  {
    domains(first: 10) {
      name
    }
  }
`;

export default function ENSFetch() {
  const { loading, error, data } = useQuery(EXCHANGE_RATES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return data.domains.map(({ name }: any) => (
    <div key={name}>
      <p>{name}</p>
    </div>
  ));
}
