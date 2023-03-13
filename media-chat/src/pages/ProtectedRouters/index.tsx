import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { UserContext } from "../../providers/UserContext/UserContext";
import { PostsProvider } from "../../providers/PostsContext/PostsContext";
import { Navigate } from "react-router-dom";

export const ProtectedRouters = () => {
  const { user } = useContext(UserContext);

  window.location.pathname;

  return (
    <PostsProvider>{user ? <Outlet /> : <Navigate to={"/"} />}</PostsProvider>
  );
};
