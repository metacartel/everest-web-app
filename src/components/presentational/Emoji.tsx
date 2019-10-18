import React from "react";

// TODO: Add a size prop

const Emoji: React.FC<{ label: string; symbol: string }> = props => (
  <span
    className="emoji"
    role="img"
    aria-label={props.label ? props.label : ""}
    aria-hidden={props.label ? "false" : "true"}
  >
    {props.symbol}
  </span>
);

export default Emoji;
