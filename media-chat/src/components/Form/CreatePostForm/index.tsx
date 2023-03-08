import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { TextArea } from "../TextArea";
import { Input } from "../Input";
import { Select } from "../Select";

interface iCreatePostFormData {
  thumbnail?: string;
  title: string;
  content: string;
  tags?: string;
  category: string;
  where: string;
  rating?: string;
}

const schema = yup.object({
  thumbnail: yup.string().url("Url inválida"),
  title: yup.string().required("Essa postagem necessita de um título"),
  content: yup.string().required("Essa postagem necessita de um conteúdo"),
  tags: yup.string(),
  where: yup
    .string()
    .required("É necessário informar em qual plataforma a mídia foi assistida"),
  rating: yup.string(),
  category: yup.string().required("Selecione uma das categorias abaixo"),
});

export function CreateFormPost() {
  const { PostCreate } = useContext(PostsContext);
  const { user } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCreatePostFormData>({
    resolver: yupResolver(schema),
  });

  async function onSubmitForm(data: iCreatePostFormData) {
    if (user) {
      const newData = { ...data, userId: Number(user.id) };
      PostCreate(newData);
    }
  }

  return (
    <div role={"dialog"}>
      <TextArea
        label="Conte sobre o que você está assistindo"
        errorMessage={errors.content}
        register={register("content")}
        placeholder={"Digite o conteúdo do seu post aqui"}
      />
      <Input
        label="Título do post"
        type="text"
        errorMessage={errors.title}
        register={register("title")}
        placeholder={"Digite o título do seu post"}
      />
      <Input
        label="Imagem do post"
        type="text"
        errorMessage={errors.thumbnail}
        register={register("thumbnail")}
        placeholder={"Cole a url de uma imagem para ser adicionada no post"}
      />
      <Input
        label="Está disponível em alguma plataforma ? Conte para seus amigos"
        type="text"
        errorMessage={errors.where}
        register={register("where")}
        placeholder={"Informe as plataformas em que essa mídia está disponível"}
      />
      <Select
        label="Selecione a categoria da mídia"
        errorMessage={errors.category}
        register={register("category")}
      />
      <Input
        label="Adicione tags à esse post"
        type="text"
        errorMessage={errors.tags}
        register={register("where")}
        placeholder={"Informe as plataformas em que essa mídia está disponível"}
      />
    </div>
  );
}
