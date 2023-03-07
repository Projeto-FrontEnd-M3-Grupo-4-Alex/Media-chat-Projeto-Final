import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";

interface iUserLoginData {
  email: string;
  password: string;
}

const schema = yup.object({
  email: yup.string().required("Email obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export function LoginForm() {
  const { userLogin } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLoginData>({
    resolver: yupResolver(schema),
  });

  async function onSubmitForm(data: iUserLoginData) {
    userLogin(data);
  }

  return (
    <form action="" onSubmit={handleSubmit(onSubmitForm)}>
      <Input
        label="Email"
        type="text"
        errorMessage={errors.email}
        register={register("email")}
        placeholder={"Digite seu email"}
      />
      <InputPassword
        label="Senha"
        errorMessage={errors.password}
        register={register("password")}
        placeholder="Digite sua senha"
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
