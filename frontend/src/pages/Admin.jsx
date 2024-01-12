import React from "react";
import { Outlet } from "react-router-dom";
import NavAdmin from "../components/NavAdmin";
import "./Admin.css";

function Admin() {
  return (
    <div className="Admin_container">
      <NavAdmin />
      <Outlet />
    </div>
  );
}

export default Admin;
