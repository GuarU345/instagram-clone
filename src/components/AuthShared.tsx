import GetIos from "../assets/getios.png";
import GetAndroid from "../assets/getandroid.png";
import { PropsWithChildren } from "react";
import { Link } from "react-router-dom";

export function Instagram() {
  return <h1 className="instagram text-center text-4xl py-12">Instagram</h1>;
}

export function Or() {
  return (
    <div>
      <p className="relative text-gray-500 font-bold text-center before:left-[2.75rem] before:bg-gray-300 before:top-[0.75rem] before:absolute before:h-[1px] before:content-[''] before:w-[110px] after:block after:right-[2.75rem] after:bg-gray-300 after:top-[0.75rem] after:absolute after:h-[1px] after:content-[''] after:w-[110px] before:block">
        OR
      </p>
    </div>
  );
}

export function GetApp() {
  return (
    <>
      <h1 className="py-6 text-center">Get the app</h1>

      <div className="flex justify-center gap-4">
        <img src={GetIos} alt="Get Ios App" className="h-[40px]" />
        <img src={GetAndroid} alt="Get Android App" className="h-[40px]" />
      </div>
    </>
  );
}

interface SignInUpProps {
  to: string;
  text: string;
}

export function SignInUp({
  children,
  text,
  to,
}: PropsWithChildren<SignInUpProps>) {
  return (
    <div className="w-[350px] border mt-3">
      <h1 className="text-center py-4 text-sm">
        {children}{" "}
        <Link to={to} className="text-sky-500 font-bold">
          {text}
        </Link>
      </h1>
    </div>
  );
}
