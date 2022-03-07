import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux"; // Envia os dados de um componente para os reducers
import { MdFlightTakeoff } from "react-icons/md";

import API from "../services/API";
import "./Home.css";
import { addReserve } from "../store/modules/reservas/actions";

export default function Home() {
  const dispatch = useDispatch();
  const [trips, setTrips] = useState([]);

  useEffect(() => {
    async function loadAPI() {
      const response = await API.get("trips");
      setTrips(response.data);
    }

    loadAPI();
  }, []);

  function handleAdd(trip) {
    dispatch(addReserve(trip));
  }

  return (
    <div>
      <div className="box">
        {trips.map((trip) => (
          <li key={trip.id}>
            <img src={trip.image} alt={trip.title} />
            <strong>{trip.title}</strong>
            <span> Status: {trip.status ? "Disponível" : "Indisponível"}</span>
            <button type="button" onClick={() => handleAdd(trip)}>
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
