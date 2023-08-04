import axios from "axios";

const INSTAGRAM_URL = "http://192.168.1.7:4000";

export const signup = async (body) => {
  const { data } = await axios.post(
    `${INSTAGRAM_URL}/api/v1/auth/signup`,
    body
  );
  return data;
};

export const signing = async (body) => {
  const payload = {
    username: body.get("username"),
    password: body.get("password"),
  };
  const { data } = await axios.post(
    `${INSTAGRAM_URL}/api/v1/auth/signin`,
    payload
  );
  return data;
};
