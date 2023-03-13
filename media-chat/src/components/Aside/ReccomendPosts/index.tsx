import { useContext } from "react";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { RecommendCard } from "./RecommendCard";
import { StyledRecommendPosts } from "./style";

export function RecomendPosts() {
  const { recommendList } = useContext(PostsContext);

  return (
    <StyledRecommendPosts>
      <h2>Recomendações</h2>
      {recommendList.length > 0 ? (
        <ul>
          {recommendList.map((post) => (
            <RecommendCard
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
    </StyledRecommendPosts>
  );
}
