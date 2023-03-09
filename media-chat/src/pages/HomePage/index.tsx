import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { StyledHomePage } from "./style";

export function HomePage() {
  return (
    <StyledHomePage>
      <div className="page_navigation">
        <Link id="bttnAboutUs" to={"/about"}>Sobre nós</Link>
        <img id="logo" src={logo} alt="Logo da Media Chat" />
        <Link id="bttnGetStarted" to={"/login"}>Aventure-se !</Link>
      </div>
      <div className="info_page">
        <h2>Compartilhe suas experiências cinematográficas</h2>
        <p>
          Encontre diversas recomendações de entretenimento para assistir no
          sábado de noite ✨
        </p>
      </div>
    </StyledHomePage>
  );
}
