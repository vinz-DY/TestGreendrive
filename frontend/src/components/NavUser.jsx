import React from "react";
import UserImage from "../assets/users.png";

function NavUser() {
  return (
    <div>
      <img src={UserImage} alt="Borne" />
      <p> Utilisateurs</p>
    </div>
  );
}

export default NavUser;
