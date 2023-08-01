import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Home from "./components/main/Home";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider, { AuthContext } from "./components/contexts/AuthContext";
import Profile from "./components/profile/Profile";
import Layout from "./components/main/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/signin"
          element={
            <AuthProvider>
              <Login />
            </AuthProvider>
          }
        />
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signup" element={<Register />} />
        <Route
          path="/profile"
          element={
            <AuthProvider>
              <Layout>
                <Profile />
              </Layout>
            </AuthProvider>
          }
        />
        <Route
          path="/home"
          element={
            <AuthProvider>
              <Home />
            </AuthProvider>
          }
        />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
