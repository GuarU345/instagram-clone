import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import useAuthStore from "./hooks/useAuth";
import ProtectedRoute from "./components/ProtectedRoute";
import Home from "./pages/Home";
import Register from "./pages/Register";
import { ModalProvider } from "./contexts/ModalContext";
import { ModalList } from "./components/Modals";
import { FeedProvider } from "./contexts/FeedContext";

function App() {
  const { isAuth } = useAuthStore();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          element={
            <FeedProvider>
              <ModalProvider modals={ModalList}>
                <ProtectedRoute isAuth={isAuth} />
              </ModalProvider>
            </FeedProvider>
          }
        >
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
