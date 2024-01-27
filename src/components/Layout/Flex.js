import React from "react";

const Flex = ({ direction, align, justify, wrap, gap, children }) => {
  const flexStyles = {
    display: "flex",
    flexDirection: direction,
    alignItems: align,
    justifyContent: justify,
    flexWrap: wrap,
    gap: gap ? `${gap}` : "0",
  };

  return <div style={flexStyles}>{children}</div>;
};

export default Flex;
