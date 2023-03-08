import { ToastContainer } from "react-toastify";
import { LoginForm } from "./components/Form/LoginForm";
import { PostsProvider } from "./providers/PostsContext/PostsContext";
import { UserProvider } from "./providers/UserContext/UserContext";
import { Router } from "./routes";

function App() {
  return (
    <div className="App">
      <ToastContainer
        position="top-center"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <UserProvider>
        <PostsProvider>
          <Router />
        </PostsProvider>
      </UserProvider>
    </div>
  );
}

export default App;
