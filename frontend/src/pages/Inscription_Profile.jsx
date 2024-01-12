import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../services/connexion";
import HeaderInscription from "../components/HeaderInscription";
import "../components/Inscription.css";
import "react-toastify/dist/ReactToastify.css";

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

    const showToastErrorAge = () => {
      toast.error("Vous devez avoir 18 ans ou plus pour vous inscrire !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    };

    const showToastErrorMessage = () => {
      toast.error("Une ou plusieurs erreurs bloquent l'inscription !", {
        position: toast.POSITION.TOP_RIGHT,
      });
    };

    if (profilBirthdate > eighteenYears) {
      setInscriptionSuccess(false);
      showToastErrorAge(profil.birthdate);
      return;
    }

    try {
      await connexion.post("/profil", profil);
      setInscriptionSuccess(true);
      setInscriptionMessage("Inscription réussie ! Félicitations !");
      setprofil(profilType);
    } catch (error) {
      setInscriptionSuccess(false);
    }

    try {
      setInscriptionSuccess(true);
      setInscriptionMessage("Inscription réussie ! Félicitations!");
      setprofil(profilType);
    } catch (error) {
      setInscriptionSuccess(false);
      showToastErrorMessage();
    }
  };

  return (
    <div className="inscription">
      {inscriptionSuccess ? (
        <p>{inscriptionMessage}</p>
      ) : (
        <>
          <HeaderInscription />
          <form onSubmit={postprofil}>
            <label className="inscriptionLabel" aria-label="lastname">
              <input
                className="inscriptionInput"
                type="text"
                name="lastname"
                placeholder="Nom"
                required
                value={profil.lastname}
                onChange={handleprofil}
              />
            </label>
            <label className="inscriptionLabel" aria-label="firstname">
              <input
                className="inscriptionInput"
                type="text"
                name="firstname"
                placeholder="Prénom"
                required
                value={profil.firstname}
                onChange={handleprofil}
              />
            </label>
            <label className="inscriptionLabel" aria-label="gender">
              <select
                className="inscriptionInput"
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
            <label className="inscriptionLabel" aria-label="birthdate">
              <input
                className="inscriptionInput"
                type="date"
                name="birthdate"
                required
                value={profil.birthdate}
                onChange={handleprofil}
              />
            </label>
            <label className="inscriptionLabel" aria-label="postalCode">
              <input
                className="inscriptionInput"
                type="number"
                required
                name="postalCode"
                placeholder="Code Postal"
                value={profil.postalCode}
                onChange={handleprofil}
              />
            </label>
            <label className="inscriptionLabel" aria-label="city">
              <input
                className="inscriptionInput"
                type="text"
                required
                name="city"
                placeholder="Ville"
                value={profil.city}
                onChange={handleprofil}
              />
            </label>
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

export default InscriptionProfile;
