import { createContext, useEffect, useState } from "react";
import { fetchGetPosts } from "../../services/posts";

export const getPostsContext = createContext(null);

const GetPostsProvider = ({ children }) => {
  const [posts, setPosts] = useState([]);

  const getPosts = async() => {
    const resp = await fetchGetPosts()
    setPosts(resp)
  }

  useEffect(() => {
    getPosts()
  },[])

  return (
    <getPostsContext.Provider value={{ posts, setPosts, getPosts }}>
      {children}
    </getPostsContext.Provider>
  );
};

export default GetPostsProvider;