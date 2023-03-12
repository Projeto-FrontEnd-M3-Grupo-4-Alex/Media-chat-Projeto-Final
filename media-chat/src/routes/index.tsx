import { Route, Routes } from "react-router-dom";
import { About } from "../pages/About";
import { Dashboard } from "../pages/Dashboard";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/Login";
import { ProtectedRouters } from "../pages/ProtectedRouters";
import { ProfilePage } from "../pages/ProfilePage";
import { ResgisterPage } from "../pages/Register";
import { PostsProvider } from "../providers/PostsContext/PostsContext";
import { FavoritePostProvider } from "../providers/FavoritePostContext/FavoritePostContex";

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
    </Routes>
  );
}
