import { create } from "zustand";
import { persist } from "zustand/middleware";
import { User } from "../types";

interface State {
  user: User;
  token: string;
  isAuth: boolean;
}

interface Action {
  login: (token: string, user: User) => void;
  logout: () => void;
}

type AuthStore = State & Action;

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: { fullname: "", id: -1, img: "", username: "" },
      token: "",
      isAuth: false,
      login: (token, user) =>
        set((state) => ({ ...state, token, isAuth: true, user })),
      logout: () => set((state) => ({ ...state, token: "", isAuth: false })),
    }),
    { name: "authStore" }
  )
);

export default useAuthStore;
