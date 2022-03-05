import React, { useState, useEffect } from "react";
import { MdFlightTakeoff } from "react-icons/md";

import API from "../services/API";
import "./Home.css";

export default function Home() {
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadAPI() {
      const response = await API.get("trips");
      setTrips(response.data);
    }

    loadAPI();
  }, []);

  return (
    <div>
      <div className="box">
        {trips.map((trip) => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span> Status: {trip.status ? "Disponível" : "Indisponível"}</span>
            <button type="button" onClick={() => {}}>
              <div>
                <MdFlightTakeoff size={16} color="#fff" />
              </div>
              <span>Solicitar Reserva</span>
            </button>
          </li>
        ))}
      </div>
    </div>
  );
}
