import { useContext, useState } from "react";
import { BiEdit, BiHome } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FavoritePost } from "../../components/FavoritePost";
import { UserEditModal } from "../../components/UserEditModal";
import { FavoritePostContext } from "../../providers/FavoritePostContext/FavoritePostContex";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledProfileDiv } from "./style";

export const ProfilePage = () => {
  const { user, userLogOut } = useContext(UserContext);
  const { favoritePostList } = useContext(FavoritePostContext);

  const { newPostList } = useContext(PostsContext);

  const [profileEditModal, setProfileEditModal] = useState(false);

  return (
    <StyledProfileDiv>
      <div className="header">
        <div className="userName">
          <img src={user?.avatar_url} alt="userImage" />
          <h2>{user?.name}</h2>
        </div>
        <span className="logoutIcon">
          <TbLogout
            size={45}
            color="white"
            onClick={() => {
              userLogOut();
            }}
          />
        </span>
      </div>
      <div className="mainPageContainer">
        <div className="change">
          <div className="inicialPage">         
            <Link to="/dashboard"> <BiHome size={33} color="white" />Página inicial</Link>
          </div>
          <div className = "editDiv">
          <button
            className="userEdit"
            onClick={() => setProfileEditModal(true)}
          >
            <BiEdit size = {33} color= "white"/>
            <p>Editar perfil</p>
          </button>
          </div>
        </div>
        {profileEditModal ? (
          <UserEditModal setProfileEditModal={setProfileEditModal} />
        ) : null}

        <div>
           <h2>Salvos</h2> 
          {/*  {favoritePostList.length > 0 && <FavoritePost />}    */}
        </div>
      </div>
    </StyledProfileDiv>
  );
};
