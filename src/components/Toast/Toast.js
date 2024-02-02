// Toast.js
import React, { useEffect } from "react";

const Toast = ({ message, showToast, setShowToast }) => {
  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  return (
    <div className={`toast ${showToast ? "show" : "hide"}`}>{message}</div>
  );
};

export default Toast;
