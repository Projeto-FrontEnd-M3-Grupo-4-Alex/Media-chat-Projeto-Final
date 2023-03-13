import { MdSearch } from "react-icons/md";
import { FormEvent, useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { StyledForm } from "./style";

export const SearchForm = () => {
  const { filterPostsByInput, search, setSearch } = useContext(PostsContext);

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    filterPostsByInput();
  }

  return (
    <StyledForm onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Search something"
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
      <button type="submit">
        <MdSearch />
      </button>
    </StyledForm>
  );
};
