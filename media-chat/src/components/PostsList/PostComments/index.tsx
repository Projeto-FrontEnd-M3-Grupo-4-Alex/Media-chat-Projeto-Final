import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";

export function PostComments() {
  const { setIsOpenedComments, comments } = useContext(PostsContext);
  console.log(comments);

  const submit = () => {
    console.log("clicou");
  };
  return (
    <div>
      <button
        onClick={() => {
          setIsOpenedComments(false);
        }}
      >
        X
      </button>
      <form onSubmit={submit}>
        <fieldset>
          <input placeholder="comentário..." />
          <button type="submit">comentar</button>
        </fieldset>
      </form>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div>
              <img src={comment.user.avatar_url} alt={comment.user.name} />
              <p>{comment.user.name}</p>
            </div>
            <p>{comment.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
