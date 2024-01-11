import React from "react";
import { Link } from "react-router-dom";
import VehiculeImage from "../assets/car.png";
import "./NavCard.css";

function NavVehicule() {
  return (
    <Link to="/admin/car">
      <div className="nav_contener">
        <img className="nav_img" src={VehiculeImage} alt="Borne" />
        <p className="nav_text"> Véhicules</p>
      </div>
    </Link>
  );
}

export default NavVehicule;
