import { useEffect, useState, type ReactNode } from "react";
import { AuthContext } from "./authContext";

const PASSWORD = "admin123";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuth, setIsAuth] = useState(() => {
    const isAuth = localStorage.getItem("isAuth");
    if (isAuth === null) {
      return false;
    } else {
      return JSON.parse(isAuth);
    }
  });

  const login = (password: string) => {
    if (password === PASSWORD) {
      setIsAuth(true);
    } else {
      alert("Incorrect password");
    }
  };

  const logout = () => {
    setIsAuth(false);
  };

  useEffect(() => {
    localStorage.setItem("isAuth", JSON.stringify(isAuth));
  }, [isAuth]);

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
