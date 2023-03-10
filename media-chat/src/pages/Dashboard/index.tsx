import { SearchForm } from "../../components/SearchForm";
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { PostEditModal } from "../../components/PostEditModal";
import { PostsList } from "../../components/PostsList";
import { UserModal } from "../../components/UserModal";
import { StyledUserDiv } from "./style";
import { UserContext } from "../../providers/UserContext/UserContext";

export function Dashboard() {
  const { profileOpenModal, setProfileOpenModal, isOpened } =
    useContext(PostsContext);

    const { user } = useContext(UserContext)
  return (
    <>
      <StyledUserDiv>
        <SearchForm />
        <div className="profile">
          <h1>{user?.name}</h1>
          <img
            src={user?.avatar_url}
            onClick={() => setProfileOpenModal(true)}
            alt="userImage"
          />
        </div>
      </StyledUserDiv>

      {profileOpenModal ? <UserModal /> : null}

      {isOpened && <PostEditModal />}
      <PostsList />
    </>
  );
}
