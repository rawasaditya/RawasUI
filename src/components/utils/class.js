const generateRoundedClass = (isRounded) => {
  if (isRounded) {
    const cssClass = `rounded-pill`;
    return cssClass;
  }
  return "";
};

const getSizeClass = (size) => {
  if (size) {
    return size == "sm" ? "sm" : "lg";
  }
  return "";
};

export { generateRoundedClass, getSizeClass };
