import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";
import "./Header.css";

export default function Header() {
  return (
    <div className="main-header">
      <Link to="/">
        <img className="logo" src={logo} alt="Logo Projeto" />
      </Link>

      <Link className="link-reservas" to="/reservas">
        <div>
          <strong>Minhas Reservas</strong>
          <span>0 reservas</span>
        </div>
      </Link>
    </div>
  );
}
