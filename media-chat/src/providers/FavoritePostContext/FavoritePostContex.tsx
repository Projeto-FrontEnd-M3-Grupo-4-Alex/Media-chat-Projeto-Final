import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IPost } from "../PostsContext/@types";
import { PostsContext } from "../PostsContext/PostsContext";
import { IDefaultError, IDefaultProviderProps } from "../UserContext/@types";
import { IFavoritePost, IFavoritePostContext} from "./@types";
import { AxiosError } from "axios";

export const FavoritePostContext = createContext({} as IFavoritePostContext);

export const FavoritePostProvider = ({ children }: IDefaultProviderProps) => {
    const { post } = useContext(PostsContext)
   const [ favoritePostList, setFavoritePostList] = useState<IFavoritePost[]>([])


 

    const addFavoritePost = async (userId: number, data: IPost[]) => {
        const token = localStorage.getItem("@TOKEN");
        try {
          const response = await api.patch(
            `users/${userId}`,
            { favorites: data },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
    
      setFavoritePostList([...favoritePostList, response.data])
        } catch (error) {
            const currentError = error as AxiosError<IDefaultError>;
            toast.error(currentError.response?.data.error);
          }
        };
      

return (
    <FavoritePostContext.Provider
      value={{favoritePostList, setFavoritePostList, addFavoritePost}}
    >
      {children}
    </FavoritePostContext.Provider>
  );


}