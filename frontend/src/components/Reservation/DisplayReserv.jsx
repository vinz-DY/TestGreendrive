import React from "react";
import { useLoaderData } from "react-router-dom";
import "./DisplayReserv.css";

function DisplayReserv() {
  const reserv = useLoaderData();

  // Fonction de comparaison pour trier les réservations par date puis par heure
  const compareReservations = (a, b) => {
    // Convertir les dates en objets Date pour permettre la comparaison
    const dateA = new Date(a.startTime);
    const dateB = new Date(b.startTime);

    // Comparaison des dates
    if (dateA < dateB) return -1;
    if (dateA > dateB) return 1;

    // Si les dates sont égales, comparer les heures
    const heureA = dateA.getHours();
    const minuteA = dateA.getMinutes();
    const heureB = dateB.getHours();
    const minuteB = dateB.getMinutes();

    // Comparaison des heures
    if (heureA < heureB) return -1;
    if (heureA > heureB) return 1;

    // Si les heures sont égales, comparer les minutes
    if (minuteA < minuteB) return -1;
    if (minuteA > minuteB) return 1;

    // Si les dates et heures sont identiques, pas besoin de changer l'ordre
    return 0;
  };

  // Trier les réservations
  reserv.sort(compareReservations);

  const formatDate = (dateTimeString) => {
    const dateTime = new Date(dateTimeString);
    const day = dateTime.getDate();
    const month = dateTime.getMonth() + 1;
    const year = dateTime.getFullYear();
    const hours = dateTime.getHours();
    const minutes = dateTime.getMinutes();

    // Ajout d'un 0 devant les minutes si elles sont inférieures à 10

    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return ` ${day}/${month}/${year} à ${hours}:${formattedMinutes}`;
  };

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
              Date et heure de la réservation: le
              {formatDate(reservation.startTime)}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayReserv;
