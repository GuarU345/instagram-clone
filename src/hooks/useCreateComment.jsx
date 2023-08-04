import { useContext } from "react";
import { CreateNewComment } from "../services/comments";
import { AuthContext } from "../contexts/AuthContext";

export function useCreateComment(idPost) {
  const { getToken } = useContext(AuthContext);

  const createComment = async (comment) => {
    const token = getToken();
    const resp = await CreateNewComment(idPost, comment, token);
    return resp;
  };

  return { createComment };
}
