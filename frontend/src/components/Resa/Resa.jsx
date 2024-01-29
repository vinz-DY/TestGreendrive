import { useState, useEffect } from "react";
import connexion from "../../services/connexion";
import "./Resa.css";

const start = {
  startTime: new Date(),
  car_id: null,
  terminal_id: null,
};

const formatDateTime = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}`;
};

function Resa() {
  const [selectedTime, setSelectedTime] = useState(start);
  const [selectedDate, setSelectedDate] = useState(formatDateTime(new Date()));
  const [timeOptions, setTimeOptions] = useState([]);

  const generateTimeOptions = () => {
    const selectedDateTime = new Date(selectedDate);
    const currentHour = selectedDateTime.getHours();

    const options = [];
    for (let hour = currentHour; hour < 24; hour += 1) {
      for (let minute = 0; minute < 60; minute += 30) {
        const time = new Date(selectedDateTime);
        time.setHours(hour, minute, 0, 0);

        if (time > new Date()) {
          options.push(time);
        }
      }
    }

    setTimeOptions(options);
  };

  useEffect(() => {
    generateTimeOptions();
  }, [selectedDate]);

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  const handleTimeClick = (clickedTime) => {
    setSelectedTime({ ...selectedTime, startTime: clickedTime });
  };

  const sendReservationToDatabase = async () => {
    try {
      const response = await connexion.post("/reservations", {
        ...selectedTime,
        car_id: 1,
        terminal_id: 1,
        startTime: formatDateTime(selectedTime.startTime),
      });

      if (response.status === 200) {
        console.info("Réservation enregistrée avec succès!");
        setSelectedTime(start);
        generateTimeOptions();
      } else {
        console.error("Erreur lors de la réservation");
      }
    } catch (error) {
      console.error("Erreur lors de la requête vers l'API:", error);
    }
  };

  return (
    <div>
      <h1>Système de Réservation</h1>
      <div>
        <label htmlFor="datePicker">Choisissez la date de réservation: </label>
        <input
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={handleDateChange}
        />
      </div>
      <div>
        <label htmlFor="timeDropdown">
          Choisissez l'horaire de réservation:{" "}
        </label>
        <select
          id="timeDropdown"
          onChange={(e) => handleTimeClick(new Date(e.target.value))}
          value={selectedTime.startTime.toISOString()}
        >
          {timeOptions.map((time) => (
            <option key={time.toISOString()} value={time.toISOString()}>
              {time.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
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
