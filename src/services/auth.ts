import { LoginObject, LoginResponse } from "../types";
import api from "../utils/axios";

enum Urls {
  LOGIN = "/api/auth/signin",
}

export async function loginService(values: LoginObject) {
  const { data } = await api.post<LoginResponse>(Urls.LOGIN, values);

  return data;
}
