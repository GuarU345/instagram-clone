import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  token: string;
  isAuth: boolean;
}

interface Action {
  login: (token: string) => void;
  logout: () => void;
}

type AuthStore = State & Action;

const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      token: "",
      isAuth: false,
      login: (token) => set((state) => ({ ...state, token, isAuth: true })),
      logout: () => set((state) => ({ ...state, token: "", isAuth: false })),
    }),
    { name: "authStore" }
  )
);

export default useAuthStore;
