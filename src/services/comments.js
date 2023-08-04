import api from "../libs/axios";

const CreateNewComment = async (idPost, body, token) => {
  const { data } = api.post(
    `/api/v1/post/${idPost}/comment`,
    {
      comment: body,
    },
    { headers: { Authorization: `Bearer ${token}` } }
  );
  return data;
};

const fetchSpecificCommentsByPost = async (idPost, token) => {
  const { data } = await api.get(`/api/v1/post/${idPost}/comment`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export { CreateNewComment, fetchSpecificCommentsByPost };
