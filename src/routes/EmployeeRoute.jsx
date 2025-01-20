import { Navigate } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const EmployeeRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const info = useUser();

  if (loading || info?.isLoading) return <Loader />;

  if (user && info?.data?.role === "Employee") return children;

  return <Navigate to={"/dashboard"}></Navigate>;
};

export default EmployeeRoute;
