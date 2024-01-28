import React from "react";

const Box = ({ w, h, bg, children, style, ...props }) => {
  const boxStyles = {
    width: w,
    height: h,
    backgroundColor: bg,
    ...style,
  };

  return (
    <div style={boxStyles} {...props}>
      {children}
    </div>
  );
};

export default Box;
