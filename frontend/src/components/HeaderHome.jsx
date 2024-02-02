import { Link } from "react-router-dom";
import React from "react";
import connexion from "../services/connexion";
import Car1 from "../assets/Car1.jpg";
import "./headerHome.css";

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

function HeaderHome() {
  return (
    <div>
      <div className="headerContainer">
        <div className="leftContainer">
          <div className="slogContainer">
            <p className="Pindex">
              Avec <span className="greenTitle">GreenDrive</span>
            </p>
            <p className="Pindex">Partez en voyage avec votre véhicule</p>
            <p className="Pindex">en toute serenité</p>
          </div>
          <div className="buttonsContainer">
            <Link to="/inscription">
              <button type="button" className="button1">
                S'inscrire
              </button>
            </Link>
            <div className="buttonsSignContainer">
              <a href="/">
                <button
                  onClick={handleLogout}
                  type="button"
                  className="buttonDeco"
                >
                  déconnexion
                </button>
              </a>
              <Link to="/login">
                <button type="button" className="buttonCo">
                  connexion
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div>
          <img className="headerCar" src={Car1} alt="car header" />
        </div>
      </div>
    </div>
  );
}

export default HeaderHome;
