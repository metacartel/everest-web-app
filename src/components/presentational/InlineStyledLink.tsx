import React from "react";
import { Link } from "react-router-dom";

import { css } from "emotion";

import { useTheme } from "emotion-theming";

// TODO: Potentially DRY this up and use it inside
// StyledLink if this component will persist

export default function InlineStyledLink(props: any) {
  const theme: any = useTheme();
  return (
    <Link
      to={props.to}
      className={css`
        padding: 24px;
        color: ${theme.colors.primary};
        font-size: 16px;
        border-radius: 4px;
        text-decoration: none;
        &:hover {
          color: ${theme.colors.tertiary};
        }
      `}
    >
      {props.children}
    </Link>
  );
}
