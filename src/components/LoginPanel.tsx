import LoginForm from "./LoginForm";
import { useState } from "react";
import { ErrorType } from "../types";
import { GetApp, Instagram, Or, SignInUp } from "./AuthShared";

export default function LoginPanel() {
  const [error, setError] = useState<ErrorType>({ error: false, message: "" });

  const updateError = (params: ErrorType) => {
    setError({ ...params });
  };

  return (
    <div>
      <div className="w-[350px] border">
        <Instagram />
        <LoginForm updateError={updateError} />
        <Or />
        <h1 className="text-sky-800 mt-4 text-center font-semibold text-md">
          Log in with Facebook
        </h1>
        {error ? <h1>{error.message}</h1> : null}
        <h1 className="text-sky-800 my-4 text-center font-medium text-xs">
          Forgot Password?
        </h1>
      </div>
      <SignInUp text="Sign Up" to="/register">
        Don't have an account?
      </SignInUp>
      <GetApp />
    </div>
  );
}
