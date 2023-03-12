import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { TextArea } from "../TextArea";
import { Input } from "../Input";
import { Select } from "../Select";
import { Rating, Typography } from "@mui/material";
import { StyledEditPostForm } from "./style";
import { InputWithoutMUI } from "../InputWithoutMUI";
import { TextAreaWithoutMUI } from "../TextAreaWIthoutMUI";
import { SelectWithoutMUI } from "../SelectWithoutMUI";

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
  const { PostUpdate, post, setPost } = useContext(PostsContext);
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
        <form action="" onSubmit={handleSubmit(onSubmitForm)}>
          <InputWithoutMUI
            label="Título do post"
            id="title"
            register={register("title")}
            placeholder={"Digite o título do seu post"}
          />
          <TextAreaWithoutMUI
            label="Conte sobre o que você está assistindo"
            register={register("content")}
            placeholder={"Digite o conteúdo do seu post aqui"}
            id={"content"}
          />

          <InputWithoutMUI
            label="Imagem do post"
            id="thumbnail"
            register={register("thumbnail")}
            placeholder={"Cole a url de uma imagem para ser adicionada no post"}
          />
          <InputWithoutMUI
            label="Está disponível em alguma plataforma ? Conte para seus amigos"
            id={"where"}
            register={register("where")}
            placeholder={
              "Informe as plataformas em que essa mídia está disponível"
            }
          />
          <SelectWithoutMUI
            label="Selecione a categoria da mídia"
            register={register("category")}
            id="category"
          />
          <InputWithoutMUI
            label="Adicione tags à esse post"
            id="tags"
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
          <button type="submit">Editar</button>
        </form>
      </div>
    </StyledEditPostForm>
  );
}
