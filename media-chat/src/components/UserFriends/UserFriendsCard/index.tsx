import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { StyledUserFriendCardDiv } from "./style";

interface iUserFriendsCardProps {
  name: string;
  avatar_url: string;
  id: number;
}

export function UserFriendsCard({
  name,
  avatar_url,
  id,
}: iUserFriendsCardProps) {
  const { followUsers } = useContext(UserContext);

  async function unfollowUser() {
    await followUsers(id);
  }

  return (
    <StyledUserFriendCardDiv>
      <div className="userInfoDivision">
        <img src={avatar_url} className="followUserImage" alt="" />
        <h3>{name}</h3>
      </div>
      <button onClick={unfollowUser}>Deixar de seguir</button>
    </StyledUserFriendCardDiv>
  );
}
