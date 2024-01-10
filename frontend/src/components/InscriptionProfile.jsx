/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState } from "react";
// eslint-disable-next-line spaced-comment
import connexion from "../services/connexion";
import "./Inscription.css";

const profilType = {
  lastname: "",
  firstname: "",
  gender: "",
  birthdate: null,
  postalCode: "",
  city: "",
};

function InscriptionProfile() {
  const [profil, setprofil] = useState(profilType);
  const [inscriptionSuccess, setInscriptionSuccess] = useState(false);
  const [inscriptionMessage, setInscriptionMessage] = useState("");

  const handleprofil = (event) => {
    setprofil((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const currentDate = new Date();
  const eighteenYears = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const profilBirthdate = new Date(profil.birthdate);

  const postprofil = async (event) => {
    event.preventDefault();

    if (profilBirthdate > eighteenYears) {
      setInscriptionSuccess(false);
      // eslint-disable-next-line no-alert
      alert("Vous devez avoir 18 ans ou plus pour vous inscrire !");
      return;
    }

    try {
      await connexion.post("/profil", profil);
      setInscriptionSuccess(true);
      setInscriptionMessage("Inscription réussie ! Félicitations !");
      setprofil(profilType);
    } catch (error) {
      // eslint-disable-next-line no-restricted-syntax
      console.log(error);
      setInscriptionSuccess(false);
    }

    try {
      setInscriptionSuccess(true);
      setInscriptionMessage("Inscription réussie ! Félicitations!");
      setprofil(profilType);
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
          <h1>Inscription</h1>
          <form onSubmit={postprofil}>
            <label>
              <input
                type="text"
                name="lastname"
                placeholder="Nom"
                required
                value={profil.lastname}
                onChange={handleprofil}
              />
            </label>
            <label>
              <input
                type="text"
                name="firstname"
                placeholder="Prénom"
                required
                value={profil.firstname}
                onChange={handleprofil}
              />
            </label>
            <label>
              <select
                required
                name="gender"
                value={profil.gender}
                onChange={handleprofil}
              >
                <option value="">Vous êtes</option>
                <option value="Male">Homme</option>
                <option value="Female">Femme</option>
                <option value="Non-Binary">Non-Binaire</option>
                <option value="Other">Autre</option>
              </select>
            </label>
            <label>
              <input
                type="date"
                name="birthdate"
                required
                value={profil.birthdate}
                onChange={handleprofil}
              />
            </label>
            <label>
              <input
                type="number"
                required
                name="postalCode"
                placeholder="Code Postal"
                value={profil.postalCode}
                onChange={handleprofil}
              />
            </label>
            <label>
              <input
                type="text"
                required
                name="city"
                placeholder="Ville"
                value={profil.city}
                onChange={handleprofil}
              />
            </label>
            <button type="submit">Inscription</button>
          </form>
        </>
      )}
    </div>
  );
}

export default InscriptionProfile;
