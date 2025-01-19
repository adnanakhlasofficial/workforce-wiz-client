import { Navigate } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const HrRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const { data } = useUser();

  if (loading) return <Loader />;

  if (user && data?.role === "HR") return children;

  return <Navigate to={"/dashboard"}></Navigate>;
};

export default HrRoute;
