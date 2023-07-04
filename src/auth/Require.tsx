import { useAuth } from "../state/Auth/Auth";
import { Navigate } from "react-router-dom";

export type RequireType = {
  children: React.ReactNode;
};

const Require = ({ children }: RequireType) => {
  const auth = useAuth();

  return <>{!auth?.user ? <Navigate to='/' /> : children}</>;
};

export default Require;
