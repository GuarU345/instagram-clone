import axios from "axios";

const INSTAGRAM_URL = "http://192.168.1.30:4000";

export const CreateNewComment = async (idPost, body, token) => {
  const { data } = axios.post(
    `${INSTAGRAM_URL}/api/v1/post/${idPost}/comment`,
    {
      comment: body,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
};
