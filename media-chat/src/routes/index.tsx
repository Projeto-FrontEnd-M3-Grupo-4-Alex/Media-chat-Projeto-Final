import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/Login";
import { ProtectedRouters } from "../pages/ProtectedRouters";
import { ProfilePage } from "../pages/ProfilePage";
import { ResgisterPage } from "../pages/Register";
import { PostPage } from "../pages/PostPage";
import { FavoritePostProvider } from "../providers/FavoritePostContext/FavoritePostContex";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<ResgisterPage />} />
      <Route path="/dashboard" element={<ProtectedRouters />}>
        <Route
          index
          element={
            <FavoritePostProvider>
              <Dashboard />
            </FavoritePostProvider>
          }
        />
      </Route>
      <Route path="/profile" element={<ProtectedRouters />}>
        <Route
          index
          element={
            <FavoritePostProvider>
              <ProfilePage />
            </FavoritePostProvider>
          }
        />
      </Route>
      <Route path="/post/:postId" element={<ProtectedRouters />}>
        <Route index element={<PostPage />} />
      </Route>
    </Routes>
  );
}
