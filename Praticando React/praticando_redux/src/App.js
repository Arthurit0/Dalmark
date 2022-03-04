import React from "react";
import { BrowserRouter } from "react-router-dom";

import Rotas from "./Rotasv6";
import Header from "./components/Header";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Rotas />
    </BrowserRouter>
  );
}
