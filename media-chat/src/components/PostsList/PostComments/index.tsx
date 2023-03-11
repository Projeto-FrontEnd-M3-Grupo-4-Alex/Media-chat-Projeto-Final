import { useContext } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IPost } from "../../../providers/PostsContext/@types";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { CommentForm } from "./CommentForm";
import { StyledPostComments } from "./style";

interface ICommentPostProps {
  post: IPost;
}

export function PostComments({ post }: ICommentPostProps) {
  const { setIsOpenedComments, comments } = useContext(PostsContext);

  return (
    <StyledPostComments>
      <button
        onClick={() => {
          setIsOpenedComments(null);
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
            <span>
              {comment.likesComment.length}
              <button>
                <IoMdHeartEmpty />
              </button>
            </span>
          </li>
        ))}
      </ul>
    </StyledPostComments>
  );
}
