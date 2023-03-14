import { SyntheticEvent, useContext } from "react";
import { UserContext } from "../../../../providers/UserContext/UserContext";

interface iSuggestUserCardProps {
  avatar_url: string;
  name: string;
  id: number;
}

export function SuggestUserCard({
  avatar_url,
  name,
  id,
}: iSuggestUserCardProps) {
  const { followUsers } = useContext(UserContext);

  async function addUser(event: SyntheticEvent<HTMLButtonElement>) {
    const buttonId = event.currentTarget.id;

    await followUsers(Number(buttonId));
  }

  return (
    <li>
      <div className="user__information">
        <img src={avatar_url} alt="Imagem de perfil dos usuários" />
        <h3>{name}</h3>
      </div>
      <button id={String(id)} onClick={(event) => addUser(event)}>
        Seguir
      </button>
    </li>
  );
}
