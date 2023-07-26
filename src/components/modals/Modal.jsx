//import React from "react";

export const Modal = ({ children }) => {
  return (
    <div className="container h-screen grid place-content-center absolute z-[1px]">
      <div className="absolute top-[-135px] bg-white shadow-2xl z-10 w-[750px] h-[800px] transform  rounded-lg">
        {children}
      </div>
    </div>
  );
};
