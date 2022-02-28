import React, { Component } from "react";
import "./Form.css";
import Table from "./Table";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      dataNasc: "",
      estado: "",
      cidade: "",
      sexo: "",
      ativo: "Inativo",
    };

    this.formSubmit = this.formSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);
    this.changeAtivoState = this.changeAtivoState.bind(this);
  }

  validateForm() {
    let verif = this.state;
    if (
      verif.nome === "" ||
      verif.email === "" ||
      verif.dataNasc === "" ||
      // verif.estado === "" ||
      // verif.cidade === "" ||
      verif.sexo === ""
    ) {
      alert("Erro: Todos os campos devem ser preenchidos!");
      return false;
    }

    return true;
  }

  formSubmit() {
    if (this.validateForm()) {
      const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
      formData.push(this.state);
      localStorage.setItem("Form-Data", JSON.stringify(formData));
    }
  }

  changeAtivoState() {
    if (this.state.ativo === "Inativo") {
      this.setState({ ativo: "Ativo" });
    } else {
      this.setState({ ativo: "Inativo" });
    }
  }

  render() {
    return (
      <form name="Formulario">
        <div className="div-form">
          <h1>Exercício Formulário</h1>

          <div className="flex-container">
            <label className="label-left" for="name">
              Nome
            </label>
            <input
              className="text-box-right"
              type="text"
              id="name"
              value={this.state.nome}
              onChange={(evt) => {
                this.setState({ nome: evt.target.value });
              }}
            />
          </div>

          <div className="flex-container">
            <label className="label-left" for="email">
              E-mail
            </label>
            <input
              className="text-box-right"
              type="text"
              id="email"
              value={this.state.email}
              onChange={(evt) => {
                this.setState({ email: evt.target.value });
              }}
            />
          </div>

          <div className="flex-container">
            <label className="label-left" for="bornDate">
              Data de Nascimento
            </label>
            <input
              className="calendar-right"
              type="date"
              id="birthday"
              value={this.state.dataNasc}
              onChange={(evt) => this.setState({ dataNasc: evt.target.value })}
            />
          </div>

          <div className="flex-container">
            <label className="label-left" for="state">
              Estado
            </label>
            <select
              className="select-box"
              name="selectbox-state"
              id="state"
              value={this.state.estado}
              onChange={(evt) => this.setState({ estado: evt.target.value })}
            >
              <option value="empty-state">Selecione um Estado</option>
            </select>
          </div>

          <div className="flex-container">
            <label className="label-left" for="city">
              Cidade
            </label>
            <select
              className="select-box"
              name="selectbox-city"
              id="city"
              value={this.state.cidade}
              onChange={(evt) => this.setState({ cidade: evt.target.value })}
            >
              <option value="empty-city" id="empty-city">
                Selecione uma Cidade
              </option>
            </select>
          </div>

          <div className="flex-container">
            <label className="label-left" for="gender">
              Sexo
            </label>
            <input
              className="horizontal-radio"
              type="radio"
              id="masc"
              name="gender"
              value="Masculino"
              onChange={(evt) => {
                this.setState({ sexo: evt.target.value });
              }}
            />
            <label for="masc">Masculino</label>
            <input
              className="horizontal-radio"
              type="radio"
              id="fem"
              name="gender"
              value="Feminino"
              onChange={(evt) => {
                this.setState({ sexo: evt.target.value });
              }}
            />
            <label for="fem">Feminino</label>
          </div>

          <div className="flex-container">
            <label className="label-left" for="active">
              Usuário Ativo?
            </label>
            <input
              className="horizontal-checkbox"
              type="checkbox"
              id="active"
              onChange={this.changeAtivoState}
            />
            <label for="active">Ativo</label>
          </div>

          <div className="flex-container-submit">
            <input
              className="submit-button"
              onClick={this.formSubmit}
              type="submit"
              id="submit"
              value="Enviar"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default Form;
