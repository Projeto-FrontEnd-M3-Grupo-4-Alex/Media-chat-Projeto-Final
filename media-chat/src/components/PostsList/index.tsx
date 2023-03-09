import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { PostCard } from "./PostCard";

export function PostsList() {
  const { newPostList } = useContext(PostsContext);
  return (
    <ul>
      {newPostList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </ul>
  );
}
