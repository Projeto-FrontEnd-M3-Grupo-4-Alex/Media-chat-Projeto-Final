import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { UserFriendsCard } from "./UserFriendsCard";

export function UserFriends() {
  const { user, users } = useContext(UserContext);

  const followUsersComplete = users?.filter((followUser) =>
    user?.followUsers.includes(followUser.id)
  );

  return (
    <div>
      <h2>Seguindo</h2>
      {user?.followUsers.length === 0 ? (
        <h3>Você não seguiu nenhum usuário ainda</h3>
      ) : (
        <ul>
          {followUsersComplete?.map((user) => (
            <UserFriendsCard
              key={user.id}
              name={user.name}
              avatar_url={user.avatar_url}
              id={user.id}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
