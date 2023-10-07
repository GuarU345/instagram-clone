export interface LoginObject {
  username: string;
  password: string;
}

export interface LoginResponse {
  token: string;
  message: string;
}

export interface ErrorType {
  message: string;
  error: boolean;
}
