import { createContext } from "react";

export const AuthContext = createContext(null);


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
