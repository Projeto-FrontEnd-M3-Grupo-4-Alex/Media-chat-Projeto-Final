import { MdSearch } from "react-icons/md";
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { StyledDiv } from "./style";

export const SearchInput = () => {
  const { filterPostsByInput, search, setSearch } = useContext(PostsContext);

  return (
    <StyledDiv>
      <input
        type="text"
        placeholder="Search something"
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
      <MdSearch onClick={() => filterPostsByInput()} />
    </StyledDiv>
  );
};
