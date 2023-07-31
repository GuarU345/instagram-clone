import React, { useEffect } from "react";

function Modal({ children, isOpen, handleClose }) {
  const close = (event) => {
    if (event.key === "Escape") {
      handleClose();
      document.body.style.overflow="scroll"
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", close);

    return () => document.removeEventListener("keydown", close);
  }, []);

  return isOpen ? (
    <div className="absolute flex flex-col top-0 left-0 h-full w-full bg-black bg-opacity-50">
      {children}
    </div>
  ) : null;
}

export default Modal;
