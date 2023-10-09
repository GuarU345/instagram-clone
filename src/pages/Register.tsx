import { GetApp, Instagram, Or, SignInUp } from "../components/AuthShared";
import RegisterForm from "../components/RegisterForm";

export default function Register() {
  return (
    <div className="h-screen">
      <div className="grid place-content-center h-full">
        <div>
          <div className="border w-[350px]">
            <Instagram />
            <h1 className="text-lg font-bold text-gray-500 text-center w-10/12 mx-auto">
              Sign up to see photos and videos from your friends.
            </h1>
            <h1 className="text-center w-9/12 mx-auto bg-sky-500 text-white font-semibold my-4 py-1 rounded cursor-pointer">Log in with Facebook</h1>
            <Or />
            <RegisterForm />
          </div>
          <SignInUp text="Log In" to="/login">
            Have an account?
          </SignInUp>
          <GetApp />
        </div>
      </div>
    </div>
  );
}
