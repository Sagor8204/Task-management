import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  if (user.email) {
    return children;
  }

  return <Navigate to={`/login`} replace />;
};

export default PrivateRoute;
