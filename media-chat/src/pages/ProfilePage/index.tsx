import { useContext, useState } from "react";
import { BiEdit, BiHome } from "react-icons/bi";
import { TbLogout } from "react-icons/tb";
import { Link } from "react-router-dom";
/* import { FavoritePost } from "../../components/FavoritePost"; */
import { UserEditModal } from "../../components/UserEditModal";
import { FavoritePostContext } from "../../providers/FavoritePostContext/FavoritePostContex";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledProfileDiv } from "./style";

export const ProfilePage = () => {
  const { user, userLogOut } = useContext(UserContext);
  const{ favoritePostList} = useContext(FavoritePostContext)

  const [profileEditModal, setProfileEditModal] = useState(false);

  return (
    <StyledProfileDiv>
      <div className="header">
        <div className="userName">
          <img src={user?.avatar_url} alt="userImage" />
          <h2>{user?.name}</h2>
        </div>

        <TbLogout
          onClick={() => {
            userLogOut();
          }}
        />
      </div>
      <div className="change">
        <Link to="/">
          <BiHome /> Página inicial
        </Link>

        <button className="userEdit" onClick={() => setProfileEditModal(true)}>
          <BiEdit />
          <p>Editar perfil</p>
        </button>
      </div>
      {profileEditModal ? (
        <UserEditModal setProfileEditModal={setProfileEditModal} />
      ) : null}

      <div>
        <h2>Salvos</h2>
      {/*  {favoritePostList.length > 0 && <FavoritePost />}  */}
      </div>
    </StyledProfileDiv>
  );
};
