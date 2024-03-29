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
  likesPost: ILikepost[];
  comments?: IComment[];
}

export interface ILikepost {
  userId: number;
  postId: number;
  id: Number;
}

export interface IComment {
  content: string;
  userId: number;
  postId: number;
  id: number;
  likesComment?: [];
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

export interface ICommentsFormValues {
  userId: number;
  content: string;
  postId: number;
}

export interface IPostsContext {
  post: IPost | null;
  posts: IPost[] | null;
  PostCreate: (formData: IPostFormValues) => Promise<void>;
  PostUpdate: (postId: number, formData: IPostFormValues) => Promise<void>;
  PostDelete: (postId: number) => Promise<void>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  commentsRead: (
    postId: number,
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>
  ) => Promise<void>;
  showCreateModal: boolean;
  setShowCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPost: React.Dispatch<React.SetStateAction<IPost | null>>;
  editComments: (
    commentId: number,
    formData: IComment,
    comments: IComment[],
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>
  ) => Promise<void>;
  deleteComment: (
    commentId: number,
    comments: IComment[],
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>
  ) => Promise<void>;
  createComments: (
    formData: IComment,
    comments: IComment[],
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>
  ) => Promise<void>;
  filterPosts: (category: string) => void;
  newPostList: IPost[];
  postList: IPost[];
  setPostList: React.Dispatch<React.SetStateAction<IPost[]>>;
  updateLikePost: (postId: number) => Promise<void>;
  updateDeslikePost: (likeArray: ILikepost[]) => Promise<void>;
  filterPostsByInput: () => void;
  likeArray: ILikepost[];
  recommendList: IPost[];
}
