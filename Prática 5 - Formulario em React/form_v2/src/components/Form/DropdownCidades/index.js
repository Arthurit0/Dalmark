import Form from "..";
import { useEffect, useState } from "react";
import { fetchCidadeDoEstado } from "../../../helpers/ibge";

const DropdownCidades = () => {
  const [cidades, setCidades] = useState([]);

  useEffect(() => {
    fetchCidadeDoEstado("SC").then((cidades) => {
      setCidades(cidades);
    });
  }, []);

  console.log(cidades);

  return (
    <select
      className="select-box"
      name="selectbox-city"
      id="city"
      // value={this.state.cidade}
      // onChange={(evt) => this.setState({ cidade: evt.target.value })}
    >
      <option value="empty-city" id="empty-city">
        Selecione uma Cidade
      </option>
      {cidades.map((cidade, i) => {
        return <option value={cidade.id}>{cidade.nome}</option>;
      })}
    </select>
  );
};

export default DropdownCidades;
