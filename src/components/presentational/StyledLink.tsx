import React from "react";
import { Link } from "react-router-dom";

export default function StyledLink(props: any) {
  return (
    <b>
      <Link to={props.to}>{props.children}</Link>
    </b>
  );
}
