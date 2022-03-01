import { useEffect, useState } from "react";
import { fetchEstados } from "../helpers/ibge";

const DropdownEstados = ({ onChange = () => {} }) => {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    fetchEstados().then((estados) => {
      setEstados(estados);
    });
  }, []);

  return (
    <select className="select-box" name="state" id="state" onChange={onChange}>
      <option value="empty-state" id="empty-state">
        Selecione um Estado
      </option>
      {estados.map((estado, i) => {
        return (
          <option key={i} value={estado.sigla}>
            {estado.nome}
          </option>
        );
      })}
    </select>
  );
};

export default DropdownEstados;
