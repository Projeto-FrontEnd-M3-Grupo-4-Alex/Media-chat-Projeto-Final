import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { PostCard } from "./PostCard";
import { StyledPostList } from "./style";

export function PostsList() {
<<<<<<< HEAD
  const { newPostList } = useContext(PostsContext);
  return (
    <ul>
      {newPostList.map((post) => (
=======
  const { searchPosts} = useContext(PostsContext);
  return (
    <StyledPostList>
      {searchPosts?.map((post) => (
>>>>>>> be59923a74cb071550a257a8be0c09491fdab363
        <PostCard key={post.id} post={post} />
      ))}
    </StyledPostList>
  );
}
