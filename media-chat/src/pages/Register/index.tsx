import logo from "../../assets/logo.svg";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { Link } from "react-router-dom";

export function ResgisterPage() {
  return (
    <div>
      <img src={logo} alt="Logo Media Chat" />
      <h2>Cadastro</h2>
      <RegisterForm />
      <p>Já está cadastrado ?</p>
      <Link to={"/login"}>Ir para a página de login</Link>
    </div>
  );
}
