import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { TextArea } from "../TextArea";
import { Input } from "../Input";
import { Select } from "../Select";
import { Rating, Typography } from "@mui/material";
import { StyledEditPostForm } from "./style";

interface iEditPostFormData {
  thumbnail?: string;
  title: string;
  content: string;
  tags?: string;
  category: string;
  where: string;
  rating?: string;
  id: number;
  userId: number;
}

export function EditPostForm() {
  const { PostUpdate, post, setPost, PostDelete } = useContext(PostsContext);
  const [ratingValue, setRatingValue] = useState<number | null>(
    Number(post?.rating)
  );

  const { register, handleSubmit } = useForm<iEditPostFormData>({
    defaultValues: {
      thumbnail: post?.thumbnail,
      content: post?.content,
      tags: post?.tags,
      category: post?.category,
      where: post?.where,
      rating: post?.rating,
      title: post?.title,
    },
  });

  async function onSubmitForm(data: iEditPostFormData) {
    if (post) {
      const newData = { ...data, rating: String(ratingValue) };
      PostUpdate(post.id, newData);
      setPost(null);
    }
  }

  return (
    <StyledEditPostForm role={"dialog"}>
      <div>
        <button onClick={() => setPost(null)}>X</button>
        <h2>Edite a sua postagem</h2>
        <form onSubmit={handleSubmit(onSubmitForm)}>
          <TextArea
            label="Conte sobre o que você está assistindo"
            type="multiline"
            register={register("content")}
            placeholder={"Digite o conteúdo do seu post aqui"}
          />
          <Input
            label="Título do post"
            type="text"
            register={register("title")}
            placeholder={"Digite o título do seu post"}
          />
          <Input
            label="Imagem do post"
            type="text"
            register={register("thumbnail")}
            placeholder={"Cole a url de uma imagem para ser adicionada no post"}
          />
          <Input
            label="Está disponível em alguma plataforma ? Conte para seus amigos"
            type="text"
            register={register("where")}
            placeholder={
              "Informe as plataformas em que essa mídia está disponível"
            }
          />
          <Select
            label="Selecione a categoria da mídia"
            register={register("category")}
          />
          <Input
            label="Adicione tags à esse post"
            type="text"
            register={register("tags")}
            placeholder={"Ex: #naruto, #ninja, #drama, #comédia"}
          />
          <Typography component="legend">Quer adicionar uma nota ?</Typography>
          <Rating
            name="simple-controlled"
            value={ratingValue}
            onChange={(event, newValue) => {
              setRatingValue(newValue);
            }}
          />
          <button type="button" onClick={() => PostDelete(post?.id)}>
            Excluir
          </button>
          <button type="submit">Editar</button>
        </form>
      </div>
    </StyledEditPostForm>
  );
}
