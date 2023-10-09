import { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  isAuth: boolean;
}

export default function ProtectedRoute({
  children,
  isAuth,
}: PropsWithChildren<Props>) {
  if (!isAuth) return <Navigate to="/login" />;

  return children ? children : <Outlet />;
}
