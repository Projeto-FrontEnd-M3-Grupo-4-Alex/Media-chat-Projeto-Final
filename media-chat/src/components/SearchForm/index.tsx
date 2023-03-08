import { MdSearch } from "react-icons/md";
import { useContext } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { PostsContext } from "../../providers/PostsContext/PostsContext";
import { ISubmitHandler } from "../../providers/PostsContext/@types";

export const SearchForm = () => {
  const { setSearch } = useContext(PostsContext);
  const { handleSubmit, register } = useForm<ISubmitHandler>();

  const submit: SubmitHandler<ISubmitHandler> = (data) => {
    setSearch(data.search);
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <input
        type="text"
        placeholder="Search something"
        {...register("search")}
      />
      <button type="submit"><MdSearch /></button>
    </form>
  );
};
