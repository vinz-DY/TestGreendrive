import React from "react";
import { Link } from "react-router-dom";
import NavBorne from "./NavBorne";
import NavUser from "./NavUser";
import NavVehicule from "./NavVehicule";
import AdminImage from "../assets/yavuz.png";
import "./NavAdmin.css";

function NavAdmin() {
  return (
    <div className="navAdmin_container">
      <div>
        <img className="adminPic" src={AdminImage} alt="photo_admin" />
        <h3>Admin Mr Kutuk</h3>
      </div>
      <div className="CardAdminCtn">
        <NavBorne />
        <NavUser />
        <NavVehicule />
        <Link to="/">
          <button type="button" className="buttonHome">
            Home
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavAdmin;
