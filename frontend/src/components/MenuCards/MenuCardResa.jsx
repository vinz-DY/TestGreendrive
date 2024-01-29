import React from "react";
import MenuResa from "../../assets/menuReservation.jpg";
import "../menuCard.css";

function MenuCardResa() {
  return (
    <div className="menuContainer">
      <img className="menuImage" src={MenuResa} alt="Menu Réservation" />
      <div className="cardTextContent">
        <h2 className="menuMapTitle">Reservations</h2>
      </div>
    </div>
  );
}

export default MenuCardResa;
