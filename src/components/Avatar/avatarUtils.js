const generateAvatarClass = (size) => {
  if (!["2xs", "xs", "sm", "md", "lg", "xl", "2xl"].includes(size)) {
    return "";
  }
  const cssClass = `avatar-${size}`;
  return cssClass;
};
export { generateAvatarClass };
