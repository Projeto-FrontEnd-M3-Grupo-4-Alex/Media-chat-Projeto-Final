import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";

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
    <div>
      <div>
        <img src={avatar_url} alt="" />
        <h3>{name}</h3>
      </div>
      <button onClick={unfollowUser}>Deixar de seguir</button>
    </div>
  );
}
