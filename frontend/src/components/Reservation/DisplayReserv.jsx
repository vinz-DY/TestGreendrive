import React from "react";
import { useLoaderData } from "react-router-dom";
import "./DisplayReserv.css";

function DisplayReserv() {
  const reserv = useLoaderData();
  return (
    <div className="reserv-container">
      <h1 className="title-reserv">Historique des réservations</h1>
      <div className="display-cards">
        {reserv.map((reservation) => (
          <div className="reserv-cards" key={reservation.id}>
            <p className="infos-reserv">
              ID de la borne réservée: {reservation.terminal_id}
            </p>
            <p className="infos-reserv">
              Date et heure de la réservation: {reservation.startTime}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayReserv;
