import api from "../libs/axios";

const fetchFollowUser = async (idUser, token) => {
  const { data } = await api.get(`/api/v1/user/${idUser}/follow`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

const fetchProfileData = async (token) => {
  const { data } = await api.get(`/api/v1/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export { fetchFollowUser, fetchProfileData };
