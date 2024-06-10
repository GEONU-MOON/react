import React from "react";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const location = useLocation();

  const isAllowed =
    isLoggedIn ||
    location.pathname === "/" ||
    location.pathname === "/register";

  return isAllowed ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
