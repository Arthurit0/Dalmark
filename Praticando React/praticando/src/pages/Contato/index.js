import { Link } from "react-router-dom";

export default function Contato() {
  return (
    <div>
      <h1>Os contatos são:</h1>
      <br />
      <span>teste@teste.com</span>

      <footer>
        <h2>
          <Link to="/">Home</Link>
        </h2>
      </footer>
    </div>
  );
}
