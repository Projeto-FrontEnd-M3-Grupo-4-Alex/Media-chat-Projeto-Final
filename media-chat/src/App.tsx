
import { ToastContainer } from "react-toastify";
import { PostsProvider } from "./providers/PostsContext/PostsContext";
import { UserProvider } from "./providers/UserContext/UserContext";
import { Router } from "./routes";
import { GlobalStyles } from "./styles/Global";
import "react-toastify/dist/ReactToastify.css";


function App() {
  return (
<>
<GlobalStyles/>
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
</>
  );
}

export default App;
