import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Dashboard } from "../pages/Dashboard";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/Login";
import { ProtectedRouters } from "../pages/ProtectedRouters";
import { ProfilePage } from "../pages/ProfilePage";
import { ResgisterPage } from "../pages/Register";
<<<<<<< HEAD
import { PostsProvider } from "../providers/PostsContext/PostsContext";
import { FavoritePostProvider } from "../providers/FavoritePostContext/FavoritePostContex";
=======
import { PostPage } from "../pages/PostPage";
>>>>>>> a09ed926aa2c4ab5b0dc43deae459fe9b99d7d26

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<ResgisterPage />} />
      <Route path="/dashboard" element={<ProtectedRouters />}>
        <Route
          index
          element={
            <PostsProvider>
              <FavoritePostProvider>
              <Dashboard />
              </FavoritePostProvider>
            </PostsProvider>
          }
        />
      </Route>
      <Route path="/profile" element={<ProtectedRouters />}>
        <Route index element={<ProfilePage />} />
      </Route>
      <Route path="/post/:postId" element={<ProtectedRouters />}>
        <Route index element={<PostPage />} />
      </Route>
    </Routes>
  );
}
