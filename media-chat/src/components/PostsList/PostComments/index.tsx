import { useContext, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { BsFillTrashFill } from "react-icons/bs";
import { IoMdHeartEmpty } from "react-icons/io";
import { IComment, IPost } from "../../../providers/PostsContext/@types";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { IUser } from "../../../providers/UserContext/@types";
import { CommentForm } from "./CommentForm";
import { StyledPostComments } from "./style";

interface ICommentPostProps {
  post: IPost;
  comments: IComment[];
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
  setIsOpenedComments: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser;
}

export function PostComments({
  post,
  comments,
  setComments,
  user,
}: ICommentPostProps) {
  const { deleteComment } = useContext(PostsContext);
  return (
    <StyledPostComments>
      <CommentForm post={post} comments={comments} setComments={setComments} />
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <div>
              <img src={comment.user.avatar_url} alt={comment.user.name} />
              <p>{comment.user.name}</p>
            </div>
            <p>{comment.content}</p>
            {user.id == comment.userId && (
              <button
                onClick={() => deleteComment(comment.id, comments, setComments)}
              >
                <BsFillTrashFill />
              </button>
            )}
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
