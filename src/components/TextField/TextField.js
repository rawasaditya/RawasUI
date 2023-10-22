import React from "react";
import { generateRoundedClass, getSizeClass } from "../Utilities/class";
const TextField = ({ className, rounded, size, ...props }) => {
  const roundedClass = generateRoundedClass(rounded);
  const sizeClass = getSizeClass(size);
  return (
    <input
      className={["form-control", sizeClass, roundedClass, className].join(" ")}
      {...props}
    />
  );
};

export default TextField;
