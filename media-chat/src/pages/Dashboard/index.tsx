import { SearchForm } from "../../components/SearchForm";
import { useContext, useState } from "react";
import { Aside } from "../../components/Aside";
import { EditPostForm } from "../../components/Form/EditPostForm";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { PostsList } from "../../components/PostsList";
import { UserModal } from "../../components/UserModal";
import { StyledDashboard, StyledUserDiv } from "./style";
import { UserContext } from "../../providers/UserContext/UserContext";
import { ModalForm } from "../../components/ModalForm";
import { CreateFormPost } from "../../components/Form/CreatePostForm";

export function Dashboard() {
  const {
    profileOpenModal,
    setProfileOpenModal,
    post,
    showCreateModal,
    setShowCreateModal,
  } = useContext(PostsContext);

  const { user } = useContext(UserContext);

  return (
    <StyledDashboard>
      <div className="aside__dashboard">
        <Aside />
      </div>
      <div className="main__dashboard">
        <StyledUserDiv>
          <SearchForm />
          <div className="profile">
            <h1>{user?.name}</h1>
            <img
              src={user?.avatar_url}
              onClick={() => setProfileOpenModal(!profileOpenModal)}
              alt="userImage"
            />
          </div>
        </StyledUserDiv>

        {profileOpenModal ? <UserModal /> : null}
        {post && (
          <ModalForm>
            {" "}
            <EditPostForm />{" "}
          </ModalForm>
        )}
        {showCreateModal && (
          <ModalForm>
            {" "}
            <CreateFormPost />{" "}
          </ModalForm>
        )}
        <div className="profile">
          <img src={user?.avatar_url} alt="userImage" />
          <button onClick={() => setShowCreateModal(true)}>
            Realizar uma publicação
          </button>
        </div>
        <PostsList />
      </div>
    </StyledDashboard>
  );
}
