import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({ element }) => {
  const { auth } = useSelector((state) => state.auth);
  console.log("auth", auth)
  if (!auth) {
    return <Navigate to="/login" />
  }
  return element;
};

export default ProtectedRoutes;
