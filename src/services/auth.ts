import { LoginObject, LoginResponse, RegisterObject } from "../types";
import api from "../utils/axios";

enum Urls {
  LOGIN = "/auth/signin",
  REGISTER = "/auth/signup",
}

export async function loginService(values: LoginObject) {
  const { data } = await api.post<LoginResponse>(Urls.LOGIN, values);

  return data;
}

export async function registerService(values: RegisterObject) {
  await api.post(Urls.REGISTER, values);
}
