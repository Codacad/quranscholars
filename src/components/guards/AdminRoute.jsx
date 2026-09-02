import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMeQuery } from "@/services/api/user/userAuthApis.js";

const AdminRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const { isLoading } = useMeQuery();
  const isAdmin = String(user?.role || "").trim().toLowerCase() === "admin";

  if (isLoading) {
    return (
      <div>
        Loading account...
      </div>);

  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (!isAdmin) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AdminRoute;
