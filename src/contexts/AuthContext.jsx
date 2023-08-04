import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { signing } from "../services/auth";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const navigate = useNavigate();

  const signin = async (data) => {
    try {
      const response = await signing(data);
      localStorage.setItem("token", response);
      toast.success("Inicio de sesión exitoso");
      navigate("/home");
    } catch (error) {
      toast.error("Credenciales incorrectas");
    }
  };

  const getToken = () => {
    return token;
  };

  return (
    <AuthContext.Provider value={{ signin, getToken, token }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
