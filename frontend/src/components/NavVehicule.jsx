import React from "react";
import { Link } from "react-router-dom";
import VehiculeImage from "../assets/car.png";
import "./NavCard.css";

function NavVehicule() {
  return (
    <Link className="nav_container" to="/admin/car">
      <img className="nav_img" src={VehiculeImage} alt="Borne" />
      <p className="nav_text"> Véhicules</p>
    </Link>
  );
}

export default NavVehicule;
