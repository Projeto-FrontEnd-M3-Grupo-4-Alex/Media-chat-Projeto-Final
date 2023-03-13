import { useContext } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { PostCard } from "../../components/PostsList/PostCard";

export function PostPage() {
  const { postId } = useParams();
  const { posts } = useContext(PostsContext);

  const postFound = posts && posts.find((post) => post.id == Number(postId));

  return (
    <div>
      <Link to={"/dashboard"}>Voltar</Link>
      {postFound ? <PostCard post={postFound} /> : null}
    </div>
  );
}
