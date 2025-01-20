import { Navigate } from "react-router-dom";
import Loader from "../components/shared/Loader/Loader";
import useAuth from "../hooks/useAuth";
import useUser from "../hooks/useUser";

const AdminRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const info = useUser();

  if (loading || info?.isLoading) return <Loader />;

  if (user && info?.data?.role === "Admin") return children;

  return <Navigate to={"/dashboard"}></Navigate>;
};

export default AdminRoute;
