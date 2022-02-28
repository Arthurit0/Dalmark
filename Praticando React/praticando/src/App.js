import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: "",
      email: "",
      senha: "",
    };
  }

  render() {
    return (
      <div>
        <h1>Novo Usuário</h1>
        <form>
          <input
            type="text"
            value={this.state.nome}
            onChange={(evt) => this.setState({ nome: evt.target.value })}
          ></input>
        </form>
      </div>
    );
  }
}

export default App;
