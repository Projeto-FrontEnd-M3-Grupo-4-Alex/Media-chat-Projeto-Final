import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IDefaultError, IDefaultProviderProps } from "../UserContext/@types";
import {
  IComment,
  ICommentsFormValues,
  IPost,
  IPostFormValues,
  IPostsContext,
} from "./@types";

export const PostsContext = createContext<IPostsContext>({} as IPostsContext);

export const PostsProvider = ({ children }: IDefaultProviderProps) => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPost] = useState<IPost | null>(null);
  const [filteredPost, setFilteredPost] = useState<IPost[]>([]);
  const [comments, setComments] = useState<IComment[]>([]);
  const [comment, setComment] = useState<IComment | null>(null);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedComments, setIsOpenedComments] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const newPostList = filteredPost.length > 0 ? filteredPost : posts;

  useEffect(() => {
    const PostsRead = async () => {
      try {
        const response = await api.get<IPost[]>("posts?_expand=user");
        setPosts(response.data);
        navigate("/dashboard");
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    };
    PostsRead();
  }, []);

  const PostCreate = async (formData: IPostFormValues) => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.post<IPost>("posts", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts([...posts, response.data]);
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  const PostUpdate = async (postId: number, formData: IPostFormValues) => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        await api.patch<IPost>(`posts/${postId}`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const udpatedPosts = posts.map((post) => {
          if (post.id === postId) {
            return { ...post, ...formData };
          } else {
            return { ...post };
          }
        });
        setPosts(udpatedPosts);
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  const PostDelete = async (postId: number) => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        await api.delete(`posts/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const filteredPosts = posts.filter((post) => post.id !== postId);
        setPosts(filteredPosts);
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  const commentsRead = async (postId: number) => {
    try {
      const response = await api.get<IComment[]>(
        `posts/${postId}/comments?_expand=user`
      );
      setComments(response.data);
    } catch (error) {
      const currentError = error as AxiosError<IDefaultError>;
      toast.error(currentError.response?.data.error);
    }
  };

  const createComments = async (formData: ICommentsFormValues) => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.post<IComment>("comments", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setComments([...comments, response.data]);
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  const editComments = async (commentId: number, formData: IComment) => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        await api.patch(`comments/${commentId}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const udpatedComments = comments.map((comment) => {
          if (comment.id === commentId) {
            return { ...comment, ...formData };
          } else {
            return { ...comment };
          }
        });
        setComments(udpatedComments);
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  const deleteComment = async (commentId: number) => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        await api.delete(`comments/${commentId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const filteredComments = comments.filter(
          (comment) => comment.id !== commentId
        );
        setComments(filteredComments);
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  const filterPosts = (category: string) => {
    if (category !== "Home") {
      const filterPost = posts.filter(
        (post) => post.category == category.toLowerCase()
      );
      setFilteredPost(filterPost);
    } else {
      setFilteredPost([]);
    }
  };

  return (
    <PostsContext.Provider
      value={{
        PostCreate,
        PostUpdate,
        PostDelete,
        post,
        posts,
        search,
        setSearch,
        commentsRead,
        isOpened,
        setIsOpened,
        isOpenedComments,
        setIsOpenedComments,
        setPost,
        showCreateModal,
        setShowCreateModal,
        editComments,
        deleteComment,
        comment,
        setComment,
        createComments,
        filterPosts,
        newPostList,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
