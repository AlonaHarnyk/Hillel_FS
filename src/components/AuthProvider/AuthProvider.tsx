import { useEffect, type ReactNode } from "react";
import { getCurrentUser, refreshSession } from "../../api/authServices";
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

    const init = async () => {
      const isSuccess = await refreshSession();
      if (isSuccess) {
        setIsFetching(true);
        const user = await getCurrentUser();
        setUser(user);
        setIsFetching(false);
      }
    };
    init();
  }, [setIsFetching, setUser]);
  return children;
};

