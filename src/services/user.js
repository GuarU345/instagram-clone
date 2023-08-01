import axios from "axios";

const INSTAGRAM_URL = "http://192.168.1.30:4000";

const fetchFollowUser = async (idUser, token) => {
  const { data } = await axios.get(
    `${INSTAGRAM_URL}/api/v1/user/${idUser}/follow`,
    {
      headers: { Authorization: `Bearer ${token}` },
    }
  );
  return data;
};

const fetchProfileData = async (token) => {
  const { data } = await axios.get(`${INSTAGRAM_URL}/api/v1/user`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return data;
};

export { fetchFollowUser, fetchProfileData };
