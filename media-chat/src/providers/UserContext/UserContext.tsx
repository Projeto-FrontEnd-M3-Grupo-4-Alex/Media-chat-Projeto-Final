import { AxiosError } from "axios";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../../services/api";
import {
  IDefaultError,
  IDefaultProviderProps,
  ILoginFormValues,
  IRegisterFormValues,
  IResponseUser,
  IResponseUsers,
  IUpdateUserFormValues,
  IUser,
  IUserContext,
} from "./@types";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState<IUser[] | null>([]);

  const navigate = useNavigate();

  const userRegister = async (formData: IRegisterFormValues) => {
    try {
      const response = await api.post<IResponseUser>("register", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      toast.success("cadastro realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      const currentError = error as AxiosError<IDefaultError>;
      toast.error(currentError.response?.data.error);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    setLoading(true);
    try {
      const response = await api.post<IResponseUser>("login", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", response.data.user.id);
      toast.success("login realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      const currentError = error as AxiosError<IDefaultError>;
      toast.error(currentError.response?.data.error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");
    if (token) {
      const autoLogin = async () => {
        try {
          const response = await api.get<IResponseUser>(`users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data.user);
          navigate("/dashboard");
        } catch (error) {
          localStorage.removeItem("@TOKEN");
          localStorage.removeItem("@USERID");
        }
      };
      autoLogin();
    }
  }, []);

  const userLogOut = () => {
    setUser(null);
    localStorage.removeItem("@TOKEN");
    localStorage.removeItem("@USERID");
    navigate("/");
  };

  const readUsers = async () => {
    try {
      const response = await api.get<IResponseUsers>("users");
      setUsers(response.data.users);
    } catch (error) {
      const currentError = error as AxiosError<IDefaultError>;
      toast.error(currentError.response?.data.error);
    }
  };

  const userUpdate = async (formData: IUpdateUserFormValues) => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");
    if (token) {
      try {
        const response = await api.patch<IResponseUser>(
          `users/${userId}`,
          formData,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        console.log(response);
        toast.success("User atualizada com sucesso", { autoClose: 2000 });
      } catch (error) {
        console.log(error);
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  const userDelete = async () => {
    const token = localStorage.getItem("@TOKEN");
    const userId = localStorage.getItem("@USERID");
    if (token) {
      try {
        const response = await api.delete(`users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        loading,
        setLoading,
        userRegister,
        userLogin,
        userLogOut,
        readUsers,
        userUpdate,
        userDelete,
        user,
        users,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
