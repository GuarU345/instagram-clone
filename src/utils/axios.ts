import axios from "axios";

const baseURL = "localhost:4000";

const api = axios.create({
  baseURL,
});

export default api;
