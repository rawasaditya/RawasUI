import React from "react";
import { generateAvatarClass } from "./avatarUtils";
const Avatar = ({ src, alt, size, className, ...props }) => {
  return (
    <img
      className={["avatar", generateAvatarClass(size), className].join(" ")}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default Avatar;
