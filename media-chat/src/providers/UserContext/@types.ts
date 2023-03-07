export interface IDefaultProviderProps {
  children: React.ReactNode;
}

export interface IUser {
  email: string;
  name: string;
  bio: string;
  avatar_url: string;
  follow: [];
  followers: [];
  id: string;
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
  bio: string;
  avatar_url: string;
}

export interface IResponseUser {
  user: IUser;
  accessToken: string;
}

export interface IResponseUsers {
  users: IUser[];
}

export interface IDefaultError {
  error: string;
}

export interface IUserContext {
  user: IUser | null;
  users: IUser[] | null;
  userRegister: (formData: IRegisterFormValues) => Promise<void>;
  userLogin: (formData: ILoginFormValues) => Promise<void>;
  userLogOut: () => void;
  readUsers: () => Promise<void>;
  userUpdate: (formData: IUpdateUserFormValues) => Promise<void>;
  userDelete: () => Promise<void>;
}
