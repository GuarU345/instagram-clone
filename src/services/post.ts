import { NewPostObject, Post } from "../types";
import api from "../utils/axios";

export async function createPostService(values: NewPostObject, token: string) {
  const { data } = await api.post("/post", values, {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    },
  });

  return data;
}

export async function getPostsService(token: string) {
  const { data } = await api.get<Post[]>("/post", {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}

export async function getPostService(id: number, token: string) {
  const { data } = await api.get<Post>(`/post/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  return data;
}
