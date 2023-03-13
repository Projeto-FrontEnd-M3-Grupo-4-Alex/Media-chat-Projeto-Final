import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TbSend } from "react-icons/tb";
import { IComment, IPost } from "../../../../providers/PostsContext/@types";
import { PostsContext } from "../../../../providers/PostsContext/PostsContext";
import { IUser } from "../../../../providers/UserContext/@types";
import { UserContext } from "../../../../providers/UserContext/UserContext";

interface ICreateCommentPostFormData {
  userId: number;
  postId: number;
  content: string;
  likesComment?: [];
  id: number;
  user: IUser;
}

interface ICommentFormProps {
  post: IPost;
  comments: IComment[];
  setComments: React.Dispatch<React.SetStateAction<IComment[]>>;
}

export function CommentForm({
  post,
  comments,
  setComments,
}: ICommentFormProps) {
  const { createComments } = useContext(PostsContext);
  const { user } = useContext(UserContext);

  const { register, handleSubmit } = useForm<ICreateCommentPostFormData>({});

  const onSubmitComment = (data: ICreateCommentPostFormData) => {
    event?.preventDefault();
    if (user) {
      const newData = {
        ...data,
        userId: Number(user.id),
        postId: Number(post.id),
      };
      createComments(newData, comments, setComments);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmitComment)}>
      <fieldset>
        <input type="text" placeholder="comentário" {...register("content")} />
        <button type="submit">
          <TbSend />
        </button>
      </fieldset>
    </form>
  );
}
