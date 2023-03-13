import { IFavoritePost } from "../FavoritePostContext/@types";

export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  email: string;
  name: string;
  bio: string;
  avatar_url: string;
  followUsers: number[];
  id: number;
  favorites: number[];
}

export interface IRegisterFormValues {
  email: string;
  name: string;
  bio?: string;
  avatar_url?: string;
  password: string;
  confirmPassword: string;
}

export interface ILoginFormValues {
  email: string;
  password: string;
}

export interface IUpdateUserFormValues {
  name: string;
  email: string;
  password: string;
  avatar_url: string;
}

export interface IResponseUser {
  user: IUser;
  accessToken: string;
}

export interface IDefaultError {
  error: string;
}

export interface IUserContext {
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  user: IUser | null;
  users: IUser[] | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogOut: () => void;
  userUpdate: (formData: IUpdateUserFormValues) => Promise<void>;
  userDelete: () => Promise<void>;

  setFavoritePostList: React.Dispatch<React.SetStateAction<IFavoritePost[]>>;

  profileOpenModal: boolean;
  setProfileOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  sugestionsList: IUser[];

  followUsers: (userId: number) => Promise<void>;
  favoritePostList: IFavoritePost[];

  profileOpen: boolean;
  setProfileOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
