import api from "../libs/axios";

const token = localStorage.getItem("token");

const fetchCreateNewPost = async (payload, token) => {
  const { data } = await api.post(`/api/v1/post`, payload, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const fetchGetPosts = async (token) => {
  const { data } = await api.get(`/api/v1/post`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const fetchPostById = async (idPost, token) => {
  const { data } = await api.get(`/api/v1/post/${idPost}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const fetchLikePost = async (idPost) => {
  const { data } = await api.get(`/api/v1/post/${idPost}/vote`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export { fetchCreateNewPost, fetchGetPosts, fetchLikePost, fetchPostById };
