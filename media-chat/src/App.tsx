
import { ToastContainer } from "react-toastify";
import { LoginForm } from "./components/Form/LoginForm";
import { Router } from "./routes";
import { GlobalStyles } from "./styles/Global";

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
      <Router />
    </div>
</>
  );
}

export default App;
