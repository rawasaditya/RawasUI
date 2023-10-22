const generateBtnClass = (color, variant = "text") => {
  const cssClass = `btn-${variant}-${color}`;
  return cssClass;
};
export { generateBtnClass };
