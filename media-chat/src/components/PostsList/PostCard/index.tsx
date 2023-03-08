import { IPost } from "../../../providers/PostsContext/@types";

interface IPostCardProps {
  post: IPost;
}

export const PostCard = ({ post }: IPostCardProps) => {
  return (
    <li>
      <div>
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
    </li>
  );
};
