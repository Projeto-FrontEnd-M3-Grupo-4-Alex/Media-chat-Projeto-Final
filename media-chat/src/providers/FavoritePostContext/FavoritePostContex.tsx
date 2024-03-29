import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IPost } from "../PostsContext/@types";
import { IDefaultError, IDefaultProviderProps } from "../UserContext/@types";
import { IFavoritePost, IFavoritePostContext } from "./@types";
import { AxiosError } from "axios";
import { UserContext } from "../UserContext/UserContext";

export const FavoritePostContext = createContext({} as IFavoritePostContext);

export const FavoritePostProvider = ({ children }: IDefaultProviderProps) => {
  const { favoritePostList, setFavoritePostList, user } =
    useContext(UserContext);

  const addFavoritePost = async (userId: number, data: IPost) => {
    const token = localStorage.getItem("@TOKEN");

    const postFound = user?.favorites.find((post) => post.id === data.id);

    if (!postFound) {
      const newFavoritePostList = [...favoritePostList, data];
      try {
        const response = await api.patch(
          `users/${userId}`,
          { favorites: newFavoritePostList },

          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        toast.success("Salvou com sucesso um post como post favorito", {
          autoClose: 2000,
        });
        setFavoritePostList([...favoritePostList, response.data]);
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    } else {
      toast.warning("Esse post já foi adicionado aos favoritos");
    }
  };

  const removeFavoritePostList = (currentFavoritePostList: IFavoritePost) => {
    const newLists = favoritePostList.filter(
      (post) => post.id !== currentFavoritePostList.id
    );
    toast.success("Post removido com sucesso", { autoClose: 2000 });
    setFavoritePostList(newLists);
  };
  return (
    <FavoritePostContext.Provider
      value={{
        favoritePostList,
        setFavoritePostList,
        addFavoritePost,
        removeFavoritePostList,
      }}
    >
      {children}
    </FavoritePostContext.Provider>
  );
};
