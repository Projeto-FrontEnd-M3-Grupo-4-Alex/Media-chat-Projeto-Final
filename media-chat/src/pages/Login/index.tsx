import { LoginForm } from "../../components/Form/LoginForm"
import { Link } from "react-router-dom"
import logo from "../../assets/logo.svg"
import { FormStyle } from "../../styles/FormStyle"

export function LoginPage() {
  return (
    <FormStyle>
      <div className="loginContainer">
        <img src={logo} alt="Logo Media Chat" />
        <h2>Login</h2>
        <LoginForm />
        <p>Ainda não cadastrado ?</p>
        <Link to={"/register"}>Ir para a página de cadastro</Link>
      </div>
    </FormStyle>
  )
}
