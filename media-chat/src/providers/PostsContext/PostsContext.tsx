import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import { IDefaultError, IDefaultProviderProps } from "../UserContext/@types";
import {
  IPost,
  IPostFormValues,
  IPostsContext,
  IResponsePost,
  IResponsePosts,
} from "./@types";

export const PostsContext = createContext<IPostsContext>({} as IPostsContext);

export const PostsProvider = ({ children }: IDefaultProviderProps) => {
  const [posts, setPosts] = useState<IPost[] | null>([]);
  const [post, setPost] = useState<IPost | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const PostsRead = async () => {
      try {
        const response = await api.get<IResponsePosts>(
          "posts?_expand=user&_embed=comments"
        );
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
        const response = await api.post<IResponsePost>("posts", formData, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setPost(response.data.post);
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
        const response = await api.patch<IResponsePost>(
          `posts/${postId}`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        setPost(response.data.post);
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
        const response = await api.delete(`posts/${postId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  return (
    <PostsContext.Provider
      value={{ PostCreate, PostUpdate, PostDelete, post, posts }}
    >
      {children}
    </PostsContext.Provider>
  );
};
