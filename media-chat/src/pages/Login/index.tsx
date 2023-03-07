import { LoginForm } from "../../components/Form/LoginForm";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";

export function LoginPage() {
  return (
    <div>
      <img src={logo} alt="Logo Media Chat" />
      <h2>Login</h2>
      <LoginForm />
      <p>Ainda não cadastrado ?</p>
      <Link to={"/register"}>Ir para a página de cadastro</Link>
    </div>
  );
}
