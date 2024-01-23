import React from "react";
import Logo from "../assets/Logo GreenSave.png";

function HeaderInscription() {
  return (
    <div>
      <header className="inscriptionHeader">
        <h1 className="inscriptionTitle">
          A toi, protecteur/protectrice de la planète
        </h1>
        <img src={Logo} className="inscriptionLogo" alt="GreenDrive" />
      </header>
    </div>
  );
}

export default HeaderInscription;
