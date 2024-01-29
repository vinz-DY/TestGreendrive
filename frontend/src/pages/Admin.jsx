import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import AuthProvider from "../context/AuthContext";
import NavAdmin from "../components/NavAdmin";
import "./Admin.css";

function Admin() {
  const { connected } = useContext(AuthProvider);
  if (connected.role !== 1) {
    return <Navigate to="/admin" replace />;
  }
  return (
    <div className="Admin_container">
      <NavAdmin />
      <Outlet />
    </div>
  );
}

export default Admin;
