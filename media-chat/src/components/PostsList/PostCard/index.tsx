import { IPost } from "../../../providers/PostsContext/@types";
import { BiEdit, BiCommentDetail } from "react-icons/bi";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { PostComments } from "../PostComments";

interface IPostCardProps {
  post: IPost;
}

export const PostCard = ({ post }: IPostCardProps) => {
  const { setIsOpened, isOpenedComments, setIsOpenedComments, commentsRead } =
    useContext(PostsContext);
  return (
    <li>
      <div>
        <button
          type="button"
          onClick={() => {
            setIsOpened(true);
          }}
        >
          <BiEdit />
        </button>
        <img src={post.user.avatar_url} />
        <h2>{post.user.name}</h2>
      </div>
      <div>
        <img src={post.thumbnail} alt={post.title} />
        <h2>{post.title}</h2>
        <p>{post.content}</p>
        <p>{post.where}</p>
        <p>{post.rating}</p>
      </div>
      <div>
        <button>
          <IoMdHeartEmpty />
        </button>
        <button
          onClick={() => {
            console.log();
            commentsRead(post.id);
            setIsOpenedComments(true);
          }}
        >
          <BiCommentDetail />
        </button>
        <button>
          <BsBookmark />
        </button>
      </div>
      {isOpenedComments && <PostComments post={post} />}
    </li>
  );
};
