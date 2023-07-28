import axios from "axios";

const INSTAGRAM_URL = "http://192.168.1.30:4000";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: INSTAGRAM_URL + "/api/v1",
});

export const fetchCreateNewPost = async (payload, token) => {
  const { data } = await api.post(`/post`, payload, {
    headers: {Authorization: `Bearer ${token}`}
  });
  return data;
};

export const fetchGetPosts = async (token) => {
  const { data } = await api.get(`/post`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export const fetchLikePost = async (idPost) => {
  const { data } = await api.get(`/post/${idPost}/vote`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};
