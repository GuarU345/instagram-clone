import {  useEffect, useState } from "react";

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
