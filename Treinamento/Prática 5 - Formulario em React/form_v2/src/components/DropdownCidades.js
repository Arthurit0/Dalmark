import { useEffect, useState } from "react";
import { fetchCidadeDoEstado } from "../helpers/ibge";

const DropdownCidades = ({
  state,
  onChange = () => {},
  selected = () => {},
  className = () => {},
}) => {
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    fetchCidadeDoEstado(state).then((cidades) => {
      setCidades(cidades);
    });
  }, [state]);

  return (
    <select className={className} name="cidade" id="estado" onChange={onChange}>
      <option value="empty-city" id="empty-city">
        Selecione uma Cidade
      </option>
      {state !== null
        ? cidades.map((cidade) => {
            return (
              <option
                key={cidade.id}
                value={cidade.nome}
                selected={cidade.nome === selected}
              >
                {cidade.nome}
              </option>
            );
          })
        : alert("null")}
    </select>
  );
};

export default DropdownCidades;
