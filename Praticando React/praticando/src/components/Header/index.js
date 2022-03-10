import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <strong>Header da Página</strong>
      <br />
      <Link to="/">Home</Link>
    </header>
  );
}
