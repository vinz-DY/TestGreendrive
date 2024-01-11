import React from "react";
import VehiculeImage from "../assets/car.png";
import "./NavCard.css";

function NavVehicule() {
  return (
    <div className="nav_contener">
      <img className="nav_img" src={VehiculeImage} alt="Borne" />
      <p className="nav_text"> Véhicules</p>
    </div>
  );
}

export default NavVehicule;
