import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IDefaultError, IDefaultProviderProps } from "../UserContext/@types";
import { UserContext } from "../UserContext/UserContext";
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
  const [comments, setComments] = useState<IComment[]>([]);
  const [comment, setComment] = useState<IComment | null>(null);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isOpened, setIsOpened] = useState(false);
  const [isOpenedComments, setIsOpenedComments] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const { user } = useContext(UserContext);
  const [profileOpenModal, setProfileOpenModal] = useState(false);
  const [ postList, setPostList] = useState<IPost[]>([])


  const searchPostList = postList.filter((post) =>
    search === ''
      ? true
      : post.category.toLowerCase().includes(search.toLowerCase()) ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.tags?.toLowerCase().includes(search.toLowerCase())
  );


  useEffect(() => {
    const PostsRead = async () => {
      try {
        const response = await api.get<IPost[]>("posts", {
          params: { _expand: "user" },
        });
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
      const response = await api.get<IComment[]>(`comments`, {
        params: { postId, _expand: "user" },
      });
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
        const newComment = {
          ...response.data,
          user,
        };
        setComments([...comments, newComment]);
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
        comments,
        profileOpenModal,
        setProfileOpenModal,
        editComments,
        deleteComment,
        comment,
        setComment,
        createComments,
        postList,
        setPostList,
        searchPostList
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
