import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledFavoritePostDiv } from "./style";
import { FavoritePostContext } from "../../providers/FavoritePostContext/FavoritePostContex";

 export const FavoritePost = () => {

  const {favoritePostList} = useContext(UserContext);
  const{removeFavoritePostList} = useContext(FavoritePostContext);
 

   return (
    <StyledFavoritePostDiv>
      {favoritePostList.map((post) => (
        <li key={post.id}>
          <div className = "postInfo">
          <img src={post.thumbnail} alt="postImage" />
          <p className = "favoritePostContent">{post.content}</p>
          </div>
         <button className = "postDeleteBttn" onClick = {() =>{removeFavoritePostList(post)}}>
         <RiDeleteBin5Line size = {27} /></button>
           <button className = "moreAboutBttn">Ver mais</button>
        </li>
      ))}
    </StyledFavoritePostDiv>
  );
};
   