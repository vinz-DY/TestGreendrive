import React from "react";
import MenuMap from "../assets/menuMap.jpg";
import "./menuCard.css";

function MenuCard() {
  return (
    <div className="menuContainer">
      <img className="menuImage" src={MenuMap} alt="Menu Map" />
      <div className="cardTextContent">
        <h2 className="menuMapTitle">Trouvez</h2>
        <div className="cardTextDesc">
          <p className="menuMapDesc">la borne la plus proche</p>
          <p className="menuMapDesc">reservez, chargez, repartez</p>
        </div>
      </div>
    </div>
  );
}

export default MenuCard;
