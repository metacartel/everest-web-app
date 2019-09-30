import React from "react";
import { Link } from "react-router-dom";

export default function Proposals({ match }: any) {
  return (
    <div>
      <h2>Proposals</h2>
      <h3>Please select a proposal.</h3>

      <ul>
        <li>
          <Link to={`${match.url}/1`}>Project 1</Link>
        </li>
        <li>
          <Link to={`${match.url}/2`}>Project 2</Link>
        </li>
      </ul>
    </div>
  );
}
