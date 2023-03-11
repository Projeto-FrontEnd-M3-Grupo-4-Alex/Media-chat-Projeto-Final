import { useContext } from "react";
import { UserContext } from "../../../providers/UserContext/UserContext";
import { SuggestUserCard } from "./SuggestUserCard";
import { StyledSuggestUsers } from "./SuggestUserCard/style";

export function SuggestUsersList() {
  const { sugestionsList, user } = useContext(UserContext);

  return (
    <StyledSuggestUsers>
      <h2>Sugestões para seguir</h2>
      <ul>
        {sugestionsList.map((user) => (
          <SuggestUserCard
            avatar_url={user.avatar_url}
            name={user.name}
            id={Number(user.id)}
            key={user.id}
          />
        ))}
      </ul>
    </StyledSuggestUsers>
  );
}
