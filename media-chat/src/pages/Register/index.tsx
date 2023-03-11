<<<<<<< HEAD
import logo from "../../assets/logo.svg";
import { RegisterForm } from "../../components/Form/RegisterForm";
import { Link } from "react-router-dom";
import { Loading } from "../../components/Loading";
import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { FormStyle } from "../../styles/FormStyle";

export function ResgisterPage() {
  const { loading } = useContext(UserContext);
=======
import { Loading } from "../../components/Loading"
import { useContext } from "react"
import { UserContext } from "../../providers/UserContext/UserContext"

import logo from "../../assets/logo.svg"
import { RegisterForm } from "../../components/Form/RegisterForm"
import { Link } from "react-router-dom"
import { FormStyle } from "../../styles/FormStyle"

export function ResgisterPage() {
  const { loading } = useContext(UserContext)
>>>>>>> 64be098fb05cbb8330a2ca7a1c67adc07e1c0385
  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <FormStyle>
          <div className="registerContainer">
            <img src={logo} alt="Logo Media Chat" />
            <h2>Cadastro</h2>
            <RegisterForm />
            <p>Já está cadastrado ?</p>
            <Link to={"/login"}>Ir para a página de login</Link>
          </div>
        </FormStyle>
      )}
    </div>
<<<<<<< HEAD
  );
=======
  )
>>>>>>> 64be098fb05cbb8330a2ca7a1c67adc07e1c0385
}
