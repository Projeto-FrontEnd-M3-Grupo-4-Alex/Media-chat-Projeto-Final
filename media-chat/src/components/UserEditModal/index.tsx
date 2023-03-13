import { useContext } from "react";
import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../providers/UserContext/UserContext";
import { yupResolver } from "@hookform/resolvers/yup";
import { IUpdateUserFormValues } from "../../providers/UserContext/@types";
import { StyledUserEditDiv } from "./style";

const schema = yup
  .object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().required("Email é obrigatório"),
    password: yup.string().required("Senha é obrigatório"),

  })
  .required();

interface IuserEditModalProps {
  setProfileEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserEditModal = ({ setProfileEditModal }: IuserEditModalProps) => {
  const { userUpdate, userDelete, user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IUpdateUserFormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      name: user?.name,
      email: user?.email,
      avatar_url: user?.avatar_url,
    },
  });

  const submit: SubmitHandler<IUpdateUserFormValues> = (formData) => {
    userUpdate(formData);
    setProfileEditModal(false);
  };

  return (
    <StyledUserEditDiv>
      <h2>Editar Perfil</h2>
      <button
        className="closeBttn"
        onClick={() => {
          setProfileEditModal(false);
        }}
      >
        X
      </button>
      <form onSubmit={handleSubmit(submit)}>
      
        <input type="text" placeholder="Name" {...register("name")} />
        <p>{errors.name?.message}</p>

        <input type="text" placeholder="E-mail" {...register("email")} />
        <p>{errors.email?.message}</p>
        <input type="text" placeholder="Password" {...register("password")} />
        <p>{errors.password?.message}</p>
        <input
          type="text"
          placeholder="URL profile"
          {...register("avatar_url")}
        />
        <p>{errors.avatar_url?.message}</p>
        <div className = "buttons">
        <button type="submit" className = "updateBttn">Salvar</button>
        <button
          type="button" className = "deleteBttn"
          onClick={async () => {
            await userDelete();
            setProfileEditModal(false);
          }}
        >
          Excluir perfil
        </button>
        </div>
      </form>
    </StyledUserEditDiv>
  );
};
