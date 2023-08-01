import React from "react";
import Main from "./Main";
import Layout from "./Layout";

const Home = () => {
  return (
    <Layout>
      <div className="w-[530px]">
        <Main />
      </div>
      <div>User</div>
    </Layout>
  );
};

export default Home;
