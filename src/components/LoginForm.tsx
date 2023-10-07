import { FormEvent } from "react";
import { ErrorType, LoginObject } from "../types";
import { loginService } from "../services/auth";
import useAuthStore from "../hooks/useAuth";
import { AxiosError } from "axios";

const loginInputClass =
  "placeholder:text-xs placeholder:font-medium placeholder:text-gray-400 block bg-gray-50 border w-9/12 mx-auto py-2 px-2 rounded";

interface Props {
  updateError: (params: ErrorType) => void;
}

export default function LoginForm({ updateError }: Props) {
  const { login } = useAuthStore();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = Object.fromEntries(new window.FormData(e.currentTarget));

    try {
      const { token } = await loginService(form as unknown as LoginObject);

      login(token);
    } catch (error) {
      if (error instanceof AxiosError)
        updateError({ error: true, message: error.response?.data.message });
    }
  };

  return (
    <form className="[&>input]:my-2" onSubmit={handleSubmit}>
      <input
        type="text"
        name="username"
        placeholder="Phone number, username or email"
        className={loginInputClass}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className={loginInputClass}
      />
      <button className="block w-9/12 text-center bg-sky-400 mx-auto rounded text-white font-semibold p-1 my-4">
        Log in
      </button>
    </form>
  );
}
