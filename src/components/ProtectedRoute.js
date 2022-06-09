import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import useIsAuthenticated from "../utils/useIsAuthenticated";

function ProtectedRoute({ children }) {
  // const isAuthenticated = useIsAuthenticated();
  const { user } = useContext(AuthContext);
  // console.log("isAuthenticated", isAuthenticated);

  return <>{user ? children : <Navigate to="/login" />}</>;
}

export default ProtectedRoute;
