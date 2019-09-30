import React from "react";
import { useParams } from "react-router-dom";

export default function Proposal() {
  let { slug } = useParams();
  return <div>Now showing proposal {slug}</div>;
}
