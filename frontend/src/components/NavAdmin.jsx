import React from "react";
import NavBorne from "./NavBorne";
import NavUser from "./NavUser";
import NavVehicule from "./NavVehicule";
import "./NavAdmin.css";
import AdminImage from "../assets/yavuz.png";

function NavAdmin() {
  return (
    <div className="navAdmin_container">
      <div>
        <img src={AdminImage} alt="photo_admin" />
        <h3>Admin Mr Kutuk</h3>
      </div>
      <div>
        <NavBorne />
        <NavUser />
        <NavVehicule />
      </div>
    </div>
  );
}

export default NavAdmin;
