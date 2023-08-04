import axios from "axios";

const baseURL = "http://192.168.1.7:4000";

const api = axios.create({
  baseURL,
});

export default api;
