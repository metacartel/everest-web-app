import React from "react";
import { Link } from "react-router-dom";

export default function StyledLink(props: any) {
  return (
    <b>
      <Link className="App-link" to={props.to}>
        {props.label}
      </Link>
    </b>
  );
}
