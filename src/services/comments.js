import axios from "axios";

const INSTAGRAM_URL = "http://192.168.1.7:4000";

const CreateNewComment = async (idPost, body, token) => {
  const { data } = axios.post(
    `${INSTAGRAM_URL}/api/v1/post/${idPost}/comment`,
    {
      comment: body,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
};

const fetchSpecificCommentsByPost = async (idPost, token) => {
  const { data } = await axios.get(
    `${INSTAGRAM_URL}/api/v1/post/${idPost}/comment`,
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
};

export { CreateNewComment, fetchSpecificCommentsByPost };
