import React, { Component } from "react";
import "./style.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numero: 0,
      botao: "Start",
    };

    this.timer = null;
    this.startTimer = this.startTimer.bind(this);
    this.reset = this.reset.bind(this);
  }

  startTimer() {
    let state = this.state;

    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
      state.botao = "Start";
    } else {
      this.timer = setInterval(() => {
        state.numero += 0.01;
        this.setState(state);
      }, 10);

      state.botao = "Pause";
    }

    this.setState(state);
  }

  reset() {
    if (this.timer != null) {
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.botao = "Start";
    this.setState(state);
  }

  render() {
    return (
      <div className="container">
        <img src={require("./assets/cronometro.png")} className="img" />
        <a className="timer">{this.state.numero.toFixed(2)}</a>
        <div className="button-area">
          <a className="button" onClick={this.startTimer}>
            {this.state.botao}
          </a>
          <a className="button" onClick={this.reset}>
            Reset
          </a>
        </div>
      </div>
    );
  }
}

export default App;
