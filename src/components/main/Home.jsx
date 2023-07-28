import React from "react";
import OpenPostModalProvider from "../contexts/OpenPostModal";
import Navbar from "../navbar/Navbar";
import Main from "./Main";
import GetPostsProvider from "../contexts/GetPostsContext";
import { AuthContext } from "../contexts/AuthContext";

const Home = () => {
  return (
    <OpenPostModalProvider>
      <GetPostsProvider>
          <div className="grid grid-cols-3">
            <Navbar />
            <div className="w-[530px]">
              <Main />
            </div>
            <div>User</div>
          </div>
      </GetPostsProvider>
    </OpenPostModalProvider>
  );
};

export default Home;
