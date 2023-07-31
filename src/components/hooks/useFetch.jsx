import { useContext, useEffect, useState } from "react";
import { fetchPostById } from "../../services/posts";
import { AuthContext } from "../contexts/AuthContext";

export function useFetch(id) {
  const { getToken } = useContext(AuthContext);
  const [post, setPost] = useState(null);

  const getPostById = async () => {
    const token = getToken();
    const resp = await fetchPostById(id, token);
    setPost(resp);
  };

  useEffect(() => {
    getPostById();
  }, []);

  return { post };
}
