import React from "react";
import VehiculeImage from "../assets/car.png";

function NavVehicule() {
  return (
    <div>
      <img src={VehiculeImage} alt="Borne" />
      <p> Véhicules</p>
    </div>
  );
}

export default NavVehicule;
