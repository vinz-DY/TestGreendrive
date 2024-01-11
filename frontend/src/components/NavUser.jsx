import React from "react";
import UserImage from "../assets/users.png";
import "./NavCard.css";

function NavUser() {
  return (
    <div className="nav_contener">
      <img className="nav_img" src={UserImage} alt="Borne" />
      <p className="nav_text"> Utilisateurs</p>
    </div>
  );
}

export default NavUser;
