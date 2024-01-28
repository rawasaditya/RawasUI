import React from "react";

const Container = ({
  maxW,
  bg,
  centerContent,
  fluid,
  color,
  children,
  style,
  className,
  ...props
}) => {
  const containerStyle = {
    maxWidth: maxW,
    backgroundColor: bg,
    color: color,
    margin: "0 auto",
    textAlign: centerContent ? "center" : "left",
    ...style,
  };

  return (
    <div
      className={["container", fluid ? "container-fluid" : "", className].join(
        " "
      )}
      style={containerStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default Container;
