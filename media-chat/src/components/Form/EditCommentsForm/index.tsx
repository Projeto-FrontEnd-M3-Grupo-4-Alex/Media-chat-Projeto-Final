import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { useForm } from "react-hook-form";
import { IUser } from "../../../providers/UserContext/@types";
import { TextArea } from "../TextArea";

interface iEditCommentFormData {
  content: string;
  id: number;
  postId: number;
  userId: number;
  user: IUser;
}

export function EditCommentForm() {
  const { editComments, setComment, comment } = useContext(PostsContext);
  const { register, handleSubmit } = useForm<iEditCommentFormData>({
    defaultValues: {
      content: comment?.content,
    },
  });

  function onSubmitForm(data: iEditCommentFormData) {
    if (comment) {
      editComments(comment.id, data);
      setComment(null);
    }
  }

  return (
    <div role={"dialog"}>
      <button onClick={() => setComment(null)}>X</button>
      <h2>Editar comentário</h2>
      <form action="" onSubmit={handleSubmit(onSubmitForm)}>
        <TextArea
          label={"Edite seu comentário"}
          register={register("content")}
          placeholder="Escreva seu comentário aqui"
        />
        <button type="submit">Editar</button>
      </form>
    </div>
  );
}
