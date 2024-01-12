import React from "react";
import NavAdmin from "../components/NavAdmin";
import Car1 from "../assets/Car1.jpg";
import "./Admin.css";

function Admin() {
  return (
    <div className="Admin_container">
      <div>
        <NavAdmin />
      </div>
      <div className="Admin_img">
        <img src={Car1} alt="logo" />
      </div>
    </div>
  );
}

export default Admin;
