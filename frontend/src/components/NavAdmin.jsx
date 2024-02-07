import React from "react";
import { Link } from "react-router-dom";
import connexion from "../services/connexion";
import NavBorne from "./NavBorne";
import NavUser from "./NavUser";
import NavVehicule from "./NavVehicule";
import AdminImage from "../assets/yavuz.png";
import "./NavAdmin.css";

const handleLogout = async () => {
  try {
    // Appeler la route de déconnexion côté serveur
    await connexion.post("/logout");

    // Rediriger ou mettre à jour l'état de l'application après la déconnexion
    // (facultatif, en fonction de votre logique d'application)
  } catch (error) {
    console.error("Erreur lors de la déconnexion :", error);
  }
};

function NavAdmin() {
  return (
    <div className="navAdmin_container">
      <div>
        <img src={AdminImage} alt="photo_admin" />
        <h3 className="adminH3">Admin Mr Kutuk</h3>
      </div>
      <div className="CardAdminCtn">
        <NavBorne />
        <NavUser />
        <NavVehicule />
        <Link to="/">
          <button
            onClick={handleLogout}
            type="button"
            className="buttonDecoAdmin"
          >
            Déconnexion
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NavAdmin;
