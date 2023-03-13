import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledPostDiv } from "./style";
import { UserPostsCard } from "./UserPostsCard";

export function UserPosts() {
  const { posts } = useContext(PostsContext);
  const { user } = useContext(UserContext);
  const filteredPostsUser = posts?.filter((post) => post.userId === user?.id);

  return (
    <StyledPostDiv>
      <h2 className = "userPostTitle">Suas postagens</h2>
      {filteredPostsUser?.length === 0 ? (
        <h3>Você não realizou nenhuma postagem ainda</h3>
      ) : (
        <ul>
          {filteredPostsUser?.map((post) => (
            <UserPostsCard
              thumbnail={post.thumbnail}
              content={post.content}
              id={post.id}
              key={post.id}
            />
          ))}
        </ul>
      )}
    </StyledPostDiv>
  );
}
