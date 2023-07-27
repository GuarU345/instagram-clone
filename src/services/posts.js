import axios from "axios";

const INSTAGRAM_URL = "http://192.168.1.30:4000";

const token = localStorage.getItem("token");

const api = axios.create({
  baseURL: INSTAGRAM_URL + "/api/v1",
  headers: { Authorization: `Bearer ${token}` },
});

export const fetchCreateNewPost = async (payload) => {
  const { data } = await api.post(`/post`, payload);
  return data;
};

export const fetchGetPosts = async () => {
  const { data } = await api.get(`/post`);
  return data;
};

export const fetchLikePost = async(idPost) => {
    const {data} = await api.get(`/post/${idPost}/vote`)
    return data
} 
