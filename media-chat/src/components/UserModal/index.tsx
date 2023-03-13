import { CgProfile } from "react-icons/cg";
import { StyledDiv } from "./style";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { UserContext } from "../../providers/UserContext/UserContext";
import { TbLogout } from "react-icons/tb";

export const UserModal = () => {
  const { setProfileOpenModal } = useContext(PostsContext);
  const { user, userLogOut } = useContext(UserContext);
  return (
    <StyledDiv>
      <div className="name">
        <h2>{user?.name}</h2>
        <img src={user?.avatar_url} className="userImg" alt="userImage" />
      </div>
      <div className="userInfo">
        <div className="profileDiv">
          <Link to="/profile">
            {" "}
            <CgProfile size={18} color="white" />
            Perfil{" "}
          </Link>
        </div>
        <div className="logoutDiv">
          <TbLogout size = {18} color = "white" onClick={() => {
              userLogOut();
            }}/>
          <p
            onClick={() => {
              userLogOut();
            }}
          >
            Sair
          </p>
        </div>
      </div>
    </StyledDiv>
  );
};
