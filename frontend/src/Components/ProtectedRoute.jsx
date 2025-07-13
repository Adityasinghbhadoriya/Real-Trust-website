// src/Components/ProtectedRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";


// Admin Protected Route
export const AdminProtectedRoute = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("admin"));
  return admin && admin.token ? children : <Navigate to="/admin/login" />;
};


export default AdminProtectedRoute;
