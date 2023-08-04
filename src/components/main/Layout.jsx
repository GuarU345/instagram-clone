import React from "react";
import Navbar from "../navbar/Navbar";
import OpenPostModalProvider from "../../contexts/OpenPostModal";
import GetPostsProvider from "../../contexts/GetPostsContext";

const Layout = ({ children }) => {
  return (
    <OpenPostModalProvider>
      <GetPostsProvider>
        <div className="grid grid-cols-3 h-screen overflow-scroll">
          <Navbar />
          {children}
        </div>
      </GetPostsProvider>
    </OpenPostModalProvider>
  );
};

export default Layout;
