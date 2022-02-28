import Form from "..";
import { useEffect, useState } from "react";
import { fetchEstados } from "../../../helpers/ibge";

const DropdownEstados = ({ onChange = () => {} }) => {
  const [estados, setEstados] = useState([]);

  useEffect(() => {
    fetchEstados().then((estados) => {
      setEstados(estados);
    });
  }, []);

  return (
    <select
      className="select-box"
      htmlFor="estado"
      name="selectbox-state"
      id="state"
      onChange={onChange}
      // value={Form.state.estado}
      //   onChange={(evt) => Form.setState({ estado: evt.target.value })}
    >
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
