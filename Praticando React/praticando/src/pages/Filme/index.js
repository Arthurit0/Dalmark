import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import api from "../../services/api";

import "./filme-info.css";

export default function Filme() {
  const { id } = useParams();
  const [filme, setFilme] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadFilme() {
      const resp = await api.get(`r-api/?api=filmes/${id}`);
      setFilme(resp.data);
      setLoading(false);
    }

    loadFilme();
  }, [id]);

  if (loading) {
    return (
      <div className="filme-info">
        <h1>Carregando Dados do Filme...</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>Página do Filme com id: {id}</h1>
    </div>
  );
}
