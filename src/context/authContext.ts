import { createContext } from "react";

export const AuthContext = createContext<null | {
  isAuth: boolean;
  login: (password: string) => void;
  logout: () => void;
}>(null);
