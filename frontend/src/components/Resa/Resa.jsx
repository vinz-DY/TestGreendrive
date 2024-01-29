import { useState } from "react";
import connexion from "../../services/connexion";
import "./Resa.css";

const start = {
  startTime: "",
  car_id: null,
  terminal_id: null,
};

function Resa() {
  const timeSlots = [
    "2024-02-02 09:00",
    "2024-02-02 09:30",
    "2024-02-02 10:00",
    "2024-02-02 10:30",
    "2024-02-02 11:00",
    "2024-02-02 11:30",
  ];
  const [selectedTime, setSelectedTime] = useState(start);

  const handleTimeClick = (clickedTime) => {
    const isAvailable = timeSlots.includes(clickedTime);

    if (isAvailable) {
      setSelectedTime({ ...selectedTime, startTime: clickedTime });
    } else {
      console.info(`La tranche horaire ${clickedTime} n'est pas disponible.`);
    }
  };

  const sendReservationToDatabase = async () => {
    try {
      const response = await connexion.post("/reservations", {
        ...selectedTime,
        car_id: 1,
        terminal_id: 1,
        // D'autres données de réservation si nécessaire
      });

      if (response.status === 200) {
        console.info("Réservation enregistrée avec succès!");
        // Vous pouvez effectuer d'autres actions ici
        setSelectedTime(start); // Réinitialisez l'état après la réservation réussie
      } else {
        console.error("Erreur lors de la réservation");
      }
    } catch (error) {
      console.error("Erreur lors de la requête vers l'API:", error);
    }
  };

  // useEffect(() => {
  //   // Mettez à jour les classes des boutons après que selectedTime a changé
  //   const buttons = document.querySelectorAll(".time-slot");
  //   buttons.forEach((button) => {
  //     const time = button.getAttribute("data-time");
  //     const isAvailable = timeSlots.includes(time);

  //     if (selectedTime.startTime === time) {
  //       button.classList.add("selected");
  //     } else if (isAvailable) {
  //       button.classList.remove("selected");
  //     }
  //   });
  // }, [selectedTime, timeSlots]);

  return (
    <div>
      <h1>Système de Réservation</h1>
      <div>
        <select
          id="timeDropdown"
          onChange={(e) => handleTimeClick(e.target.value)}
          value={selectedTime.startTime}
        >
          {timeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      <button type="button" onClick={sendReservationToDatabase}>
        Confirmer la réservation
      </button>
    </div>
  );
}

export default Resa;
