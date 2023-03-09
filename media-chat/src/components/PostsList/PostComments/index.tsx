import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";

export function PostComments() {
  const { setIsOpenedComments } = useContext(PostsContext);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpenedComments(false);
        }}
      >
        X
      </button>
      <p>comments post</p>
    </div>
  );
}
