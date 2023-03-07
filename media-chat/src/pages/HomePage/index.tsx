import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export function HomePage() {
  return (
    <div>
      <div>
        <Link to={"/about"}>Sobre nós</Link>
        <img src={logo} alt="Logo da Media Chat" />
        <Link to={"/login"}>Aventure-se !</Link>
      </div>
      <div>
        <h2>Compartilhe suas experiências cinematográficas</h2>
        <p>
          Encontre diversas recomendações de entretenimento para assistir no
          sábado de noite
        </p>
      </div>
    </div>
  );
}
