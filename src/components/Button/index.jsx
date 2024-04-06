import React from "react";

function Button(props) {
  const { text, backgroundColor, color, border, borderRadius, width, height } =
    props;

  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: color,
        border: border,
        borderRadius: borderRadius,
        width: width,
        height: height,
      }}
    >
      {text}
    </button>
  );
}

export default Button;
