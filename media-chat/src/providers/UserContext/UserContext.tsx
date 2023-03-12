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
  IUpdateUserFormValues,
  IUser,
  IUserContext,
} from "./@types";

export const UserContext = createContext<IUserContext>({} as IUserContext);

export const UserProvider = ({ children }: IDefaultProviderProps) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<IUser | null>(null);
  const [users, setUsers] = useState<IUser[]>([]);
  const [suggestUsers, setSuggestUsers] = useState<IUser[]>([]);
  const navigate = useNavigate();
  const sugestionsList = suggestUsers.length > 0 ? suggestUsers : users;

  const userRegister = async (formData: IRegisterFormValues) => {
    setLoading(true);
    try {
      const response = await api.post<IResponseUser>("register", formData);
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", String(response.data.user.id));
      toast.success("cadastro realizado com sucesso!");
      navigate("/dashboard");
    } catch (error) {
      const currentError = error as AxiosError<IDefaultError>;
      toast.error(currentError.response?.data.error);
    } finally {
      setLoading(false);
    }
  };

  const userLogin = async (formData: ILoginFormValues) => {
    setLoading(true);
    try {
      const response = await api.post<IResponseUser>("login", formData);
      console.log(response.data.user)
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.accessToken);
      localStorage.setItem("@USERID", String(response.data.user.id));
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
          const response = await api.get<IUser>(`users/${userId}`, {
            headers: { Authorization: `Bearer ${token}` },
          });
          setUser(response.data);
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

  useEffect(() => {
    const readUsers = async () => {
      try {
        const response = await api.get<IUser[]>("users");
        setUsers(response.data);
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    };
    readUsers();
  }, []);

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
        toast.success("User atualizada com sucesso", { autoClose: 2000 });

        setUser(response.data.user);
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
        setUser(null);
        navigate("/");
      } catch (error) {
        const currentError = error as AxiosError<IDefaultError>;
        toast.error(currentError.response?.data.error);
      }
    }
  };

  const updateFollowUser = async (userId: number, data: number[]) => {
    const token = localStorage.getItem("@TOKEN");
    try {
      const response = await api.patch(
        `users/${userId}`,
        { followUsers: data },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(response.data);
    } catch (error) {
      const currentError = error as AxiosError<IDefaultError>;
      toast.error(currentError.response?.data.error);
    }
  };

    const followUsers = async (userId: number) => {
    const userFound = user?.followUsers.find((id) => id == userId);

    if (user && !userFound && userId !== Number(user.id)) {
      const updateFollowUserArray = [...user.followUsers, userId];
      await updateFollowUser(Number(user.id), updateFollowUserArray);
    } else if (user) {
      const filteredFollowers = user.followUsers.filter((id) => id !== userId);
      await updateFollowUser(Number(user.id), filteredFollowers);
    }
  };

  useEffect(() => {
    filterSuggestUsers();
  }, [user]);
 
   const filterSuggestUsers = () => {
    console.log(user)
    console.log(user?.followUsers)
    if (user && user.followUsers.length > 0) {
    
   
      const followUsersArray = user.followUsers;
      const suggestUsersList = users.filter((followedUser) => {
        if (
          followedUser.id !== user.id &&
          !followUsersArray.includes(followedUser.id)
        ) {
          return followedUser;
        }
      });
      setSuggestUsers(suggestUsersList);
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
        userUpdate,
        userDelete,
        user,
        users,
        sugestionsList,
        followUsers  
         
        
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
