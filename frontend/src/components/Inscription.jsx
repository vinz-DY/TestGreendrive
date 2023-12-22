import { useState } from "react";
// eslint-disable-next-line spaced-comment
/*import connexion from "../services/connexion";*/
import "./Inscription.css";

const userType = {
  lastname: "",
  firstname: "",
  gender: "",
  birthdate: null,
  email: "",
  postalCode: "",
  city: "",
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

  const currentDate = new Date();
  const eighteenYears = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const userBirthdate = new Date(user.birthdate);

  const postUser = async (event) => {
    event.preventDefault();

    if (userBirthdate > eighteenYears) {
      setInscriptionSuccess(false);
      // eslint-disable-next-line no-alert
      alert("Vous devez avoir 18 ans ou plus pour vous inscrire !");
      return;
    }

    if (user.password !== user.passwordConfirmation) {
      setInscriptionSuccess(false);
      // eslint-disable-next-line no-alert
      alert("Les mots de passe ne correspondent pas !");
      // eslint-disable-next-line no-useless-return
      return;
    }
    /*
    try {
      await connexion.post("/users", user);
      setInscriptionSuccess(true);
      setInscriptionMessage("Inscription réussie ! Félicitations !");
      setUser(userType);
    } catch (error) {
      // eslint-disable-next-line no-restricted-syntax
      console.log(error);
      setInscriptionSuccess(false);
    }
    */

    try {
      setInscriptionSuccess(true);
      setInscriptionMessage("Inscription réussie ! Félicitations!");
      setUser(userType);
    } catch (error) {
      setInscriptionSuccess(false);
      // eslint-disable-next-line no-alert
      alert("Il y a eu une ou plusieurs erreurs pendant l'inscription !");
      console.error(error);
    }
  };

  return (
    <div>
      {inscriptionSuccess ? (
        <p>{inscriptionMessage}</p>
      ) : (
        <>
          <h1>Administration d'un user</h1>
          <form onSubmit={postUser}>
            Ajout d'un user
            <label>
              Nom
              <input
                type="text"
                name="lastname"
                required
                value={user.lastname}
                onChange={handleUser}
              />
            </label>
            <label>
              Prénom
              <input
                type="text"
                name="firstname"
                required
                value={user.firstname}
                onChange={handleUser}
              />
            </label>
            <label>
              Genre
              <select
                required
                name="gender"
                value={user.gender}
                onChange={handleUser}
              >
                <option value="">Vous êtes</option>
                <option value="homme">Homme</option>
                <option value="femme">Femme</option>
                <option value="non-binaire">Non-Binaire</option>
                <option value="autre">Autre</option>
              </select>
            </label>
            <label>
              Date de naissance
              <input
                type="date"
                name="birthdate"
                required
                value={user.birthdate}
                onChange={handleUser}
              />
            </label>
            <label>
              E-Mail
              <input
                type="text"
                name="email"
                required
                value={user.email}
                onChange={handleUser}
              />
            </label>
            <label>
              Code Postal
              <input
                type="number"
                required
                name="postalCode"
                value={user.postalCode}
                onChange={handleUser}
              />
            </label>
            <label>
              Ville
              <input
                type="text"
                required
                name="city"
                value={user.city}
                onChange={handleUser}
              />
            </label>
            <label>
              Mot de passe
              <input
                type={showPassword ? "text" : "password"}
                required
                name="password"
                value={user.password}
                onChange={handleUser}
              />
            </label>
            <label>
              Confirmation du mot de passe
              <input
                type={showPassword ? "text" : "password"}
                required
                name="passwordConfirmation"
                onChange={handleUser}
              />
            </label>
            <button type="button" onClick={handleTogglePassword}>
              {showPassword
                ? "Masquer le mot de passe"
                : "Afficher le mot de passe"}
            </button>
            <button type="submit">Inscription</button>
          </form>
        </>
      )}
    </div>
  );
}

export default Inscription;
