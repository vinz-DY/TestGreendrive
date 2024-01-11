import React from "react";
import { Link } from "react-router-dom";
import BorneImage from "../assets/borne-1.png";
import "./NavCard.css";

function NavBorne() {
  return (
    <Link to="/admin/terminal">
      <div className="nav_contener">
        <img className="nav_img" src={BorneImage} alt="Borne" />
        <p className="nav_text"> Toutes les Bornes</p>
      </div>
    </Link>
  );
}

export default NavBorne;
