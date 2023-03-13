import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IPost } from "../PostsContext/@types";
import { PostsContext } from "../PostsContext/PostsContext";
import { IDefaultError, IDefaultProviderProps } from "../UserContext/@types";
import { IFavoritePost, IFavoritePostContext } from "./@types";
import { AxiosError } from "axios";
import { UserContext } from "../UserContext/UserContext";

export const FavoritePostContext = createContext({} as IFavoritePostContext);

export const FavoritePostProvider = ({ children }: IDefaultProviderProps) => {
  const { favoritePostList, setFavoritePostList } = useContext(UserContext);

  const addFavoritePost = async (userId: number, data: IPost) => {
    console.log(data);
    const token = localStorage.getItem("@TOKEN");
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
      setFavoritePostList(newFavoritePostList);
    } catch (error) {
      const currentError = error as AxiosError<IDefaultError>;
      toast.error(currentError.response?.data.error);
    }
  };


  const removeFavoritePostList = (currentFavoritePostList: IFavoritePost) => {
    const newLists = favoritePostList.filter(
      (post) => post.id !== currentFavoritePostList.id
    );
    toast.success('Post removido com sucesso', { autoClose: 2000 });
    setFavoritePostList(newLists);
  };
  return (
    <FavoritePostContext.Provider
      value={{ favoritePostList, setFavoritePostList, addFavoritePost, removeFavoritePostList }}
    >
      {children}
    </FavoritePostContext.Provider>
  );
};
