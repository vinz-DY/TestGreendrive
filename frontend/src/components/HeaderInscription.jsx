import React from "react";
import Logogreen from "../assets/logo_greendrive.png";

function HeaderInscription() {
  return (
    <div>
      <header className="inscriptionHeader">
        <h1 className="inscriptionTitle">
          A toi, protecteur/protectrice de la planète
        </h1>
        <img src={Logogreen} className="inscriptionLogo" alt="GreenDrive" />
      </header>
    </div>
  );
}

export default HeaderInscription;
