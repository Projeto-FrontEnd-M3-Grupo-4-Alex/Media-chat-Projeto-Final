import logo from "../../assets/logo.svg"
import { RegisterForm } from "../../components/Form/RegisterForm"
import { Link } from "react-router-dom"
import { FormStyle } from "../../styles/FormStyle"

export function ResgisterPage() {
  return (
    <FormStyle>
      <div className="registerContainer">
        <img src={logo} alt="Logo Media Chat" />
        <h2>Cadastro</h2>
        <RegisterForm />
        <p>Já está cadastrado ?</p>
        <Link to={"/login"}>Ir para a página de login</Link>
      </div>
    </FormStyle>
  )
}
