import GetIos from "../assets/getios.png";
import GetAndroid from "../assets/getandroid.png";
import LoginForm from "./LoginForm";
import { useState } from "react";
import { ErrorType } from "../types";

export default function LoginPanel() {
  const [error, setError] = useState<ErrorType>({ error: false, message: "" });

  const updateError = (params: ErrorType) => {
    setError({ ...params });
  };

  return (
    <div>
      <div className="w-[350px] border">
        <h1 className="instagram text-center text-4xl py-12">Instagram</h1>
        <LoginForm updateError={updateError} />
        <div>
          <p className="relative text-gray-500 font-bold text-center before:left-[2.75rem] before:bg-gray-300 before:top-[0.75rem] before:absolute before:h-[1px] before:content-[''] before:w-[110px] after:block after:right-[2.75rem] after:bg-gray-300 after:top-[0.75rem] after:absolute after:h-[1px] after:content-[''] after:w-[110px] before:block">
            OR
          </p>
        </div>
        <h1 className="text-sky-800 mt-4 text-center font-semibold text-md">
          Log in with Facebook
        </h1>
        {error ? <h1>{error.message}</h1> : null}
        <h1 className="text-sky-800 my-4 text-center font-medium text-xs">
          Forgot Password?
        </h1>
      </div>

      <div className="w-[350px] border mt-3">
        <h1 className="text-center py-4 text-sm">
          Don't have an account?{" "}
          <a className="text-sky-500 font-bold">Sign Up</a>
        </h1>
      </div>

      <h1 className="py-6 text-center">Get the app</h1>

      <div className="flex justify-center gap-4">
        <img src={GetIos} alt="Get Ios App" className="h-[40px]" />
        <img src={GetAndroid} alt="Get Android App" className="h-[40px]" />
      </div>
    </div>
  );
}
