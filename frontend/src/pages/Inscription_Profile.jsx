import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  const currentDate = new Date();
  const eighteenYears = new Date(
    currentDate.getFullYear() - 18,
    currentDate.getMonth(),
    currentDate.getDate()
  );

  const showToast = (message, type) => {
    toast[type](message, {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  const handleprofil = (event) => {
    const { name, files, value } = event.target;

    if (name === "image" && files && files.length > 0) {
      setprofil((previousState) => ({
        ...previousState,
        [name]: files[0],
      }));
    } else {
      setprofil((previousState) => ({
        ...previousState,
        [name]: value,
      }));
    }
  };

  const postprofil = async (event) => {
    event.preventDefault();

    const profilBirthdate = new Date(profil.birthdate);

    if (profilBirthdate > eighteenYears) {
      showToast(
        "Vous devez avoir 18 ans ou plus pour vous inscrire !",
        "error"
      );
      return;
    }

    const form = new FormData();
    form.append("lastname", profil.lastname);
    form.append("name", profil.name);
    form.append("gender", profil.gender);
    form.append("birthdate", profil.birthdate);
    form.append("postCode", profil.postCode);
    form.append("cityProfil", profil.cityProfil);
    form.append("image", profil.image);

    try {
      await connexion.post("/profils", form, {
        headers: { "content-Type": "multipart/formdata" },
      });
      setInscriptionSuccess(true);
      setInscriptionMessage("Inscription réussie ! Félicitations !");
      setTimeout(() => {
        navigate("/inscriptionvoiture");
      }, 3000);
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
                type="file"
                accept="image/*"
                required
                name="image"
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
