import React from "react";
import { Link } from "react-router-dom";
import BorneImage from "../assets/borne-1.png";
import "./NavCard.css";

function NavBorne() {
  return (
    <Link className="nav_container" to="/admin/terminal">
      <img className="nav_img" src={BorneImage} alt="Borne" />
      <p className="nav_text"> Toutes les Bornes</p>
    </Link>
  );
}

export default NavBorne;
