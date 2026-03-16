import { useState, type ReactNode } from "react";
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [a, setA] = useState(10);

  return (
    <AuthContext.Provider
      value={{
        a,
        changeA(a: number) {
          setA(a);
        },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
