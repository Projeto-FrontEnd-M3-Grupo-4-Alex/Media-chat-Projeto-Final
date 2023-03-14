import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledFavoritePostDiv } from "./style";

import { FavoriteCard } from "./FavoriteCard";

export const FavoritePost = () => {
  const { favoritePostList } = useContext(UserContext);

  return (
    <StyledFavoritePostDiv>
      {favoritePostList.map((post) => (
        <FavoriteCard post={post} key={post.id} />
      ))}
    </StyledFavoritePostDiv>
  );
};
