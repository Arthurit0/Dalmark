import React, { Component } from "react";
import Form from "./components/Form";
import Table from "./components/Table";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Form />
        <Table />
      </div>
    );
  }
}

export default App;
