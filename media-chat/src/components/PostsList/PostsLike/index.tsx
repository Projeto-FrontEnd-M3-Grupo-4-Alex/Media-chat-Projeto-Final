import { useContext, useState } from "react";
import { IoMdHeart, IoMdHeartEmpty } from "react-icons/io";
import { IPost } from "../../../providers/PostsContext/@types";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { IUser } from "../../../providers/UserContext/@types";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { StyledLikeButton } from "./style";

interface IPostsLikeProps {
  post: IPost;
  user?: IUser;
}

export function PostsLike({ post }: IPostsLikeProps) {
  const { updateDeslikePost, updateLikePost, likeArray } =
    useContext(PostsContext);
  const { user } = useContext(UserContext);
  const [islike, setislike] = useState(
    likeArray.some((like) => user?.id == like.userId && post.id == like.postId)
  );
  const [countLike, setcountlike] = useState(
    post.likesPost ? post.likesPost.length : 0
  );

  return (
    <>
      <StyledLikeButton
        onClick={() => {
          if (islike) {
            updateDeslikePost(post.likesPost);
            setcountlike(countLike - 1);
            setislike(false);
          } else {
            updateLikePost(post.id);
            setcountlike(countLike + 1);
            setislike(true);
          }
        }}
      >
        <span>
          {countLike} {islike ? <IoMdHeart /> : <IoMdHeartEmpty />}
        </span>
      </StyledLikeButton>
    </>
  );
}
