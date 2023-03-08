import { IUser } from "../UserContext/@types";

export interface IPost {
  userId: number;
  thumbnail: string;
  title: string;
  content: string;
  tags?: string;
  where: string;
  rating?: string;
  category: string;
  id: number;
  user: IUser;
  comments: IComments[];
}

export interface IComments {
  content: string;
  user: IUser;
}

export interface IPostFormValues {
  userId: number;
  thumbnail?: string;
  title: string;
  content: string;
  tags?: string;
  where: string;
  rating?: string;
  category: string;
}

export interface ISubmitHandler {
  search: string;
}

export interface IResponsePost {
  post: IPost;
}

export interface IResponsePosts {
  posts: IPost[];
  user: IUser;
  comments: IComments[];
}

export interface IPostsContext {
  post: IPost | null;
  posts: IPost[] | null;
  PostCreate: (formData: IPostFormValues) => Promise<void>;
  PostUpdate: (postId: number, formData: IPostFormValues) => Promise<void>;
  PostDelete: (postId: number) => Promise<void>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  commentsRead: (postId: number) => Promise<void>;
  isOpened: boolean;
  setIsOpened: React.Dispatch<React.SetStateAction<boolean>>;
  isOpenedComments: boolean;
  setIsOpenedComments: React.Dispatch<React.SetStateAction<boolean>>;
  showCreateModal: boolean;
  setShowCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPost: React.Dispatch<React.SetStateAction<IPost | null>>;
}
