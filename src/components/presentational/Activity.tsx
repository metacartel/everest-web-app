import React from "react";

// Note: Modified from `react-feather`
// https://github.com/feathericons/react-feather/blob/master/src/icons/activity.js

const Activity: React.FC<{
  color?: string;
  size?: string | number;
  className?: string;
}> = props => {
  const { color = "currentColor", size = "24", ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...otherProps}
    >
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
    </svg>
  );
};

export default Activity;
