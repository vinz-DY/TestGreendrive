import React from "react";
import NavBorne from "./NavBorne";
import NavUser from "./NavUser";
import NavVehicule from "./NavVehicule";
import "./NavCard.css";

function NavAdmin() {
  return (
    <div>
      <NavBorne />
      <NavUser />
      <NavVehicule />
    </div>
  );
}

export default NavAdmin;
