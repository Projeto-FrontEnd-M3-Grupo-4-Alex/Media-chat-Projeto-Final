import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { PostCard } from "./PostCard";
import { StyledPostList } from "./style";

export function PostsList() {
  const { searchPosts} = useContext(PostsContext);
  return (
    <StyledPostList>
      {searchPosts?.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </StyledPostList>
  );
}
