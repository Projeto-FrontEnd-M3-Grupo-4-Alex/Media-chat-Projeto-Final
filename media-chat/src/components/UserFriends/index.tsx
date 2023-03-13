import { useContext } from "react";
import { UserContext } from "../../providers/UserContext/UserContext";
import { StyledUserFriendDiv } from "./style";
import { UserFriendsCard } from "./UserFriendsCard";

export function UserFriends() {
  const { user, users } = useContext(UserContext);

  const followUsersComplete = users?.filter((followUser) =>
    user?.followUsers.includes(followUser.id)
  );

  return (
    <StyledUserFriendDiv>
      <h2 className = "followerTitle">Seguindo</h2>
      {user?.followUsers.length === 0 ? (
        <h3 className = "emptyText">Você não seguiu nenhum usuário ainda</h3>
      ) : (
        <ul>
          {followUsersComplete?.map((user) => (
            <UserFriendsCard
              name={user.name}
              avatar_url={user.avatar_url}
              id={user.id}
            />
          ))}
        </ul>
      )}
    </StyledUserFriendDiv>
  );
}
