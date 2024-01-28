import React, { useState, useRef, useEffect } from "react";

const PopupMenuButton = ({
  buttonText,
  children,
  menu,
  background,
  setIsOpen,
  isOpen,
}) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItem = {
    backgroundColor: background,
  };
  return (
    <div className="popupMenu" ref={menuRef}>
      <span onClick={toggleMenu}>{menu}</span>
      {isOpen && (
        <div className={"menu"} style={{ ...menuItem }}>
          {children}
        </div>
      )}
    </div>
  );
};

export default PopupMenuButton;
