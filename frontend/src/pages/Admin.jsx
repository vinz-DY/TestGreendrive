import React from "react";
import NavBorne from "../components/NavBorne";
import NavUtilisateur from "../components/NavUser";
import NavVehicule from "../components/NavVehicule";

function Admin() {
  return (
    <div>
      <NavBorne />
      <NavUtilisateur />
      <NavVehicule />
    </div>
  );
}

export default Admin;
