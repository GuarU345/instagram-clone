import { LoginObject } from "../types";
import api from "../utils/axios";

enum Urls {
  LOGIN = "/api/auth/signin",
}

interface LoginResponse {
  token: string;
  message: string;
}

export async function loginService(values: LoginObject) {
  const { data } = await api.post<LoginResponse>(Urls.LOGIN, values);

  return data;
}
