import { FormStyle } from "../../styles/FormStyle";
import { LoginForm } from "../../components/Form/LoginForm";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.svg";
import { Loading } from "../../components/Loading";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";

export function LoginPage() {
  const { loading } = useContext(UserContext);
  return (
    <FormStyle>
      {loading ? (
        <Loading />
      ) : (
        <div className="loginContainer">
          <img src={logo} alt="Logo Media Chat" />
          <h2>Login</h2>
          <LoginForm />
          <p>Ainda não cadastrado ?</p>
          <Link to={"/register"}>Ir para a página de cadastro</Link>
        </div>
      )}
    </FormStyle>
  );
}
