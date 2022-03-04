import React, { useState } from "react";
import "./Table.css";
import DropdownEstados from "./DropdownEstados";
import DropdownCidades from "./DropdownCidades";

function Table() {
  const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
  const [usuarios] = useState(formData);

  const [editNome, setEditNome] = useState("");
  const [editEmail, setEditEmail] = useState("");
  const [editDataNasc, setEditDataNasc] = useState("");
  const [editEstado, setEditEstado] = useState("");
  const [editCidade, setEditCidade] = useState("");
  const [editSexo, setEditSexo] = useState("");
  const [editAtivo, setEditAtivo] = useState("Inativo");

  // const [estadoValues, setEstadoValues] = useState({});
  const [editUserId, setEditUserId] = useState(null);

  const handleInputChange = (evt) => {
    evt.preventDefault();
    const { value, name } = evt.target;
    setEstadoValues({ ...estadoValues, [name]: value });
    if (name === "estado") {
      setEditEstado(evt.target.value);
      setEditCidade("");
    }
  };

  const handleEditClick = (evt, user) => {
    evt.preventDefault();
    setEditUserId(user.id);
  };

  const collectCidade = (evt) => {
    setEditCidade(evt.target.value);
  };

  function changeAtivoState() {
    if (editAtivo === "Inativo") {
      setEditAtivo("Ativo");
    } else {
      setEditAtivo("Inativo");
    }
  }

  function validateForm() {
    if (
      editNome === "" ||
      editEmail === "" ||
      editDataNasc === "" ||
      editEstado === "" ||
      editCidade === "" ||
      editSexo === ""
    ) {
      alert("Erro: Todos os campos devem ser preenchidos!");
      return false;
    }

    return true;
  }

  function validateChange(index) {
    const data = formData[index];

    if (
      data.nome === editNome &&
      data.email === editEmail &&
      data.dataNasc === editDataNasc &&
      data.cidade === editCidade &&
      data.estado === editEstado &&
      data.sexo === editSexo &&
      data.ativo === editAtivo
    ) {
      alert("Nenhuma alteração realizada!");
      return false;
    }

    return true;
  }

  function setEditStates(user) {
    setEditNome(user.nome);
    setEditEmail(user.email);
    setEditDataNasc(user.dataNasc);
    setEditEstado(user.estado);
    setEditCidade(user.cidade);
    setEditSexo(user.sexo);
    setEditAtivo(user.ativo);
  }

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
            onClick={(evt) => {
              setEditStates(user);
              handleEditClick(evt, user);
            }}
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
            className="edit-name"
            type="text"
            required="required"
            placeholder="Digite um nome..."
            name="nome"
            value={editNome}
            onChange={handleInputChange}
          ></input>
        </td>
        <td>
          <input
            className="edit-email"
            type="text"
            required="required"
            placeholder="Digite um Email..."
            name="email"
            value={editEmail}
            onChange={handleInputChange}
          ></input>
        </td>
        <td>
          <input
            className="edit-date"
            type="date"
            required="required"
            name="dataNasc"
            value={editDataNasc}
            onChange={handleInputChange}
          ></input>
        </td>
        <td>
          <DropdownEstados
            onChange={handleInputChange}
            selected={editEstado}
            className={"edit-box"}
          />
        </td>
        <td>
          <DropdownCidades
            state={editEstado}
            onChange={collectCidade}
            selected={editCidade}
            className={"edit-box"}
          />
        </td>
        <td>
          <div className="edit-sexo">
            <div>
              <input
                className="horizontal-radio"
                type="radio"
                id="masc"
                name="sexo"
                value="Masculino"
                checked={editSexo === "Masculino"}
                onChange={handleInputChange}
              />
              <label>Masc.</label>
            </div>

            <div>
              <input
                className="horizontal-radio"
                type="radio"
                id="fem"
                name="sexo"
                value="Feminino"
                checked={editSexo === "Feminino"}
                onChange={handleInputChange}
              />
              <label>Femi.</label>
            </div>
          </div>
        </td>
        <td>
          <input
            className="horizontal-checkbox"
            name="ativo"
            type="checkbox"
            id="active"
            checked={editAtivo === "Ativo"}
            onChange={handleInputChange}
          />
        </td>
        <td className="action-buttons">
          <input
            className="confirm-button"
            type="button"
            id={"confirm" + user.id}
            value="Confirmar"
            onClick={() => {
              editData();
            }}
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

  function editData() {
    var index = editUserId - 1;

    if (validateForm() & validateChange(index)) {
      const confirmation = window.confirm(
        "Você tem certeza que deseja aplicar estas alterações ao usuário?"
      );

      if (confirmation) {
        formData[index] = {
          id: editUserId,
          nome: editNome,
          email: editEmail,
          dataNasc: editDataNasc,
          estado: editEstado,
          cidade: editCidade,
          sexo: editSexo,
          ativo: editAtivo,
        };
        formData.splice(index, 1, formData[index]);
        localStorage.setItem("Form-Data", JSON.stringify(formData));
        window.location.reload(false);
      }
    }
    setEditUserId("null");
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

  // if (formData >= 0) {
  return (
    <div className="div-table">
      <h1>Tabela em React</h1>

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
    </div>
  );
}
// }

export default Table;
