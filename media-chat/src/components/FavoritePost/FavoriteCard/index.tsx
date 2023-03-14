import { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { IFavoritePost } from "../../../providers/FavoritePostContext/@types";
import { FavoritePostContext } from "../../../providers/FavoritePostContext/FavoritePostContex";

import { StyledFavoriteCard } from "./style";

interface iFavoriteCardProps {
  post: IFavoritePost;
}

export function FavoriteCard({ post }: iFavoriteCardProps) {
  const { removeFavoritePostList } = useContext(FavoritePostContext);
  return (
    <StyledFavoriteCard key={post.id}>
      <div className="postInfo">
        <img src={post.thumbnail} alt="postImage" />
        <p className="favoritePostContent">{post.content}</p>
      </div>
      <button
        className="postDeleteBttn"
        onClick={() => {
          removeFavoritePostList(post);
        }}
      >
        <BsFillTrashFill size={27} />
      </button>
      <Link to={`/post/${post.id}`}>Ver mais</Link>
    </StyledFavoriteCard>
  );
}
