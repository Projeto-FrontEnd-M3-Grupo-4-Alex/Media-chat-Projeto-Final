import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledFavoritePostDiv } from "./style";
import { FavoritePostContext } from "../../providers/FavoritePostContext/FavoritePostContex";
import { Link } from "react-router-dom";
import { BsFillTrashFill } from "react-icons/bs";

export const FavoritePost = () => {
  const { favoritePostList } = useContext(UserContext);
  const { removeFavoritePostList } = useContext(FavoritePostContext);

  return (
    <StyledFavoritePostDiv>
      {favoritePostList.map((post) => (
        <li key={post.id}>
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
        </li>
      ))}
    </StyledFavoritePostDiv>
  );
};
