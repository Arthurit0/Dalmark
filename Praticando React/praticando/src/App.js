import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
      error: "",
    };

    this.cadastrar = this.cadastrar.bind(this);
  }

  cadastrar(evt) {
    const { nome, email, senha } = this.state;
    if (nome !== "" && (email !== "") & (senha !== "")) {
      this.setState({ error: "" });
      alert(`Nome: ${nome}\nEmail: ${email}\nSenha: ${senha}`);
    } else {
      this.setState({ error: "Valores não preenhidos!" });
    }

    evt.preventDefault();
  }

  render() {
    return (
      <div>
        <h1>Novo Usuário</h1>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.cadastrar}>
          <label>Nome: </label>
          <input
            type="text"
            value={this.state.nome}
            onChange={(evt) => this.setState({ nome: evt.target.value })}
          ></input>
          <br />
          <label>Email: </label>
          <input
            type="text"
            value={this.state.email}
            onChange={(evt) => this.setState({ email: evt.target.value })}
          ></input>
          <br />
          <label>Senha: </label>
          <input
            type="password"
            value={this.state.senha}
            onChange={(evt) => this.setState({ senha: evt.target.value })}
          ></input>
          <br />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    );
  }
}

export default App;
