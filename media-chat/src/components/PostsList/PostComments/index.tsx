import { useContext } from "react";
import { IPost } from "../../../providers/PostsContext/@types";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { CommentForm } from "./CommentForm";

interface ICommentPostProps {
  post: IPost;
}

export function PostComments({ post }: ICommentPostProps) {
  const { setIsOpenedComments, comments } = useContext(PostsContext);

  return (
    <div>
      <button
        onClick={() => {
          setIsOpenedComments(false);
        }}
      >
        X
      </button>
      <CommentForm post={post} />
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
