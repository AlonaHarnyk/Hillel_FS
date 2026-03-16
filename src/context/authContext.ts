import { createContext } from "react";

export const AuthContext = createContext<null | {
  a: number;
  changeA: (a: number) => void;
}>(null);
