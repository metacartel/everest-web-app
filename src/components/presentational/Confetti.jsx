import React from "react";
import useWindowSize from "react-use/lib/useWindowSize";
import ReactConfetti from "react-confetti";

import { useTheme } from "emotion-theming";

// Note: Using a .jsx version of this file
// as opposed to TypeScript because of:
// https://github.com/alampros/react-confetti/issues/72

export default ({ start, variant }) => {
  const { width, height } = useWindowSize();
  const theme = useTheme();
  const { colors } = theme;
  const { primary, secondary, tertiary } = colors;

  // Variant can be unspecified, "top", or "bottom"
  const _variant = variant
    ? variant
    : height && width && height > 1.5 * width
    ? "bottom"
    : variant;

  return start ? (
    <ReactConfetti
      colors={[primary, secondary, tertiary]}
      numberOfPieces={80}
      recycle={false}
      run={true}
      width={width}
      height={height}
      confettiSource={{
        x: width / 2,
        y:
          _variant === "top"
            ? height * 0.25
            : _variant === "bottom"
            ? height * 0.75
            : height * 0.5
      }}
      initialVelocityX={20}
      initialVelocityY={40}
      gravity={0.5}
      tweenDuration={300}
      wind={0.1}
    />
  ) : null;
};
