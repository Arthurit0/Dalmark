import React, { useState } from "react";
import DropdownCidades from "./DropdownCidades";
import DropdownEstados from "./DropdownEstados";
import "./Form.css";

function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [sexo, setSexo] = useState("");
  const [ativo, setAtivo] = useState("Inativo");

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
    setEstado(evt.target.value);
    evt.preventDefault();
    const { value, name } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const collectCidade = (evt) => {
    setCidade(evt.target.value);
  };
  function validateForm() {
    if (
      nome === "" ||
      email === "" ||
      dataNasc === "" ||
      // estado === "" ||
      // cidade === "" ||
      sexo === ""
    ) {
      alert("Erro: Todos os campos devem ser preenchidos!");
      return false;
    }

    return true;
  }

  function formSubmit() {
    if (validateForm()) {
      const newData = { nome, email, dataNasc, estado, cidade, sexo, ativo };
      const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
      formData.push(newData);
      localStorage.setItem("Form-Data", JSON.stringify(formData));
    }
  }

  function changeAtivoState() {
    if (ativo === "Inativo") {
      setAtivo("Ativo");
    } else {
      setAtivo("Inativo");
    }
  }

  // render() {
  return (
    <form name="Formulario">
      <div className="div-form">
        <h1>Formulário em React</h1>

        <div className="flex-container">
          <label className="label-left">Nome</label>
          <input
            className="text-box-right"
            type="text"
            id="name"
            value={nome}
            onChange={(evt) => setNome(evt.target.value)}
          />
        </div>

        <div className="flex-container">
          <label className="label-left">E-mail</label>
          <input
            className="text-box-right"
            type="text"
            id="email"
            value={email}
            onChange={(evt) => {
              setEmail(evt.target.value);
            }}
          />
        </div>

        <div className="flex-container">
          <label className="label-left">Data de Nascimento</label>
          <input
            className="calendar-right"
            type="date"
            id="birthday"
            value={dataNasc}
            onChange={(evt) => {
              setDataNasc(evt.target.value);
            }}
          />
        </div>

        <div className="flex-container">
          <label className="label-left">Estado</label>
          <DropdownEstados onChange={handleInputChange} />
        </div>

        <div className="flex-container">
          <label className="label-left">Cidade</label>
          <DropdownCidades state={formValues.state} onChange={collectCidade} />
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
        </div>

        <div className="flex-container">
          <label className="label-left">Usuário Ativo?</label>
          <input
            className="horizontal-checkbox"
            type="checkbox"
            id="active"
            onChange={changeAtivoState}
          />
          <label>Ativo</label>
        </div>

        <div className="flex-container-submit">
          <input
            className="submit-button"
            onClick={formSubmit}
            type="submit"
            id="submit"
            value="Enviar"
          />
        </div>
      </div>
    </form>
  );
}

export default Form;
