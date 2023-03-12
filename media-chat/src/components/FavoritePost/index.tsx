import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FavoritePostContext } from "../../providers/FavoritePostContext/FavoritePostContex";

/* export const FavoritePost = () => {
  const { post } = useContext(PostsContext);
  const {favoritePostList, setFavoritePostList } = useContext(FavoritePostContext)
 

   return (
    <div>
      {favoritePostList.map((post) => (
        <li key={post.id}>
          <img src={post.thumbnail} alt="postImage" />
          <p>{post.content}</p>
          <RiDeleteBin5Line onClick = {() =>{setFavoritePostList([])}}/>
           <button>Ver mais</button>
        </li>
      ))}
    </div>
  );
};
   */