import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { FormInputStyle } from "../../../styles/FormInputStyle";

interface iUserLoginData {
  name: string;
  password: string;
}

const schema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  password: yup.string().required("Senha obrigatória"),
});

export function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserLoginData>({
    resolver: yupResolver(schema),
  });

  return (
    <FormInputStyle action="">
      <Input
        label="Nome"
        type="text"
        errorMessage={errors.name}
        register={register("name")}
        placeholder={"Digite seu nome"}
        required
      />
      <InputPassword
        label="Senha"
        errorMessage={errors.password}
        register={register("password")}
        placeholder="Digite sua senha"
        required
      />
      <button id="bttn_submit" type="submit">Enviar</button>
    </FormInputStyle>
  );
}
