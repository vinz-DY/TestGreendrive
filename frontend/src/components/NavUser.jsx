import React from "react";
import { Link } from "react-router-dom";
import UserImage from "../assets/users.png";
import "./NavCard.css";

function NavUser() {
  return (
    <Link to="/admin/user">
      <div className="nav_container">
        <img className="nav_img" src={UserImage} alt="Borne" />
        <p className="nav_text"> Utilisateurs</p>
      </div>
    </Link>
  );
}

export default NavUser;
