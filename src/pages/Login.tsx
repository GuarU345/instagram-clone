import LoginPanel from "../components/LoginPanel";
import PhoneScreenShot from "../components/PhoneScreenShot";

export default function Login() {
  return (
    <div className="h-screen">
      <div className="grid place-content-center h-full">
        <article className="flex gap-4">
          <PhoneScreenShot />
          <LoginPanel />
        </article>
      </div>
    </div>
  );
}
