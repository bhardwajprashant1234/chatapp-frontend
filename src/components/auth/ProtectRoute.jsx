import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const ProtectRoute = ({ children, user, redirect = "/login" }) => {
  // Check if user is authenticated based on your authentication logic
  const isAuthenticated = !!user; // Example: Assuming user is authenticated if truthy

  if (!isAuthenticated) {
    // Redirect to specified route if user is not authenticated
    return <Navigate to={redirect} />;
  }

  return children ? children : <Outlet />;
};

export default ProtectRoute;
