export interface LoginObject {
  username: string;
  password: string;
}

export type RegisterObject = LoginObject & {
  email: string;
  fullname: string;
};

export interface LoginResponse {
  token: string;
  message: string;
}

export interface ErrorType {
  message: string;
  error: boolean;
}

export interface NewPostObject {
  description: string;
  media: File;
}
