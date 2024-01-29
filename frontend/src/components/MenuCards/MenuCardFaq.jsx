import React from "react";
import MenuFaq from "../../assets/menuFaq.jpg";
import "../menuCard.css";

function MenuCardFaq() {
  return (
    <div className="menuContainer">
      <img className="menuImage" src={MenuFaq} alt="Menu Faq" />
      <div className="cardTextContent">
        <h2 className="menuMapTitle">Informations</h2>
      </div>
    </div>
  );
}

export default MenuCardFaq;
