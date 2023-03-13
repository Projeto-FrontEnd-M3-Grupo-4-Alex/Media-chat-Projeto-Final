import { IoMdHeartEmpty } from "react-icons/io";
import { IComment, IPost } from "../../../providers/PostsContext/@types";
import { CommentForm } from "./CommentForm";
import { StyledPostComments } from "./style";

interface ICommentPostProps {
  post: IPost;
  comments: IComment[];
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
  setIsOpenedComments: React.Dispatch<React.SetStateAction<boolean>>;
}

export function PostComments({
  post,
  comments,
  setComments,
  setIsOpenedComments,
}: ICommentPostProps) {
  return (
    <StyledPostComments>
      <button
        onClick={() => {
          setIsOpenedComments(false);
        }}
      >
        X
      </button>
      <CommentForm post={post} comments={comments} setComments={setComments} />
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div>
              <img src={comment.user.avatar_url} alt={comment.user.name} />
              <p>{comment.user.name}</p>
            </div>
            <p>{comment.content}</p>
            <span>
              {comment.likesComment ? comment.likesComment.length : 0}
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
