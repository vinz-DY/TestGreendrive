import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import connexion from "../services/connexion";
import HeaderInscription from "./HeaderInscription";
import "./Inscription.css";
import "react-toastify/dist/ReactToastify.css";

function TerminalIdForm() {
  const [terminal, setTerminal] = useState({
    city: "",
    adresseStation: "",
    // xlongitude: "",
    // xlatitude: "",
    acces_recharge: "",
    access: "",
    localisation: "",
    image: null,
    connectic_id: null,
    state_id: null,
  });

  const { id } = useParams();

  const handleTerminalChange = (event) => {
    const { name, value } = event.target;
    setTerminal((prevTerminal) => ({
      ...prevTerminal,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    const { name, files } = event.target;
    setTerminal((prevTerminal) => ({
      ...prevTerminal,
      [name]: files[0],
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      console.info("Données du terminal soumises :", terminal);
    } catch (error) {
      console.error("Erreur lors de la soumission du terminal :", error);
    }
  };

  const handleLoadData = async () => {
    try {
      const response = await connexion.get(`/terminals/${id}`);
      setTerminal(response.data);
      toast.success("Données du terminal chargées avec succès !");
    } catch (error) {
      console.error(
        "Erreur lors du chargement des données du terminal :",
        error
      );
      toast.error("Erreur lors du chargement des données du terminal");
    }
  };

  return (
    <div className="inscription">
      <HeaderInscription />
      <form onSubmit={handleSubmit}>
        <label className="inscriptionLabel" aria-label="city">
          Ville:
          <input
            className="inscriptionInput"
            type="text"
            name="city"
            placeholder="Ville"
            required
            value={terminal.city}
            onChange={handleTerminalChange}
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
            value={terminal.adresseStation}
            onChange={handleTerminalChange}
          />
        </label>
        {/* <label className="inscriptionLabel" aria-label="xlongitude">
          Longitude:
          <input
            className="inscriptionInput"
            type="text"
            name="xlongitude"
            placeholder="Longitude"
            required
            value={terminal.xlongitude}
            onChange={handleTerminalChange}
          />
        </label> */}
        {/* <label className="inscriptionLabel" aria-label="xlatitude">
          Latitude:
          <input
            className="inscriptionInput"
            type="text"
            name="xlatitude"
            placeholder="Latitude"
            required
            value={terminal.xlatitude}
            onChange={handleTerminalChange}
          />
        </label> */}
        <label className="inscriptionLabel" aria-label="acces_recharge">
          Accès recharge:
          <input
            className="inscriptionInput"
            type="text"
            name="acces_recharge"
            placeholder="Accès recharge"
            required
            value={terminal.acces_recharge}
            onChange={handleTerminalChange}
          />
        </label>
        <label className="inscriptionLabel" aria-label="acces">
          Accès:
          <input
            className="inscriptionInput"
            type="text"
            name="acces"
            placeholder="Accès"
            required
            value={terminal.access}
            onChange={handleTerminalChange}
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
            value={terminal.localisation}
            onChange={handleTerminalChange}
          />
        </label>
        <label className="inscriptionLabel" aria-label="image">
          Image:
          <input
            className="inscriptionInput"
            type="file"
            accept="image/*"
            required
            name="image"
            onChange={handleFileChange}
          />
        </label>
        <button type="submit" className="inscriptionButton">
          Modifier
        </button>
      </form>
      <button type="button" onClick={handleLoadData}>
        Charger
      </button>

      <ToastContainer />
    </div>
  );
}

export default TerminalIdForm;
