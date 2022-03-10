import { Link } from "react-router-dom";

export default function Erro() {
  return (
    <div>
      <h1>Esta página não existe!</h1>

      <footer>
        <h3>
          <Link to="/">Voltar para Home</Link>
        </h3>
      </footer>
    </div>
  );
}
