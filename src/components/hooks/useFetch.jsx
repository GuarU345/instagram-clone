import { useContext, useEffect, useState } from "react";
import { fetchPostById } from "../../services/posts";
import { AuthContext } from "../contexts/AuthContext";

export function useFetch(id, fetcher) {
  const [post, setPost] = useState(null);

  const getPostById = async () => {
    const resp = await fetcher;
    setPost(resp);
  };

  useEffect(() => {
    getPostById();
  }, [id]);

  return { post };
}
