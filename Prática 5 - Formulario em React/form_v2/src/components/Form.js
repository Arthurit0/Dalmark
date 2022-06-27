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

  const [formValues, setFormValues] = useState({
    id: 0,
    nome: "",
    email: "",
    dataNasc: "",
    estado: "",
    cidade: "",
    sexo: "",
    ativo: "Inativo",
  });

  const handleInputChange = (evt) => {
    evt.preventDefault();
    let { value, name } = evt.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleAtivoChange = () => {
    if (formValues.ativo === "Inativo") {
      setFormValues({ ...formValues, ativo: "Ativo" });
    } else {
      setFormValues({ ...formValues, ativo: "Inativo" });
    }
  };

  const handleSexoChange = (evt) => {
    if (formValues.sexo === "") {
      setFormValues({ ...formValues, sexo: evt.target.value });
    }

    if (evt.target.value === "Masculino" && formValues.sexo === "Feminino") {
      setFormValues({ ...formValues, sexo: "Masculino" });
    }

    if (evt.target.value === "Feminino" && formValues.sexo === "Masculino") {
      setFormValues({ ...formValues, sexo: "Feminino" });
    }
  };

  function validateForm() {
    if (
      formValues.nome === "" ||
      formValues.email === "" ||
      formValues.dataNasc === "" ||
      formValues.estado === "" ||
      formValues.cidade === "" ||
      formValues.sexo === ""
    ) {
      alert("Erro: Todos os campos devem ser preenchidos!");
      return false;
    }

    return true;
  }

  function formSubmit(evt) {
    if (validateForm()) {
      const formData = JSON.parse(localStorage.getItem("Form-Data")) || [];

      setFormValues({ ...formValues, id: formData.length + 1 });

      formData.push(formValues);
      localStorage.setItem("Form-Data", JSON.stringify(formData));
    } else {
      evt.preventDefault();
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
            name="nome"
            value={formValues.nome}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex-container">
          <label className="label-left">E-mail</label>
          <input
            className="text-box-right"
            type="text"
            id="email"
            name="email"
            value={formValues.email}
            onChange={handleInputChange}
          />
        </div>

        <div className="flex-container">
          <label className="label-left">Data de Nascimento</label>
          <input
            className="calendar-right"
            type="date"
            id="birthday"
            name="dataNasc"
            value={formValues.dataNasc}
            onChange={handleInputChange}
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
            state={formValues.estado}
            onChange={handleInputChange}
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
            onChange={handleSexoChange}
          />
          <label>Masculino</label>
          <input
            className="horizontal-radio"
            type="radio"
            id="fem"
            name="sexo"
            value="Feminino"
            onChange={handleSexoChange}
          />
          <label>Feminino</label>
        </div>

        <div className="flex-container">
          <label className="label-left">Usuário Ativo?</label>
          <input
            className="horizontal-checkbox"
            type="checkbox"
            id="active"
            onChange={handleAtivoChange}
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
