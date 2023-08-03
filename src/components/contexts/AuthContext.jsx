import { createContext, useContext } from "react";

export const AuthContext = createContext(null);

export const useAuth = () => {
  return useContext(AuthContext);
};

function AuthProvider({ children }) {
  const setToken = (token) => {
    localStorage.setItem("token", token);
  };

  const getToken = () => {
    return localStorage.getItem("token");
  };

  return (
    <AuthContext.Provider value={{ setToken, getToken }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
