import { Link } from "react-router-dom";
import { StyledRecommendCard } from "./style";

interface iUserPostsCardProps {
  thumbnail: string;
  content: string;
  id: number;
}

export function RecommendCard({ thumbnail, content, id }: iUserPostsCardProps) {
  return (
    <StyledRecommendCard>
      <div className="post-content__container">
        <img src={thumbnail} alt="" />
        <p>{content}</p>
      </div>
      <Link to={`/post/${id}`}>Ver mais</Link>
    </StyledRecommendCard>
  );
}
