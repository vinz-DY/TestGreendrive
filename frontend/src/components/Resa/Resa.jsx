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
  const [selectedTerminal, setSelectedTerminal] = useState(null);
  const [terminalOptions, setTerminalOptions] = useState([]);

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

  useEffect(() => {
    // Charger les options du terminal depuis votre API et mettre à jour l'état terminalOptions
    // Remplacez le chemin d'accès et le nom de la méthode par ceux correspondant à votre API
    const fetchTerminalOptions = async () => {
      try {
        const response = await connexion.get("/terminals");
        setTerminalOptions(response.data); // Assurez-vous que la structure de réponse correspond à vos besoins
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des options de terminal:",
          error
        );
      }
    };

    generateTimeOptions();
    fetchTerminalOptions();
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
    <div className="reservation-page">
      <h1 className="reservation-title">Réserver un créneau</h1>
      <div className="reservation-container">
        <label>
          <select
            className="terminal-address"
            onChange={(e) => setSelectedTerminal(e.target.value)}
            value={selectedTerminal}
          >
            <option value={null}>Borne</option>
            {terminalOptions.map((terminal) => (
              <option key={terminal.id} value={terminal.adresseStation}>
                {terminal.adresseStation}
              </option>
            ))}
          </select>
        </label>

        <input
          className="input-date"
          type="date"
          id="datePicker"
          value={selectedDate}
          onChange={handleDateChange}
        />

        <select
          className="select-hour"
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
      <div className="reservation-button">
        <button
          className="confirm-button"
          type="button"
          onClick={sendReservationToDatabase}
        >
          Confirmer
        </button>
      </div>
    </div>
  );
}

export default Resa;
