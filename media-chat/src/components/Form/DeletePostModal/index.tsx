import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";

export function DeletePostModal() {
  const { PostDelete, post, setPost } = useContext(PostsContext);

  async function deletePost() {
    if (post) {
      PostDelete(post.id);
      setPost(null);
    }
  }

  return (
    <div role={"dialog"}>
      <h2>Tem certeza que deseja excluir esse post ?</h2>
      <div className="buttons__container">
        <button onClick={() => setPost(null)}>Cancelar</button>
        <button onClick={deletePost}>Excluir</button>
      </div>
    </div>
  );
}
