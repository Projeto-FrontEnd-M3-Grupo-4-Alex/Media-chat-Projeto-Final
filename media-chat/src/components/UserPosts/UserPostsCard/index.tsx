import { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";
import { StyledList } from "./style";

interface iUserPostsCardProps {
  thumbnail: string;
  content: string;
  id: number;
}

export function UserPostsCard({ thumbnail, content, id }: iUserPostsCardProps) {
  const { PostDelete } = useContext(PostsContext);

  async function deletePost() {
    await PostDelete(id);
  }

  return (
    <StyledList>
      <div className="userPostDiv">
        <img src={thumbnail} className="userAddedImage" alt="" />
        <p>{content}</p>
      </div>
      <button className="userPostDeleteBttn" onClick={deletePost}>
        <BsFillTrashFill size={27} />
      </button>
      <Link to={`/post/${id}`}>Ver mais</Link>
    </StyledList>
  );
}
