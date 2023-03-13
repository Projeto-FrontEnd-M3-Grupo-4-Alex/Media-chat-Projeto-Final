import { useContext } from "react";
import { BsFillTrashFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PostsContext } from "../../../providers/PostsContext/PostsContext";

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
    <li>
      <button onClick={deletePost}>
        <BsFillTrashFill />
      </button>
      <div>
        <img src={thumbnail} alt="" />
        <p>{content}</p>
      </div>
      <Link to={`/post/${id}`}>Ver mais</Link>
    </li>
  );
}
