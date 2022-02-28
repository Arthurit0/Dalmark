import React, { Component } from "react";
import "./Table.css";

class Table extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  populateTable() {
    const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
    return formData.map((data, i) => {
      return (
        <tr key={i}>
          <td>{data.nome}</td>
          <td>{data.email}</td>
          <td>{data.dataNasc}</td>
          <td>{data.estado}</td>
          <td>{data.cidade}</td>
          <td>{data.sexo}</td>
          <td>{data.ativo}</td>
          <td>
            <input
              class="delete-button"
              type="button"
              id="delete"
              value="Deletar"
              onClick={(i) => this.removeRow(i)}
            />
          </td>
        </tr>
      );
    });
  }

  removeRow(index) {
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

  render() {
    return (
      <div className="div-table">
        <h1>Exercício Tabela</h1>

        <table className="table-container" id="table-exercicio2">
          <thead>
            <tr>
              <th>Nome</th>
              <th>Email</th>
              <th>Data de Nasc.</th>
              <th>Estado</th>
              <th>Cidade</th>
              <th>Sexo</th>
              <th>Ativo</th>
              <th>Excluir</th>
            </tr>
          </thead>
          {this.populateTable()}
          <tbody id="table-body"></tbody>
        </table>
      </div>
    );
  }
}

export default Table;
