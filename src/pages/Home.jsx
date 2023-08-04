import React from "react";
import Layout from "../components/shared/Layout";
import AuthProvider from "../contexts/AuthContext";
import GetPostsProvider from "../contexts/GetPostsContext";

function Home() {
  return (
    <AuthProvider>
      <GetPostsProvider>
        <Layout></Layout>
      </GetPostsProvider>
    </AuthProvider>
  );
}

export default Home;
