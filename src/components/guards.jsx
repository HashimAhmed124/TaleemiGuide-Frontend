import React from "react";
import { Navigate } from "react-router-dom";
import { can, getAuthContext } from "../utils/rbac";

export function RequireAuth({ children }) {
  const { token } = getAuthContext();
  if (!token) return <Navigate to="/" replace />;
  return children;
}

export function RequireRole({ allowed = [], children, fallback = "/userdashboard" }) {
  const { role } = getAuthContext();
  if (!allowed.includes(role)) return <Navigate to={fallback} replace />;
  return children;
}

export function RequirePermission({ permission, children, fallback = "/super-admin" }) {
  if (!permission) return children;
  if (!can(permission)) return <Navigate to={fallback} replace />;
  return children;
}
