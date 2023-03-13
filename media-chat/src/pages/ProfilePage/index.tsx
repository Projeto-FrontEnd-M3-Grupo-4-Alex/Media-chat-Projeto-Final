import { useContext, useState } from "react";
import { BiEdit, BiHome } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
import { FavoritePost } from "../../components/FavoritePost";
import { UserEditModal } from "../../components/UserEditModal";
import { UserFriends } from "../../components/UserFriends";
import { UserPosts } from "../../components/UserPosts";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledProfileDiv } from "./style";

export const ProfilePage = () => {
  const { user, userLogOut, favoritePostList } = useContext(UserContext);


  console.log(user);

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

        <div>
        <UserFriends />
           <h2 className = "favoritePostTitle">Salvos</h2> 
    {favoritePostList.length === 0 ? (
      <p className = "emptyFavoritePost">Voce não tem um posto favorito</p>
    ) : <FavoritePost />}  
     <UserPosts />  
        </div>
      </div>
      {profileEditModal ? (
        <UserEditModal setProfileEditModal={setProfileEditModal} />
      ) : null}

     
     
    </StyledProfileDiv>
  );
};
