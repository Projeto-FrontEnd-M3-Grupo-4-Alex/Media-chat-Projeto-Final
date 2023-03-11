import { useContext } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { IPost } from "../../../providers/PostsContext/@types";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { IUser } from "../../../providers/UserContext/@types";
import { UserContext } from "../../../providers/UserContext/UserContext";

interface IPostsLikeProps {
  post: IPost;
  user?: IUser;
}

export function PostsLike({ post }: IPostsLikeProps) {
  const { updateLikePost, updateDeslikePost } = useContext(PostsContext);
  const { user } = useContext(UserContext);
  console.log(post.likesPost); //preciso verificar melhor like true ou false. inverter renderização condicional //

  return (
    <>
      {post.likesPost.some((like) => user?.id === like.userId) ? (
        <>
          <span>{post.likesPost.length}</span>
          <button
            onClick={() => {
              updateDeslikePost(post.likesPost);
            }}
          >
            <IoMdHeart />
          </button>
        </>
      ) : (
        <>
          <span>{post.likesPost.length}</span>
          <button
            onClick={() => {
              updateLikePost(post.id);
            }}
          >
            <IoMdHeartEmpty />
          </button>
        </>
      )}
    </>
  );
}
