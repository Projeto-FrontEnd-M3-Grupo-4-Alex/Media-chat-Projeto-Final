import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { UserContext } from "../../providers/UserContext/UserContext";
import { IUpdateUserFormValues } from "../../providers/UserContext/@types";
import { StyledUserEditDiv } from "./style";

interface IuserEditModalProps {
  setProfileEditModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const UserEditModal = ({ setProfileEditModal }: IuserEditModalProps) => {
  const { userUpdate, userDelete, user } = useContext(UserContext);

  const { register, handleSubmit } = useForm<IUpdateUserFormValues>({
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
        className="closeButton"
        onClick={() => {
          setProfileEditModal(false);
        }}
      >
        X
      </button>
      <form onSubmit={handleSubmit(submit)}>
        <div>
          <input type="text" placeholder="Name" {...register("name")} />
        </div>

        <input type="text" placeholder="E-mail" {...register("email")} />

        <input type="text" placeholder="Password" {...register("password")} />

        <input
          type="text"
          placeholder="URL profile"
          {...register("avatar_url")}
        />

        <div className="buttons">
          <button type="submit" className="updateBttn ">
            Salvar
          </button>
          <button
            type="button"
            className="deleteBttn"
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
