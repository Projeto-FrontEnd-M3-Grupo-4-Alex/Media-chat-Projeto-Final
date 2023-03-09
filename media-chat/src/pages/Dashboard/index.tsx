import { SearchForm } from "../../components/SearchForm";
<<<<<<< HEAD
import userImage from "../../assets/userImage.svg"
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
=======
import userImage from "../../assets/userImage.svg";
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { PostEditModal } from "../../components/PostEditModal";
import { PostsList } from "../../components/PostsList";
>>>>>>> 57fa598a5780dfe92a01cab5bbcc8cd51612b3ce
import { UserModal } from "../../components/UserModal";
import { StyledUserDiv } from "./style";
import { PostsList } from "../../components/PostsList";
import { PostEditModal } from "../../components/PostEditModal";

export function Dashboard() {
<<<<<<< HEAD
  const { profileOpenModal, setProfileOpenModal, isOpened} = useContext(PostsContext)
=======
  const { profileOpenModal, setProfileOpenModal, isOpened } =
    useContext(PostsContext);
>>>>>>> 57fa598a5780dfe92a01cab5bbcc8cd51612b3ce
  return (
    <>
      <StyledUserDiv>
        <SearchForm />
        <div className="profile">
          <h1>User name</h1>
          <img
            src={userImage}
            onClick={() => setProfileOpenModal(true)}
            alt="userImage"
          />
        </div>
      </StyledUserDiv>

<<<<<<< HEAD
  {isOpened && <PostEditModal />}
      <PostsList />
      
</>
  )
}





=======
      {profileOpenModal ? <UserModal /> : null}

      {isOpened && <PostEditModal />}
      <PostsList />
    </>
  );
}
>>>>>>> 57fa598a5780dfe92a01cab5bbcc8cd51612b3ce
