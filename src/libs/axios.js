import axios from "axios";

const baseURL = "http://192.168.1.31:4000";

const api = axios.create({
  baseURL,
});

export default api;
