import React, { useState } from "react";
import DropdownCidades from "./DropdownCidades";
import DropdownEstados from "./DropdownEstados";
import Moment from "moment";
import "./Form.css";
import "typeface-roboto";

function Form() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dataNasc, setDataNasc] = useState("");
  const [estado, setEstado] = useState("");
  const [cidade, setCidade] = useState("");
  const [sexo, setSexo] = useState("");
  const [ativo, setAtivo] = useState("Inativo");

  // const [formValues, setFormValues] = useState({});

  const handleInputChange = (evt) => {
    setEstado(evt.target.value);
    // evt.preventDefault();
    // const { value, name } = evt.target;
    // setFormValues({ ...formValues, [name]: value });
  };

  const collectCidade = (evt) => {
    setCidade(evt.target.value);
  };

  function validateForm() {
    if (
      nome === "" ||
      email === "" ||
      dataNasc === "" ||
      estado === "" ||
      cidade === "" ||
      sexo === ""
    ) {
      alert("Erro: Todos os campos devem ser preenchidos!");
      return false;
    }

    return true;
  }

  function formSubmit(evt) {
    if (validateForm()) {
      const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];
      var id = formData.length + 1;

      const newData = {
        id,
        nome,
        email,
        dataNasc,
        estado,
        cidade,
        sexo,
        ativo,
      };
      formData.push(newData);
      localStorage.setItem("Form-Data", JSON.stringify(formData));
    } else {
      evt.preventDefault();
    }
  }

  function changeAtivoState() {
    if (ativo === "Inativo") {
      setAtivo("Ativo");
    } else {
      setAtivo("Inativo");
    }
  }

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
          <DropdownEstados
            onChange={handleInputChange}
            className={"select-box"}
          />
        </div>

        <div className="flex-container">
          <label className="label-left">Cidade</label>
          <DropdownCidades
            state={estado}
            onChange={collectCidade}
            selected={"null"}
            className={"select-box"}
          />
        </div>

        <div className="flex-container">
          <label className="label-left">Sexo</label>
          <input
            className="horizontal-radio"
            type="radio"
            id="masc"
            name="sexo"
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
            name="sexo"
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
            onClick={(evt) => {
              formSubmit(evt);
            }}
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
