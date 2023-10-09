import { NewPostObject } from "../types";
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
