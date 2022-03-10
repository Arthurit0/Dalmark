import React from "react";
import AppRoutes from "./AppRoutes";

export default function App() {
  return (
    <div>
      {/* Nosso Header Não funcionaria se criado aqui */}
      <AppRoutes />
    </div>
  );
}
