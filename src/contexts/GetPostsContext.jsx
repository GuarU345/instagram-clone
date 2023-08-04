import { createContext, useContext, useEffect, useState } from "react";
import { fetchGetPosts } from "../services/posts";
import { AuthContext } from "./AuthContext";

export const getPostsContext = createContext(null);

const GetPostsProvider = ({ children }) => {
  const {getToken} = useContext(AuthContext)
  const [posts, setPosts] = useState([]);

  const getPosts = async() => {
    const token = getToken()
    const resp = await fetchGetPosts(token)
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