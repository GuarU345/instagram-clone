import { useContext, useState } from "react";
import { fetchLikePost } from "../../services/posts";
import { toast } from "react-toastify";

export function useLike(idPost) {
  const likePost = async () => {
    try {
      await fetchLikePost(idPost);
    } catch (error) {
      toast.error("Algo salio mal");
    }
  };

  return { likePost };
}
