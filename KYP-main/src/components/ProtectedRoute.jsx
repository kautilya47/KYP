import React from "react";
import { Route, Routes, Navigate, useLocation, Outlet } from "react-router-dom";

function ProtectedRoute({ authenticated }) {
  return authenticated ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoute;
