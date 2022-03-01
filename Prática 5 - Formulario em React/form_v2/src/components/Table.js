import React, { useState, Fragment } from "react";
import "./Table.css";
import DropdownEstados from "./DropdownEstados";
import DropdownCidades from "./DropdownCidades";
import Form from "./Form";

function Table() {
  const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
  const [usuarios, setUsuarios] = useState(formData);
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [estadoValues, setEstadoValues] = useState({});
  const [editUserId, setEditUserId] = useState(null);

  const handleInputChange = (evt) => {
    setEstado(evt.target.value);
    evt.preventDefault();
    const { value, name } = evt.target;
    setEstadoValues({ ...estadoValues, [name]: value });
  };

  const handleEditClick = (evt, user) => {
    evt.preventDefault();
    setEditUserId(user.id);
  };

  const collectCidade = (evt) => {
    setCidade(evt.target.value);
  };

  function populateTable(user) {
    return (
      <tr key={user.id}>
        <td>{user.nome}</td>
        <td>{user.email}</td>
        <td>{user.dataNasc}</td>
        <td>{user.estado}</td>
        <td>{user.cidade}</td>
        <td>{user.sexo}</td>
        <td>{user.ativo}</td>
        <td className="action-buttons">
          <input
            className="edit-button"
            type="button"
            id={"edit" + user.id}
            value="Editar"
            onClick={(evt) => handleEditClick(evt, user)}
          ></input>
          <input
            className="delete-button"
            type="button"
            id={"delete" + user.id}
            value="Deletar"
            onClick={(i) => removeRow(i)}
          />
        </td>
      </tr>
    );
  }

  function editTable(user) {
    return (
      <tr key={"edit " + user.id}>
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
          <DropdownEstados onChange={handleInputChange} />
        </td>
        <td>
          <DropdownCidades
            state={estadoValues.state}
            onChange={collectCidade}
          />
        </td>
        <td>
          <input
            className="horizontal-radio"
            type="radio"
            id="masc"
            name="sexo"
            value="Masculino"
            // onChange={(evt) => {
            //   Form.setSexo(evt.target.value);
            // }}
          />
          <label>Masc.</label>
          <br />
          <input
            className="horizontal-radio"
            type="radio"
            id="fem"
            name="sexo"
            value="Feminino"
            // onChange={(evt) => {
            //   Form.setSexo(evt.target.value);
            // }}
          />
          <label>Femin.</label>
        </td>
        <td>
          <input
            className="horizontal-checkbox"
            type="checkbox"
            id="active"
            // onChange={Form.changeAtivoState}
          />
        </td>
        <td className="action-buttons">
          <input
            className="confirm-button"
            type="button"
            id={"confirm" + user.id}
            value="Confirmar"
            // onClick=""
          ></input>
          <input
            className="cancel-button"
            type="button"
            id={"cancel" + user.id}
            value="Cancelar"
            onClick={() => {
              setEditUserId("null");
            }}
          />
        </td>
      </tr>
    );
  }

  function removeRow(index) {
    const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];

    const confirmation = window.confirm(
      "Você tem certeza que deseja excluir este usuário?"
    );

    if (confirmation) {
      formData.splice(index, 1);
      localStorage.setItem("Form-Data", JSON.stringify(formData));
      window.location.reload();
    } else {
      return false;
    }
  }

  return (
    <div className="div-table">
      <h1>Tabela em React</h1>

      <form>
        <table className="table-container" id="table-exercicio">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Data de Nasc.</th>
              <th>Estado</th>
              <th>Cidade</th>
              <th>Sexo</th>
              <th>Ativo</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody id="table-body">
            {usuarios.map((user, i) => (
              <>
                {editUserId === user.id
                  ? editTable(user)
                  : populateTable(user, i)}
              </>
            ))}
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default Table;
