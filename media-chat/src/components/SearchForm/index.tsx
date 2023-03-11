import { MdSearch } from "react-icons/md";
import { useContext } from "react";
import { PostsContext } from "../../providers/PostsContext/PostsContext";

export const SearchForm = () => {
  const { filterPostsByInput, search, setSearch } = useContext(PostsContext);

  return (
    <div>
      <input
        type="text"
        placeholder="Search something"
        value={search}
        onChange={(event) => setSearch(event.currentTarget.value)}
      />
      <button type="submit" onClick={filterPostsByInput}>
        <MdSearch />
      </button>
    </div>
  );
};
