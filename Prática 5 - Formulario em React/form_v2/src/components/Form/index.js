import React, { Component, useState } from "react";
import DropdownCidades from "./DropdownCidades";
import DropdownEstados from "./DropdownEstados";
import "./index.css";

function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNasc, setDataNasc] = useState("");

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     nome: "",
  //     email: "",
  //     dataNasc: "",
  //     estado: "",
  //     cidade: "",
  //     sexo: "",
  //     ativo: "Inativo",
  //   };

  //   this.formSubmit = this.formSubmit.bind(this);
  //   this.validateForm = this.validateForm.bind(this);
  //   this.changeAtivoState = this.changeAtivoState.bind(this);
  // }

  const [formValues, setFormValues] = useState({});

  const handleInputChange = (evt) => {
    evt.preventDefault();
  };

  function validateForm() {
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

  function formSubmit() {
    if (this.validateForm()) {
      const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
      formData.push(this.state);
      localStorage.setItem("Form-Data", JSON.stringify(formData));
    }
  }

  function changeAtivoState() {
    if (this.state.ativo === "Inativo") {
      this.setState({ ativo: "Ativo" });
    } else {
      this.setState({ ativo: "Inativo" });
    }
  }

  // render() {
  return (
    <form name="Formulario">
      <div className="div-form">
        <h1>Exercício Formulário</h1>

        <div className="flex-container">
          <label className="label-left">Nome</label>
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
          <label className="label-left">E-mail</label>
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
          <label className="label-left">Data de Nascimento</label>
          <input
            className="calendar-right"
            type="date"
            id="birthday"
            value={this.state.dataNasc}
            onChange={(evt) => this.setState({ dataNasc: evt.target.value })}
          />
        </div>

        <div className="flex-container">
          <label className="label-left">Estado</label>
          <DropdownEstados onChange={handleInputChange} />
        </div>

        <div className="flex-container">
          <label className="label-left">Cidade</label>
          <DropdownCidades />
        </div>

        <div className="flex-container">
          <label className="label-left">Sexo</label>
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
          <label>Masculino</label>
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
          <label>Feminino</label>
        </div>

        <div className="flex-container">
          <label className="label-left">Usuário Ativo?</label>
          <input
            className="horizontal-checkbox"
            type="checkbox"
            id="active"
            onChange={this.changeAtivoState}
          />
          <label>Ativo</label>
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
  // }
}

export default Form;
