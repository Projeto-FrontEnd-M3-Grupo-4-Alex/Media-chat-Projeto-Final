import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";

export function DeleteCommentModal() {
  const { deleteComment, comment, setComment } = useContext(PostsContext);

  async function deleteFunction() {
    if (comment) {
      deleteComment(comment.id);
      setComment(null);
    }
  }

  return (
    <div role={"dialog"}>
      <h2>Tem certeza que deseja excluir esse comentário ?</h2>
      <div className="buttons__container">
        <button onClick={() => setComment(null)}>Cancelar</button>
        <button onClick={deleteFunction}>Excluir</button>
      </div>
    </div>
  );
}
