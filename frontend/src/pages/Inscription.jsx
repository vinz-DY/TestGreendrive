import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";
import HeaderInscription from "../components/HeaderInscription";
import "../components/Inscription.css";
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
  const navigate = useNavigate();

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

    const showToastPasswordMessage = () => {
      toast.error("Le mot de passe doit faire 8 caractères minimum !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    };

    if (user.password !== user.passwordConfirmation) {
      showToastErrorMessage();
      return;
    }

    if (user.password.length < 8) {
      showToastPasswordMessage();
      return;
    }

    try {
      await connexion.post("/users", user);
      setInscriptionSuccess(true);
      setInscriptionMessage(
        "Inscription réussie ! Passons à l'étape suivante!"
      );
      setTimeout(() => {
        navigate("/login");
      }, 3000);
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
          <div className="HeaderInscritionCss">
            <HeaderInscription />
          </div>
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
