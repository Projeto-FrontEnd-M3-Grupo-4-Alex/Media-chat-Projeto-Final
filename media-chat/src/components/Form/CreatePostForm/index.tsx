import { useForm } from "react-hook-form"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useContext, useState } from "react"
import { PostsContext } from "../../../providers/PostsContext/PostsContext"
import { UserContext } from "../../../providers/UserContext/UserContext"
import { TextArea } from "../TextArea"
import { Input } from "../Input"
import { Select } from "../Select"
import { Rating, Typography } from "@mui/material"
import { StylePostModal } from "./style"

interface iCreatePostFormData {
  thumbnail?: string
  title: string
  content: string
  tags?: string
  category: string
  where: string
  rating?: string
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
})

export function CreateFormPost() {
  const { PostCreate, setShowCreateModal } = useContext(PostsContext)
  const { user } = useContext(UserContext)
  const [ratingValue, setRatingValue] = useState<number | null>(0)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iCreatePostFormData>({
    resolver: yupResolver(schema),
  })

  async function onSubmitForm(data: iCreatePostFormData) {
    if (user) {
      const newData = {
        ...data,
        userId: Number(user.id),
        rating: String(ratingValue),
      }
      PostCreate(newData)
      setShowCreateModal(false)
    }
  }

  return (
    <StylePostModal role={"dialog"}>
      <button id="bttn_close" onClick={() => setShowCreateModal(false)}>
        X
      </button>
      <h2>Criar uma postagem</h2>
      <form action="" onSubmit={handleSubmit(onSubmitForm)}>
        <TextArea
          label="Conte sobre o que você está assistindo"
          type="multiline"
          register={register("content")}
          placeholder={"Digite o conteúdo do seu post aqui"}
        />
        <Input
          type="text"
          label="Título do post"
          errorMessage={errors.title}
          register={register("title")}
          placeholder={"Digite o título do seu post"}
          id="title"
        />
        <Input
          type="text"
          label="Imagem do post"
          errorMessage={errors.thumbnail}
          register={register("thumbnail")}
          placeholder={"Cole a url de uma imagem para ser adicionada no post"}
          id="thumbnail"
        />
        <Input
          type="text"
          label="Está disponível em alguma plataforma ? Conte para seus amigos"
          errorMessage={errors.where}
          register={register("where")}
          placeholder={
            "Informe as plataformas em que essa mídia está disponível"
          }
          id="where"
        />
        <Select
          label="Selecione a categoria da mídia"
          errorMessage={errors.category}
          register={register("category")}
          id="category"
        />
        <Input
          type="text"
          label="Adicione tags à esse post"
          id="tags"
          errorMessage={errors.tags}
          register={register("tags")}
          placeholder={"Ex: #naruto, #ninja, #drama, #comédia"}
        />
        <Typography
          sx={{ color: "white", mt: 4, fontSize: "1rem" }}
          component="legend"
        >
          Quer adicionar uma nota ?
        </Typography>
        <Rating
          name="simple-controlled"
          value={ratingValue}
          onChange={(event, newValue) => {
            setRatingValue(newValue)
          }}
        />
        <button id="bttn_post" type="submit">Postar</button>
      </form>
    </StylePostModal>
  )
}
