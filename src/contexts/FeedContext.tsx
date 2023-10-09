import { PropsWithChildren, createContext, useEffect, useState } from "react";
import { Post } from "../types";
import { getPostService, getPostsService } from "../services/post";
import useAuthStore from "../hooks/useAuth";

interface FeedContextState {
  posts: Post[];
  error: boolean;
  loading: boolean;
  refetch: () => void;
  update: (post: number) => void;
}

export const FeedContext = createContext<FeedContextState>({
  posts: [],
  error: false,
  loading: true,
  refetch: () => {},
  update: () => {},
});

export function FeedProvider({ children }: PropsWithChildren) {
  const { token } = useAuthStore();

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetch = () =>
    getPostsService(token)
      .then((res) => setPosts(res))
      .catch(() => setError(true))
      .finally(() => setLoading(false));

  const fetchUniquePost = (id: number) => {
    getPostService(id, token).then((res) => {
      const updatePosts = [...posts];

      const currentPost = posts.findIndex((p) => p.id === id);

      updatePosts[currentPost] = res;

      setPosts(updatePosts);
    });
  };

  const refetch = () => {
    setLoading(true);
    fetch();
  };

  const update = (post: number) => {
    fetchUniquePost(post);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <FeedContext.Provider value={{ posts, refetch, update, loading, error }}>
      {children}
    </FeedContext.Provider>
  );
}
