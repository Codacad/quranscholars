import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMeQuery } from "@/services/api/user/userAuthApis.js";
const ProtectedRoute = ({ children }) => {
  const { user } = useSelector((state) => state.user);
  const { isLoading } = useMeQuery();

  if (isLoading) {
    return (
      <div>
        Loading account...
      </div>);

  }

  if (!user) {
    return <Navigate to={"/login"} replace />;
  }

  return children;
};

export default ProtectedRoute;
