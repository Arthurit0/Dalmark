import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "teste@teste.com",
      senha: "",
      sexo: "Masculino",
    };

    this.trocaEmail = this.trocaEmail.bind(this);
    this.trocaSexo = this.trocaSexo.bind(this);
  }

  trocaEmail(evt) {
    let valorDigitado = evt.target.value; // Valor digitado recebe o que está na caixa de texto
    this.setState({ email: valorDigitado }); // email recebe Valor digitado
  }

  trocaSexo(evt) {
    this.setState({ sexo: evt.target.value }); //Aqui fizemos mais diretamente a atribuição
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        Email:
        <input
          type="email"
          name="email"
          value={this.state.email} // Utilizamos Javascript nos values, não string fixas como em HTML
          onChange={this.trocaEmail} //Função que é executada a cada alteração. Função externa trocaEmail(evt) cuida das alterações
        ></input>
        <br />
        Senha:
        <input
          type="password"
          name="senha"
          value={this.state.senha}
          onChange={(evt) => this.setState({ senha: evt.target.value })} //Aqui fizemos uma função anônima para receber o valor digitado
        ></input>
        <br />
        Sexo:
        <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
          <option value="Masculino">Masculino</option>
          <option value="Feminino">Feminino</option>
        </select>
        <div>
          <h3>{this.state.email}</h3>
          <h3>{this.state.senha}</h3>
          <h3>{this.state.sexo}</h3>
        </div>
      </div>
    );
  }
}

export default App;
