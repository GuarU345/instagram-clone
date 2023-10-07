import { FormEvent, useState } from "react";
import { registerService } from "../services/auth";
import { RegisterObject } from "../types";
import { useNavigate } from "react-router-dom";

const registerInputClass =
  "placeholder:text-xs placeholder:font-medium placeholder:text-gray-400 block bg-gray-50 border w-9/12 mx-auto py-2 px-2 rounded";

export default function RegisterForm() {
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new window.FormData(e.currentTarget);

    let values = {};

    for (const [key, value] of form.entries()) {
      values = { ...values, [key]: value };
    }

    try {
      await registerService(values as unknown as RegisterObject);

      navigate("/login");
    } catch (error) {
      setError(true);
    }
  };

  return (
    <form className="[&>input]:my-2" onSubmit={handleSubmit}>
      <input
        required
        placeholder="Email"
        type="email"
        name="email"
        className={registerInputClass}
      />
      <input
        required
        placeholder="Full name"
        type="text"
        name="fullname"
        className={registerInputClass}
      />
      <input
        required
        placeholder="Username"
        type="text"
        name="username"
        className={registerInputClass}
      />
      <input
        required
        placeholder="Password"
        type="password"
        name="password"
        className={registerInputClass}
      />
      <button
        className={`block w-9/12 text-center ${
          error ? "bg-red-500" : "bg-sky-400"
        } mx-auto rounded text-white font-semibold p-1 my-4 cursor-pointer`}
      >
        Sign Up
      </button>
    </form>
  );
}
