import { createContext, useContext, useEffect, useState } from "react";
import { AuthContextProviderType, AuthContextType } from "./Auth.types";

const getInitialState = (): boolean => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  return isLoggedIn ? JSON.parse(isLoggedIn).user : false;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = ({ children }: AuthContextProviderType) => {
  const [user, setUser] = useState(getInitialState);

  const login = () => {
    localStorage.setItem("isLoggedIn", JSON.stringify({ user: true }));
    setUser(true);
  };

  const logout = () => {
    localStorage.setItem("isLoggedIn", JSON.stringify({ user: false }));
    setUser(false);
  };

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn")
      ? (JSON.parse(localStorage.getItem("isLoggedIn") || "") as {
          user: boolean;
        })
      : null;
    if (isLoggedIn && isLoggedIn.user) {
      setUser(true);
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
