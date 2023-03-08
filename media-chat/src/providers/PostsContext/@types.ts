import { IUser } from "../UserContext/@types";

export interface IPost {
  userId: number;
  thumbnail: string;
  title: string;
  content: string;
  tags?: [];
  where: string;
  rating?: string;
  id: number;
  user: IUser;
  comments: IComments[];
}

export interface IComments {
  content: string;
}

export interface IPostFormValues {
  userId: number;
  thumbnail: string;
  title: string;
  content: string;
  tags?: [];
  where: string;
  rating?: string;
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
}
