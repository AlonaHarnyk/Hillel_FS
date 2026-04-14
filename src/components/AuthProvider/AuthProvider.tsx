import { useEffect, type ReactNode } from "react";
import { getCurrentUser } from "../../api/authServices";
import {
  selectSetIsFetching,
  selectSetuser,
  useAuthStore,
} from "../../stores/authStore";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const setUser = useAuthStore(selectSetuser);
  const setIsFetching = useAuthStore(selectSetIsFetching);

  useEffect(() => {
    setIsFetching(true);
    getCurrentUser()
      .then((user) => {
        setUser(user);
      })
      .finally(() => setIsFetching(false));
  }, [setIsFetching, setUser]);
  return children;
};
