import React from "react";

const Box = ({ w, h, bg }) => {
  const boxStyles = {
    width: w,
    height: h,
    backgroundColor: bg,
  };

  return <div style={boxStyles}></div>;
};

export default Box;
