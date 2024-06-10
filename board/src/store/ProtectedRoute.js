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

  if (!isAllowed) {
    alert("로그인이 필요한 페이지입니다.");
  }

  return isAllowed ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoute;
