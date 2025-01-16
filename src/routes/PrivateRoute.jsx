import { Navigate, useLocation } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { pathname } = useLocation();

  if (loading) return <Loader />;

  if (user) return children;

  return <Navigate to={"sign-in"} state={pathname} />;
};

export default PrivateRoute;
