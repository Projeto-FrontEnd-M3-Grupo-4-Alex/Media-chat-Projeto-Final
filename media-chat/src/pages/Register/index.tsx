import logo from "../../assets/logo.svg";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { FormStyle } from "../../styles/FormStyle";

export function ResgisterPage() {
  const { loading } = useContext(UserContext);
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <FormStyle>
          <div className="registerContainer"></div>
          <img src={logo} alt="Logo Media Chat" />
          <h2>Cadastro</h2>
          <RegisterForm />
          <p>Já está cadastrado ?</p>
          <Link to={"/login"}>Ir para a página de login</Link>
        </FormStyle>
      )}
    </div>
  );
}
