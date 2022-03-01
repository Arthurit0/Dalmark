import React from "react";
import DropdownCidades from "./DropdownCidades";
import DropdownEstados from "./DropdownEstados";

const EditRow = () => {
  return (
    <div>
      <tr>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite um nome..."
            name="nome"
          ></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite um Email..."
            name="email"
          ></input>
        </td>
        <td>
          <input type="date" required="required" name="data"></input>
        </td>
        <td>
          <input
            type="text"
            required="required"
            placeholder="Digite um nome..."
            name="nome"
          ></input>
        </td>
        <td>
          <DropdownEstados />
        </td>
        <td>
          <DropdownCidades />
        </td>
        <td>
          <label className="label-left">Sexo</label>
          <input
            className="horizontal-radio"
            type="radio"
            id="masc"
            name="gender"
            value="Masculino"
            onChange={(evt) => {
              setSexo(evt.target.value);
            }}
          />
          <label>Masculino</label>
          <input
            className="horizontal-radio"
            type="radio"
            id="fem"
            name="gender"
            value="Feminino"
            onChange={(evt) => {
              setSexo(evt.target.value);
            }}
          />
          <label>Feminino</label>
        </td>
        <td>
          <label className="label-left">Usuário Ativo?</label>
          <input
            className="horizontal-checkbox"
            type="checkbox"
            id="active"
            onChange={changeAtivoState}
          />
          <label>Ativo</label>
        </td>
      </tr>
    </div>
  );
};

export default EditRow;
