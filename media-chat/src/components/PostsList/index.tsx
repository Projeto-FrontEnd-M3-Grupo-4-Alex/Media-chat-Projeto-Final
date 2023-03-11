import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { PostCard } from "./PostCard";
import { StyledPostList } from "./style";

export function PostsList() {
  const { posts} = useContext(PostsContext);
  return (
    <StyledPostList>
      {posts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </StyledPostList>
  );
}
