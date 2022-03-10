import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Header from "./components/Header";
import Erro from "./pages/Erro";

const AppRoutes = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="*" element={<Erro />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default AppRoutes;
