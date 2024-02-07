import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";
import HeaderInscription from "./HeaderInscription";
import "./Inscription.css";
import "react-toastify/dist/ReactToastify.css";

function Profil() {
  const [profil, setprofil] = useState({
    city: "",
    adresseStation: "",
    acces_recharge: "",
    access: "",
    localisation: "",
  });

  const { id } = useParams();

  const handleprofilChange = (e) => {
    setprofil((prevprofil) => ({
      ...prevprofil,
      [e.target.name]: e.target.value,
    }));
  };

  const putprofil = async (event) => {
    event.preventDefault();
    try {
      await connexion.put(`/profils/${id}`, profil);
      setprofil({
        lastname: "",
        name: "",
        gender: "",
        postCode: "",
        localisation: "",
        cityProfil: "",
        image: "",
      });

      console.info("Données du profil soumises :", profil);
      toast.success("Profil modifié avec succès !");
    } catch (error) {
      console.error("Erreur lors de la soumission du profil :", error);
      toast.error("Erreur lors de la modification du profil");
    }
  };

  const deleteprofil = async (event) => {
    event.preventDefault();
    try {
      await connexion.delete(`/profils/${id}`, profil);
      setprofil({
        lastname: "",
        name: "",
        gender: "",
        postCode: "",
        localisation: "",
        cityProfil: "",
        image: "",
      });

      console.info("Données du profil soumises :", profil);
      toast.success("Profil effacé !");
    } catch (error) {
      console.error("Erreur lors de la soumission du profil :", error);
      toast.error("Erreur lors de l 'effacement du profil");
    }
  };

  const handleLoadData = async () => {
    try {
      const response = await connexion.get(`/profils/${id}`);
      setprofil(response.data);
      toast.success("Données du profil chargées avec succès !");
    } catch (error) {
      console.error("Erreur lors du chargement des données du profil :", error);
      toast.error("Erreur lors du chargement des données du profil");
    }
  };

  return (
    <div className="inscription">
      <HeaderInscription />
      <form onSubmit={putprofil}>
        <label className="inscriptionLabel" aria-label="city">
          Ville:
          <input
            className="inscriptionInput"
            type="text"
            name="city"
            placeholder="Ville"
            required
            value={profil.city}
            onChange={handleprofilChange}
          />
        </label>
        <label className="inscriptionLabel" aria-label="adresseStation">
          Adresse de la station:
          <input
            className="inscriptionInput"
            type="text"
            name="adresseStation"
            placeholder="Adresse de la station"
            required
            value={profil.adresseStation}
            onChange={handleprofilChange}
          />
        </label>
        <label className="inscriptionLabel" aria-label="acces_recharge">
          Accès recharge:
          <input
            className="inscriptionInput"
            type="text"
            name="acces_recharge"
            placeholder="Accès recharge"
            required
            value={profil.acces_recharge}
            onChange={handleprofilChange}
          />
        </label>
        <label className="inscriptionLabel" aria-label="access">
          Accès:
          <input
            className="inscriptionInput"
            type="text"
            name="access"
            placeholder="Accès"
            required
            value={profil.access}
            onChange={handleprofilChange}
          />
        </label>
        <label className="inscriptionLabel" aria-label="localisation">
          Localisation:
          <input
            className="inscriptionInput"
            type="text"
            name="localisation"
            placeholder="Localisation"
            required
            value={profil.localisation}
            onChange={handleprofilChange}
          />
        </label>
        <button
          type="button"
          className="inscriptionButton"
          onClick={handleLoadData}
        >
          Charger
        </button>

        <button type="submit" className="inscriptionButton">
          Modifier
        </button>

        <button
          type="submit"
          onClick={deleteprofil}
          className="inscriptionButton"
        >
          Supprimer
        </button>
      </form>

      <ToastContainer />
    </div>
  );
}

export default Profil;
