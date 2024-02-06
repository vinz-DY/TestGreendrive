import { useState } from "react";
import { useNavigate } from "react-router-dom";
import connexion from "../services/connexion";
import HeaderInscription from "../components/HeaderInscription";
import "../components/Inscription.css";
import "react-toastify/dist/ReactToastify.css";

const carType = {
  licensePlate: "",
  brand: "",
  model: "",
  image: "",
  connectic_id: "",
};

function InscriptionCar() {
  const [car, setcar] = useState(carType);
  const [inscriptionSuccess, setInscriptionSuccess] = useState(false);
  const [inscriptionMessage, setInscriptionMessage] = useState("");
  const navigate = useNavigate();

  const handlecar = (event) => {
    const { name, files, value } = event.target;

    if (name === "image" && files && files.length > 0) {
      setcar((previousState) => ({
        ...previousState,
        [name]: files[0],
      }));
    } else {
      setcar((previousState) => ({
        ...previousState,
        [name]: value,
      }));
    }
  };

  const postcar = async (event) => {
    event.preventDefault();

    const form = new FormData();
    form.append("licensePlate", car.licensePlate);
    form.append("brand", car.brand);
    form.append("model", car.model);
    form.append("image", car.image);
    form.append("connectic_id", car.connectic_id);

    try {
      await connexion.post("/cars", form, {
        headers: { "content-Type": "multipart/formdata" },
      });
      setInscriptionSuccess(true);
      setInscriptionMessage("Inscription réussie ! Félicitations !");
      setTimeout(() => {
        navigate("/");
      }, 2000);
      setcar(carType);
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
          <HeaderInscription />
          <form onSubmit={postcar}>
            <label className="inscriptionLabel" aria-label="licensePlate">
              <input
                className="inscriptionInput"
                type="text"
                name="licensePlate"
                placeholder="Immatriculation"
                required
                value={car.licensePlate}
                onChange={handlecar}
              />
            </label>
            <label className="inscriptionLabel" aria-label="brand">
              <input
                className="inscriptionInput"
                type="text"
                name="brand"
                placeholder="Marque"
                required
                value={car.brand}
                onChange={handlecar}
              />
            </label>
            <label className="inscriptionLabel" aria-label="model">
              <input
                className="inscriptionInput"
                type="text"
                name="model"
                placeholder="Modèle"
                required
                value={car.model}
                onChange={handlecar}
              />
            </label>
            <label className="inscriptionLabel" aria-label="image">
              <input
                className="inscriptionInput"
                type="file"
                accept="image/*"
                required
                name="image"
                onChange={handlecar}
              />
            </label>
            <label className="inscriptionLabel" aria-label="connectic_id">
              <select
                className="inscriptionInput"
                required
                name="connectic_id"
                value={car.connectic_id}
                onChange={handlecar}
              >
                <option value="">Sélectionnez le type de connexion</option>
                <option value="1">EF</option>
                <option value="2">T2</option>
              </select>
            </label>
            <button type="submit" className="inscriptionButton">
              Inscription
            </button>
          </form>
        </>
      )}
    </div>
  );
}

export default InscriptionCar;
