import React from "react";

const TextField = ({ className, ...props }) => {
  return <input className={["form-control", className].join(" ")} />;
};

export default TextField;
