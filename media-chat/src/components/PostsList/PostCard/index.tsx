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

interface IPostCardProps {
  post: IPost;
}

export const PostCard = ({ post }: IPostCardProps) => {
  const { setPost, commentsRead } = useContext(PostsContext);
  const { user } = useContext(UserContext);

  const { addFavoritePost } = useContext(FavoritePostContext) 
  const [isOpenedComments, setIsOpenedComments] = useState(false);
  const [comments, setComments] = useState<IComment[]>([]);
  return (
    <StyledPostCard>
      <div className="ContainerInfoUser">
        <img src={post.user.avatar_url} />
        <h2>{post.user.name}</h2>
        {Number(user?.id) == post.userId ? (
          <button
            type="button"
            onClick={() => {
              setPost(post);
            }}
          >
            <BiEdit />
          </button>
        ) : null}
      </div>
      <div className="ContainerInfoPost">
        <img src={post.thumbnail} alt={post.title} />
        <div>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
          <p>{post.where}</p>
          <p>{post.rating}</p>
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
        <button>
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
