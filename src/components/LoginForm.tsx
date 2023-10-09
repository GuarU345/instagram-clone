import { FormEvent } from "react";
import { ErrorType, LoginObject } from "../types";
import { loginService } from "../services/auth";
import useAuthStore from "../hooks/useAuth";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

const loginInputClass =
  "placeholder:text-xs placeholder:font-medium placeholder:text-gray-400 block bg-gray-50 border w-9/12 mx-auto py-2 px-2 rounded";

interface Props {
  updateError: (params: ErrorType) => void;
}

export default function LoginForm({ updateError }: Props) {
  const { login } = useAuthStore();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new window.FormData(e.currentTarget);

    let values = {};

    for (const [key, value] of form.entries()) {
      values = { ...values, [key]: value };
    }

    try {
      const res = await loginService(values as unknown as LoginObject);

      const { token, message, ...user } = res;

      login(token, user);

      navigate("/");
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
        placeholder="Email"
        className={loginInputClass}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className={loginInputClass}
      />
      <button className="block w-9/12 text-center bg-sky-400 mx-auto rounded text-white font-semibold p-1 my-4 cursor-pointer">
        Log in
      </button>
    </form>
  );
}
