import React from "react";
import BorneImage from "../assets/borne-1.png";
import "./NavCard.css";

function NavBorne() {
  return (
    <div className="nav_contener">
      <img className="nav_img" src={BorneImage} alt="Borne" />
      <p className="nav_text"> Toutes les Bornes</p>
    </div>
  );
}

export default NavBorne;
