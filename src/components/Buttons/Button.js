import React from "react";
import { generateBtnClass } from "./buttonsUtils";
import { generateRoundedClass } from "../utils/class";
import Spinner from "../Spinner/Spinner";
const Buttons = ({
  children,
  color,
  variant,
  rounded,
  className,
  loading,
  size,
  ...props
}) => {
  const colorClass = generateBtnClass(color, variant);
  const roundedClass = generateRoundedClass(rounded);
  return (
    <button
      className={[
        "btn",
        colorClass,
        roundedClass,
        `btn-${size}`,
        className,
      ].join(" ")}
      disabled={loading}
      {...props}
    >
      {loading && <Spinner color={color} />}
      {children}
    </button>
  );
};

export default Buttons;
