import { useContext } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { AiFillHome } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { BsPlayBtn } from "react-icons/bs";
import { GiPiercingSword } from "react-icons/gi";
import { GrCircleInformation } from "react-icons/gr";
import logo from "../../../assets/logo.svg";
import { StyledTopAside } from "./style";

export function TopPartIcons() {
  const { filterPosts } = useContext(PostsContext);
  return (
    <StyledTopAside className="aside__topPart">
      <img src={logo} alt="Logo da Media Chat" />
      <div className="home" onClick={() => filterPosts("Home")}>
        <AiFillHome />
        <h3>Início</h3>
      </div>
      <div className="movies" onClick={() => filterPosts("Filme")}>
        <MdLocalMovies />
        <h3>Filmes</h3>
      </div>
      <div className="series" onClick={() => filterPosts("Série")}>
        <BsPlayBtn />
        <h3>Séries</h3>
      </div>
      <div className="anime" onClick={() => filterPosts("Anime")}>
        <GiPiercingSword />
        <h3>Animes</h3>
      </div>
      <Link to={"/about"}>
        <GrCircleInformation />
        <h3>Sobre nós</h3>
      </Link>
    </StyledTopAside>
  );
}
