import { SearchForm } from "../../components/SearchForm";
import { useContext } from "react";
import { Aside } from "../../components/Aside";
import { EditPostForm } from "../../components/Form/EditPostForm";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { PostsList } from "../../components/PostsList";
import { StyledDashboard, StyledUserDiv } from "./style";
import { UserContext } from "../../providers/UserContext/UserContext";
import { ModalForm } from "../../components/ModalForm";
import { CreateFormPost } from "../../components/Form/CreatePostForm";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { TbLogout } from "react-icons/tb";

export function Dashboard() {
  const { post, showCreateModal, setShowCreateModal } =
    useContext(PostsContext);
  const { user, profileOpen, setProfileOpen, userLogOut } =
    useContext(UserContext);

  return (
    <StyledDashboard>
      <div className="aside__dashboard">
        <Aside />
      </div>
      <div className="main__dashboard">
        <StyledUserDiv>
          <SearchForm />
          <div className="ContainerProfile">
            <div
              className="Profile"
              onClick={() => setProfileOpen(!profileOpen)}
            >
              <h1>{user?.name}</h1>
              <img src={user?.avatar_url} alt="userImage" />
            </div>

            {profileOpen && (
              <div className="userInfo">
                <div className="profileDiv">
                  <CgProfile />
                  <Link to="/profile">Perfil </Link>
                </div>
                <div className="logoutDiv">
                  <TbLogout />
                  <p
                    onClick={() => {
                      userLogOut();
                    }}
                  >
                    Sair
                  </p>
                </div>
              </div>
            )}
          </div>
        </StyledUserDiv>

        <div className="profile_post">
          <img id="userImage" src={user?.avatar_url} alt="userImage" />
          <button id="bttn_post" onClick={() => setShowCreateModal(true)}>
            Realizar uma publicação
          </button>
        </div>

        {post && (
          <ModalForm>
            <EditPostForm />
          </ModalForm>
        )}
        {showCreateModal && (
          <ModalForm>
            <CreateFormPost />
          </ModalForm>
        )}
        <PostsList />
      </div>
    </StyledDashboard>
  );
}
