import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import connexion from "../services/connexion";
import HeaderInscription from "../components/HeaderInscription";
import "../components/Inscription.css";
import "react-toastify/dist/ReactToastify.css";

const profilType = {
  lastname: "",
  name: "",
  gender: "",
  birthdate: "",
  postCode: "",
  cityProfil: "",
  image: "",
};

function InscriptionProfile() {
  const [profil, setprofil] = useState(profilType);
  const [inscriptionSuccess, setInscriptionSuccess] = useState(false);
  const [inscriptionMessage, setInscriptionMessage] = useState("");
  const currentDate = new Date();
  const eighteenYears = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );
  const profilBirthdate = new Date(profil.birthdate);

  const showToast = (message, type) => {
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleprofil = (event) => {
    setprofil((previousState) => ({
      ...previousState,
      [event.target.name]: event.target.value,
    }));
  };

  const postprofil = async (event) => {
    event.preventDefault();

    if (profilBirthdate > eighteenYears) {
      showToast(
        "Vous devez avoir 18 ans ou plus pour vous inscrire !",
        "error"
      );
      return;
    }

    try {
      await connexion.post("/profils", { ...profil });
      setInscriptionSuccess(true);
      setInscriptionMessage("Inscription réussie ! Félicitations !");
      setprofil(profilType);
    } catch (error) {
      setInscriptionSuccess(false);
      showToast("Une ou plusieurs erreurs bloquent l'inscription !", "error");
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
            <label className="inscriptionLabel" aria-label="name">
              <input
                className="inscriptionInput"
                type="text"
                name="name"
                placeholder="Prénom"
                required
                value={profil.name}
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
                <option value="male">Homme</option>
                <option value="female">Femme</option>
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
            <label className="inscriptionLabel" aria-label="postCode">
              <input
                className="inscriptionInput"
                type="number"
                required
                name="postCode"
                placeholder="Code Postal"
                value={profil.postCode}
                onChange={handleprofil}
              />
            </label>
            <label className="inscriptionLabel" aria-label="cityProfil">
              <input
                className="inscriptionInput"
                type="text"
                required
                name="cityProfil"
                placeholder="Ville"
                value={profil.cityProfil}
                onChange={handleprofil}
              />
            </label>
            <label className="inscriptionLabel" aria-label="image">
              <input
                className="inscriptionInput"
                type="texte"
                required
                name="image"
                placeholder="image"
                value={profil.image}
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
