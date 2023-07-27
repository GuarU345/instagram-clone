import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./components/user/Register";
import Login from "./components/user/Login";
import Home from "./components/main/Home";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signin" element={<Login />} />
        <Route path="/" element={<Navigate to="/signin" />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/home" element={<Home />} />
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
