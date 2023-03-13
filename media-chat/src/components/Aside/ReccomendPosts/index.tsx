import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { UserPostsCard } from "../../UserPosts/UserPostsCard";

export function RecomendPosts() {
  const { recommendedPosts } = useContext(PostsContext);

  const recommendList = recommendedPosts();

  return (
    <div>
      <h2>Recomendações</h2>
      {recommendList ? (
        <ul>
          {recommendList.map((post) => (
            <UserPostsCard
              thumbnail={post.thumbnail}
              content={post.content}
              id={post.id}
              key={post.id}
            />
          ))}
        </ul>
      ) : (
        <h3>Não há nenhuma recomendação no momento</h3>
      )}
    </div>
  );
}
