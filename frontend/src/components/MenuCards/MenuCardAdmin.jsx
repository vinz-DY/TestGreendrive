import React from "react";
import MenuCardAd from "../../assets/menuCardAdmin.jpg";
import "../menuCard.css";

function MenuCardAdmin() {
  return (
    <div className="menuContainer">
      <img className="menuImage" src={MenuCardAd} alt="Menu Map" />
      <div className="cardTextContent">
        <h2 className="menuMapTitle">Administrateur</h2>
      </div>
    </div>
  );
}

export default MenuCardAdmin;
