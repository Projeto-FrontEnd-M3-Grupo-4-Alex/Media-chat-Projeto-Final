import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { PostCard } from "./PostCard";

export function PostsList() {
  const { posts } = useContext(PostsContext);
  return (
    <ul>
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}
