import { useContext } from "react";
import { CreateNewComment } from "../../services/comments";
import { AuthContext } from "../contexts/AuthContext";
import { getPostsContext } from "../contexts/GetPostsContext";

export function useCreateComment(idPost) {
  const { getToken } = useContext(AuthContext);
  const { getPosts } = useContext(getPostsContext)

  const createComment = async (comment) => {
    const token = getToken();
    const resp = await CreateNewComment(idPost, comment, token);
    return resp;
  };

  return { createComment };
}
