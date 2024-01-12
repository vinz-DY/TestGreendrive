import { useState } from "react";
import "./Inscription.css";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../services/connexion";
import Logo from "../assets/Logo GreenSave.png";
import "react-toastify/dist/ReactToastify.css";

const userType = {
  mail: "",
  password: "",
  passwordConfirmation: "",
};

function Inscription() {
  const [user, setUser] = useState(userType);
  const [inscriptionSuccess, setInscriptionSuccess] = useState(false);
  const [inscriptionMessage, setInscriptionMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleUser = (event) => {
    setUser((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const postUser = async (event) => {
    event.preventDefault();

    const showToastErrorMessage = () => {
      toast.error("Les mots de passe ne correspondent pas !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    };

    if (user.password !== user.passwordConfirmation) {
      setInscriptionSuccess(false);
      showToastErrorMessage(user.passwordConfirmation);
      return;
    }

    try {
      await connexion.post("/user", user);
      setInscriptionSuccess(true);
      setInscriptionMessage(
        "Inscription réussie ! Passons à l'étape suivante !"
      );
      setUser(userType);
    } catch (error) {
      setInscriptionSuccess(false);
    }
  };

  return (
    <div className="inscription">
      {inscriptionSuccess ? (
        <p>{inscriptionMessage}</p>
      ) : (
        <>
          <header className="inscriptionHeader">
            <h1 className="inscriptionTitle">
              A toi, protecteur/protectrice de la planète
            </h1>
            <img src={Logo} className="inscriptionLogo" alt="GreenDrive" />
          </header>
          <form onSubmit={postUser}>
            <label className="inscriptionLabel" aria-label="email">
              <input
                className="inscriptionInput"
                type="email"
                name="mail"
                placeholder="Adresse Mail"
                required
                value={user.mail}
                onChange={handleUser}
              />
            </label>
            <label className="inscriptionLabel" aria-label="password">
              <input
                className="inscriptionInput"
                type={showPassword ? "text" : "password"}
                required
                name="password"
                placeholder="Mot de passe"
                value={user.password}
                onChange={handleUser}
              />
            </label>
            <label className="inscriptionLabel" aria-label="password">
              <input
                className="inscriptionInput"
                type={showPassword ? "text" : "password"}
                required
                name="passwordConfirmation"
                placeholder="Confirmation du mot de passe"
                onChange={handleUser}
                value={user.passwordConfirmation}
              />
            </label>
            <p className="inscriptionText">
              Le mot de passe doit faire minimum 8 caractères.
            </p>
            <button
              type="button"
              className="inscriptionButton"
              onClick={handleTogglePassword}
            >
              {showPassword
                ? "Masquer le mot de passe"
                : "Afficher le mot de passe"}
            </button>
            <button type="submit" className="inscriptionButton">
              Inscription
            </button>
          </form>
        </>
      )}
      <ToastContainer />
    </div>
  );
}

export default Inscription;
