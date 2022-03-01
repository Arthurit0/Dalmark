import { useEffect, useState } from "react";
import { fetchCidadeDoEstado } from "../helpers/ibge";

const DropdownCidades = ({ state, onChange = () => {} }) => {
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    fetchCidadeDoEstado(state).then((cidades) => {
      setCidades(cidades);
    });
  }, [state]);

  return (
    <select
      className="select-box"
      name="selectbox-city"
      id="estado"
      onChange={onChange}
    >
      <option value="empty-city" id="empty-city">
        Selecione uma Cidade
      </option>
      {cidades.map((cidade) => {
        return (
          <option key={cidade.id} value={cidade.nome}>
            {cidade.nome}
          </option>
        );
      })}
    </select>
  );
};

export default DropdownCidades;
