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
  likesComment: [];
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
  commentsRead: (postId: number) => Promise<void>;
  isOpenedComments: IPost | null;
  setIsOpenedComments: React.Dispatch<React.SetStateAction<IPost | null>>;
  showCreateModal: boolean;
  setShowCreateModal: React.Dispatch<React.SetStateAction<boolean>>;
  setPost: React.Dispatch<React.SetStateAction<IPost | null>>;
  comments: IComment[];
  profileOpenModal: boolean;
  setProfileOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  editComments: (commentId: number, formData: IComment) => Promise<void>;
  deleteComment: (commentId: number) => Promise<void>;
  comment: IComment | null;
  setComment: React.Dispatch<React.SetStateAction<IComment | null>>;
  createComments: (formData: IComment[]) => Promise<void>;
  filterPosts: (category: string) => void;
  newPostList: IPost[];
  postList: IPost[];
  setPostList: React.Dispatch<React.SetStateAction<IPost[]>>;
  updateLikePost: (postId: number) => Promise<void>;
  updateDeslikePost: (likeArray: ILikepost[]) => Promise<void>;
  filterPostsByInput: () => void;
  likeArray: ILikepost[];
}
