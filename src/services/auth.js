import api from "../libs/axios";

export const signup = async (body) => {
  const { data } = await api.post(`/api/v1/auth/signup`, body);
  return data;
};

export const signing = async (body) => {
  const payload = {
    username: body.get("username"),
    password: body.get("password"),
  };
  const { data } = await api.post(`/api/v1/auth/signin`, payload);
  return data;
};
