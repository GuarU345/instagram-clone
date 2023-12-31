export interface User {
  fullname: string;
  username: string;
  img: string | null;
  id: number;
}

export type LoginObject = Omit<User, "fullname" | "img" | "id"> & {
  password: string;
};

export type RegisterObject = LoginObject & {
  email: string;
  fullname: string;
};

export type LoginResponse = User & {
  token: string;
  message: string;
};

export interface ErrorType {
  message: string;
  error: boolean;
}

export interface NewPostObject {
  description: string;
  media: File;
}

export interface Post {
  id: number;
  userID: number;
  username: string;
  photo: string | null;
  media: string[];
  description: string;
  comments: number;
  votes: number;
  date: Date;
  isVoted: boolean;
}
