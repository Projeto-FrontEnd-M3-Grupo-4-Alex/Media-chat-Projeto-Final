import { IPost } from "../PostsContext/@types";

export interface IFavoritePost {
  thumbnail: string;
  id: number;
  content: string;
}

export interface IFavoritePostContext {
  favoritePostList: IFavoritePost[];
  setFavoritePostList: React.Dispatch<React.SetStateAction<IFavoritePost[]>>;
  addFavoritePost: (userId: number, data: IPost[]) => Promise<void>;
}
