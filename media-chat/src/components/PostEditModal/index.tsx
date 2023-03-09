import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";

export function PostEditModal() {
  const { setIsOpened } = useContext(PostsContext);
  return (
    <div>
      <button
        onClick={() => {
          setIsOpened(false);
        }}
      >
        X
      </button>
      <p>Modal edit post</p>
    </div>
  );
}
