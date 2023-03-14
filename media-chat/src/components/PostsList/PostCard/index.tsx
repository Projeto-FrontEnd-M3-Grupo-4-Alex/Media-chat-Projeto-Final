import { IComment, IPost } from "../../../providers/PostsContext/@types";
import { BiEdit, BiCommentDetail } from "react-icons/bi";
import { BsBookmark } from "react-icons/bs";
import { useContext, useState } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { PostComments } from "../PostComments";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { StyledPostCard } from "./style";
import { PostsLike } from "../PostsLike";
import { FavoritePostContext } from "../../../providers/FavoritePostContext/FavoritePostContex";
import { Rating } from "@mui/material";

interface IPostCardProps {
  post: IPost;
}

export const PostCard = ({ post }: IPostCardProps) => {
  const { setPost, commentsRead } = useContext(PostsContext);
  const { user } = useContext(UserContext);

  const { addFavoritePost } = useContext(FavoritePostContext);
  const [isOpenedComments, setIsOpenedComments] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);

  return (
    <StyledPostCard>
      <div className="ContainerInfoUser">
        <div>
          <img src={post.user.avatar_url} />
          <h2>{post.user.name}</h2>
        </div>

        {Number(user?.id) == post.userId ? (
          <button
            type="button"
            onClick={() => {
              setPost(post);
            }}
            className="edit_post-button"
          >
            <BiEdit />
          </button>
        ) : null}
      </div>
      <div className="ContainerInfoPost">
        {post.thumbnail ? (
          <img className="card_image" src={post.thumbnail} alt={post.title} />
        ) : null}
        <div className="info_post">
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>
            <span> Aonde assistir:</span> {post.where}
          </p>
          <Rating
            name="simple-controlled"
            value={Number(post?.rating)}
            readOnly
          />
        </div>
      </div>
      <div className="ContainerButtonsPost">
        <PostsLike post={post} />
        <button
          onClick={() => {
            console.log();
            commentsRead(post.id, setComments);
            setIsOpenedComments(!isOpenedComments);
          }}
        >
          <BiCommentDetail />
        </button>
        <button
          onClick={() => {
            addFavoritePost(user?.id as number, post);
          }}
        >
          <BsBookmark />
        </button>
      </div>
      {isOpenedComments && (
        <PostComments
          post={post}
          comments={comments}
          setComments={setComments}
          setIsOpenedComments={setIsOpenedComments}
        />
      )}
    </StyledPostCard>
  );
};
