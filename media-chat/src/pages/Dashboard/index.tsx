import { useContext } from "react";
import { PostEditModal } from "../../components/PostEditModal";
import { PostsList } from "../../components/PostsList";
import { PostsContext } from "../../providers/PostsContext/PostsContext";

export function Dashboard() {
  const { isOpened } = useContext(PostsContext);
  return (
    <>
      {isOpened && <PostEditModal />}
      <PostsList />
    </>
  );
}
