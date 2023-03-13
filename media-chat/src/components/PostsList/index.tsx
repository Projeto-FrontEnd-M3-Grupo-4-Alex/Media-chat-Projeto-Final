import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { PostCard } from "./PostCard";
import { StyledPostList } from "./style";

export function PostsList() {
  const { newPostList } = useContext(PostsContext);

  return (
    <StyledPostList>
      {newPostList.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </StyledPostList>
  );
}
