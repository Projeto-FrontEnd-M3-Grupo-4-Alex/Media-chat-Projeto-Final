import { AxiosError } from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IDefaultError, IDefaultProviderProps } from "../UserContext/@types";
import { UserContext } from "../UserContext/UserContext";
import {
  IComment,
  ILikepost,
  IPost,
  IPostFormValues,
  IPostsContext,
} from "./@types";

export const PostsContext = createContext<IPostsContext>({} as IPostsContext);

export const PostsProvider = ({ children }: IDefaultProviderProps) => {
  const recommendListStoraged = localStorage.getItem("@RecommendList");
  const [posts, setPosts] = useState<IPost[]>([]);
  const [post, setPost] = useState<IPost | null>(null);
  const [filteredPost, setFilteredPost] = useState<IPost[]>([]);
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const [showCreateModal, setShowCreateModal] = useState(false);
  const { user } = useContext(UserContext);
  const [postList, setPostList] = useState<IPost[]>([]);
  const [recommendPostsList, setReccomendPostsLists] = useState<string[]>(
    recommendListStoraged ? JSON.parse(recommendListStoraged) : []
  );
  const [likeArray, SetlikeArray] = useState<ILikepost[]>([]);
  const [recommendList, setRecommendList] = useState<IPost[]>([]);

  const newPostList = filteredPost.length > 0 ? filteredPost : posts;

  useEffect(() => {
    localStorage.setItem("@RecommendList", JSON.stringify(recommendPostsList));
  }, [recommendPostsList]);

  const filterPostsByInput = () => {
    if (search !== "") {
      const searchPosts = posts.filter(
        (post) =>
          post?.category.toLowerCase().includes(search.toLowerCase()) ||
          post?.title.toLowerCase().includes(search.toLowerCase()) ||
          post?.tags?.toLowerCase().includes(search.toLowerCase()) ||
          post?.content.toLowerCase().includes(search.toLowerCase()) ||
          post?.where.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPost(searchPosts);
      setReccomendPostsLists([...recommendPostsList, search]);
      setSearch("");
    } else {
      setFilteredPost([]);
    }
  };

  useEffect(() => {
    const PostsRead = async () => {
      try {
        const response = await api.get<IPost[]>("posts", {
          params: { _expand: "user", _embed: "likesPost" },
        });
        setPosts(response.data);
        navigate("/dashboard");
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    };
    PostsRead();
    GetLikes();
  }, []);

  const PostCreate = async (formData: IPostFormValues) => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.post<IPost>("posts", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPosts([response.data, ...posts]);
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

  const commentsRead = async (
    postId: number,
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>
  ) => {
    try {
      const response = await api.get<IComment[]>(`comments`, {
        params: { postId, _expand: "user", _embed: "likesComment" },
      });
      setComments(response.data);
    } catch (error) {
      const currentError = error as AxiosError<IDefaultError>;
      toast.error(currentError.response?.data.error);
    }
  };

  const createComments = async (
    formData: IComment,
    comments: IComment[],
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>
  ) => {
    const token = localStorage.getItem("@TOKEN");
    if (token && user) {
      try {
        const response = await api.post<IComment>("comments", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        const newComment = {
          ...response.data,
          user,
        };

        user && setComments([...comments, newComment]);
      } catch (error) {
        console.log(error);

        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  const editComments = async (
    commentId: number,
    formData: IComment,
    comments: IComment[],
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>
  ) => {
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

  const deleteComment = async (
    commentId: number,
    comments: IComment[],
    setComments: React.Dispatch<React.SetStateAction<IComment[]>>
  ) => {
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

  const updateLikePost = async (postId: number) => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const formData = {
        postId: postId,
        userId: user?.id,
      };
      try {
        const response = await api.post(`likesPost`, formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log(response.data);
        SetlikeArray([...likeArray, response.data]);
      } catch (error) {
        console.log(error);
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  const GetLikes = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      try {
        const response = await api.get("likesPost", {
          headers: { Authorization: `Bearer ${token}` },
        });
        SetlikeArray(response.data);
      } catch (error) {
        console.log(error);
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };
  const updateDeslikePost = async () => {
    const token = localStorage.getItem("@TOKEN");
    if (token) {
      const findLikeId = likeArray.find((like) => user?.id === like.userId);
      console.log(findLikeId);
      const likeId = findLikeId?.id;
      try {
        const response = await api.delete(`likesPost/${likeId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        console.log("delete ok");
        const filteredLikes = likeArray.filter((like) => like.id !== likeId);
        SetlikeArray(filteredLikes);
      } catch (error) {
        console.log(error);
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

  const recommendedPosts = () => {
    if (recommendPostsList.length > 0) {
      const filterPosts = posts.filter((post) => post.userId !== user?.id);

      const recommendPostsLowerCase = recommendPostsList.map((post) =>
        post.toLowerCase()
      );

      const clearRecommendPosts = [...new Set(recommendPostsLowerCase)];

      function includesLoop(target: string) {
        const isIncludeList = clearRecommendPosts.map((term) =>
          target.includes(term)
        );

        return isIncludeList.some((isInclude) => isInclude);
      }

      const filterRecommendPosts = filterPosts.filter((post) => {
        return (
          includesLoop(post.category) ||
          includesLoop(post.content.toLowerCase()) ||
          includesLoop(post.title.toLowerCase()) ||
          (post.tags && includesLoop(post.tags.toLowerCase())) ||
          includesLoop(post.where.toLowerCase())
        );
      });

      setRecommendList(filterRecommendPosts);
    }
  };

  useEffect(() => {
    recommendedPosts();
  }, [posts, recommendPostsList]);

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
        setPost,
        showCreateModal,
        setShowCreateModal,
        editComments,
        deleteComment,
        createComments,
        filterPosts,
        newPostList,
        postList,
        setPostList,
        updateLikePost,
        updateDeslikePost,
        filterPostsByInput,
        likeArray,
        recommendList,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};
