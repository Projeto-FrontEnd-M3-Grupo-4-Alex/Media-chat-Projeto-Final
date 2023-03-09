import { useContext } from "react";
import { useForm } from "react-hook-form";
import { TbSend } from "react-icons/tb";
import { IPost } from "../../../../providers/PostsContext/@types";
import { PostsContext } from "../../../../providers/PostsContext/PostsContext";
import { UserContext } from "../../../../providers/UserContext/UserContext";

interface ICreateCommentPostFormData {
  userId: number;
  postId: number;
  content: string;
  like?: [];
}

interface ICommentFormProps {
  post: IPost;
}

export function CommentForm({ post }: ICommentFormProps) {
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
      createComments(newData);
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
