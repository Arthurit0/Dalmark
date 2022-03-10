import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h1>Bem-vindo a página Home!</h1>
      <h2>
        {" "}
        <Link to="/sobre">Sobre</Link>
        <br />
        <Link to="/contato">Contato</Link>
      </h2>
    </div>
  );
}
