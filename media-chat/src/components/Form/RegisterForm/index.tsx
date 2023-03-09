import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../Input";
import { InputPassword } from "../InputPassword";
import { FormInputStyle } from "../../../styles/FormInputStyle";

interface iUserRegisterData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  bio?: string;
  urlProfile?: string;
}

const schema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  email: yup.string().required("Email obrigatório").email("Email inválido"),
  password: yup
    .string()
    .required("Senha obrigatória")
    .matches(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).{8,}$/,
      "A senha deve conter pelo menos 1 letra minúscula, 1 letra maiúscula, 1 número, 1 caractere especial e no total deve conter no mínimo 8 caracteres"
    ),
  confirmPassword: yup
    .string()
    .required("Confirmação de senha obrigatória")
    .oneOf([yup.ref("password")], "As senhas devem ser idênticas"),
  bio: yup.string(),
  urlProfile: yup.string().url("Url inválida"),
});

export function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iUserRegisterData>({
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
      <Input
        label="Email"
        type="text"
        errorMessage={errors.email}
        register={register("email")}
        placeholder={"Digite seu email"}
        required
      />
      <InputPassword
        label="Senha"
        errorMessage={errors.password}
        register={register("password")}
        placeholder="Digite sua senha"
        required
      />
      <InputPassword
        label="Confirmar senha"
        errorMessage={errors.confirmPassword}
        register={register("confirmPassword")}
        placeholder="Digite novamente sua senha"
        required
      />
      <Input
        label="Bio"
        type="text"
        errorMessage={errors.bio}
        register={register("bio")}
        placeholder={"Escreva um pouco sobre você"}
      />
      <Input
        label="Foto de perfil"
        type="text"
        errorMessage={errors.urlProfile}
        register={register("urlProfile")}
        placeholder={"Cole aqui o link para a sua foto de perfil"}
      />
      <button id="bttn_submit" type="submit">Enviar</button>
    </FormInputStyle>
  );
}
