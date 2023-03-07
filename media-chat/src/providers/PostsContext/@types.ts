export interface IPost {
  userId: number;
  thumbnail: string;
  title: string;
  content: string;
  tags?: [];
  where: string;
  rating?: string;
  id: number;
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

export interface ISubmitHandler {
  search: string;
}


export interface IResponsePost {
  post: IPost;
}

export interface IResponsePosts {
  posts: IPost[];
}

export interface IPostsContext {
  post: IPost | null;
  posts: IPost[] | null;
  PostsRead: () => Promise<void>;
  PostCreate: (formData: IPostFormValues) => Promise<void>;
  PostUpdate: (postId: number, formData: IPostFormValues) => Promise<void>;
  PostDelete: (postId: number) => Promise<void>;
  search:string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
}
