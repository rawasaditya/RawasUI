import React, { useState } from "react";

const Image = ({
  align,
  crossOrigin,
  fallback,
  fallbackSrc,
  fallbackStrategy = "beforeLoadOrError",
  fit,
  htmlHeight,
  htmlWidth,
  ignoreFallback = false,
  loading,
  onError,
  onLoad,
  sizes,
  src,
  srcSet,
  alt,
  className,
  ...props
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const handleError = (event) => {
    handleFallback();
    if (onError) {
      onError(event);
    }
  };

  const handleLoad = (event) => {
    if (onLoad) {
      onLoad(event);
    }
  };

  const handleFallback = () => {
    if (fallbackSrc) {
      setImageSrc(fallbackSrc);
      setError(true);
    }
  };
  const renderImage = () => {
    return (
      <img
        src={imageSrc}
        alt={alt}
        align={align}
        crossOrigin={crossOrigin}
        loading={loading}
        onError={handleError}
        onLoad={handleLoad}
        sizes={sizes}
        srcSet={srcSet}
        style={{ objectFit: fit, objectPosition: align }} // Apply fit and align styles
        width={htmlWidth}
        height={htmlHeight}
        className={className}
        {...props}
      />
    );
  };

  if (ignoreFallback || src) {
    return renderImage();
  }

  if (fallback && fallbackStrategy === "beforeLoadOrError") {
    return fallback;
  }

  return null;
};

export default Image;
